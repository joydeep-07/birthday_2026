import { useRef, useEffect } from "react";
import { gsap } from "gsap";

function lerp(a, b, n) {
  return (1 - n) * a + n * b;
}

function getLocalPointerPos(e, rect) {
  let clientX = 0,
    clientY = 0;
  if (e.touches && e.touches.length > 0) {
    clientX = e.touches[0].clientX;
    clientY = e.touches[0].clientY;
  } else {
    clientX = e.clientX;
    clientY = e.clientY;
  }
  return {
    x: clientX - rect.left,
    y: clientY - rect.top,
  };
}

function getMouseDistance(p1, p2) {
  const dx = p1.x - p2.x;
  const dy = p1.y - p2.y;
  return Math.hypot(dx, dy);
}

class ImageItem {
  DOM = { el: null, inner: null };
  defaultStyle = { scale: 1, x: 0, y: 0, opacity: 0 };
  rect = null;

  constructor(DOM_el) {
    this.DOM.el = DOM_el;
    this.DOM.inner = this.DOM.el.querySelector(".content__img-inner");
    this.getRect();
    this.initEvents();
  }
  initEvents() {
    this.resize = () => {
      gsap.set(this.DOM.el, this.defaultStyle);
      this.getRect();
    };
    window.addEventListener("resize", this.resize);
  }
  getRect() {
    if (this.DOM.el) {
      this.rect = this.DOM.el.getBoundingClientRect();
    }
  }
  destroy() {
    window.removeEventListener("resize", this.resize);
  }
}

class BaseTrail {
  constructor(container) {
    this.container = container;
    this.DOM = { el: container };
    this.images = [...this.DOM.el.querySelectorAll(".content__img")].map(
      (img) => new ImageItem(img),
    );
    this.imagesTotal = this.images.length;
    this.imgPosition = 0;
    this.zIndexVal = 1;
    this.activeImagesCount = 0;
    this.isIdle = true;

    // Increased threshold to account for image sizes + 15px gap, ensuring items space out nicely
    this.threshold = 120;

    this.mousePos = { x: 0, y: 0 };
    this.lastMousePos = { x: 0, y: 0 };
    this.cacheMousePos = { x: 0, y: 0 };

    this.rafId = null;
    this.isDestroyed = false;

    this.handlePointerMove = (ev) => {
      const rect = this.container.getBoundingClientRect();
      this.mousePos = getLocalPointerPos(ev, rect);
    };

    this.initHandlers();
  }

  initHandlers() {
    window.addEventListener("mousemove", this.handlePointerMove);
    window.addEventListener("touchmove", this.handlePointerMove);

    const initRender = (ev) => {
      const rect = this.container.getBoundingClientRect();
      this.mousePos = getLocalPointerPos(ev, rect);
      this.cacheMousePos = { ...this.mousePos };
      this.lastMousePos = { ...this.mousePos };

      this.rafId = requestAnimationFrame(() => this.render());

      window.removeEventListener("mousemove", initRender);
      window.removeEventListener("touchmove", initRender);
    };

    window.addEventListener("mousemove", initRender);
    window.addEventListener("touchmove", initRender);
  }

  render() {
    if (this.isDestroyed) return;

    this.cacheMousePos.x = lerp(this.cacheMousePos.x, this.mousePos.x, 0.15);
    this.cacheMousePos.y = lerp(this.cacheMousePos.y, this.mousePos.y, 0.15);

    let distance = getMouseDistance(this.cacheMousePos, this.lastMousePos);

    if (distance > this.threshold) {
      this.showNextImage();
      this.lastMousePos = { ...this.cacheMousePos };
    }

    if (this.isIdle && this.zIndexVal !== 1) {
      this.zIndexVal = 1;
    }

    this.rafId = requestAnimationFrame(() => this.render());
  }

  showNextImage() {}

  onImageActivated() {
    this.activeImagesCount++;
    this.isIdle = false;
  }

  onImageDeactivated() {
    this.activeImagesCount--;
    if (this.activeImagesCount === 0) {
      this.isIdle = true;
    }
  }

  destroy() {
    this.isDestroyed = true;
    cancelAnimationFrame(this.rafId);
    window.removeEventListener("mousemove", this.handlePointerMove);
    window.removeEventListener("touchmove", this.handlePointerMove);
    this.images.forEach((img) => img.destroy());
  }
}

class ImageTrailVariant1 extends BaseTrail {
  showNextImage() {
    ++this.zIndexVal;
    this.imgPosition = (this.imgPosition + 1) % this.imagesTotal;
    const img = this.images[this.imgPosition];
    if (!img || !img.rect) return;

    gsap.killTweensOf(img.DOM.el);
    gsap
      .timeline({
        onStart: () => this.onImageActivated(),
        onComplete: () => this.onImageDeactivated(),
      })
      .fromTo(
        img.DOM.el,
        {
          opacity: 1,
          scale: 0.8,
          zIndex: this.zIndexVal,
          x: this.cacheMousePos.x - img.rect.width / 2,
          y: this.cacheMousePos.y - img.rect.height / 2,
          force3D: true,
        },
        {
          duration: 0.5,
          ease: "power2.out",
          scale: 1,
          x: this.mousePos.x - img.rect.width / 2,
          y: this.mousePos.y - img.rect.height / 2,
          force3D: true,
        },
        0,
      )
      .to(
        img.DOM.el,
        {
          duration: 0.4,
          ease: "power3.in",
          opacity: 0,
          scale: 0.3,
          force3D: true,
        },
        0.3,
      );
  }
}

class ImageTrailVariant2 extends BaseTrail {
  showNextImage() {
    ++this.zIndexVal;
    this.imgPosition = (this.imgPosition + 1) % this.imagesTotal;
    const img = this.images[this.imgPosition];
    if (!img || !img.rect) return;

    gsap.killTweensOf(img.DOM.el);
    gsap.killTweensOf(img.DOM.inner);

    gsap
      .timeline({
        onStart: () => this.onImageActivated(),
        onComplete: () => this.onImageDeactivated(),
      })
      .fromTo(
        img.DOM.el,
        {
          opacity: 1,
          scale: 0,
          zIndex: this.zIndexVal,
          x: this.cacheMousePos.x - img.rect.width / 2,
          y: this.cacheMousePos.y - img.rect.height / 2,
          force3D: true,
        },
        {
          duration: 0.5,
          ease: "power3.out",
          scale: 1,
          x: this.mousePos.x - img.rect.width / 2,
          y: this.mousePos.y - img.rect.height / 2,
          force3D: true,
        },
        0,
      )
      .fromTo(
        img.DOM.inner,
        { scale: 2, filter: "brightness(200%)" },
        {
          duration: 0.5,
          ease: "power2.out",
          scale: 1,
          filter: "brightness(100%)",
        },
        0,
      )
      .to(
        img.DOM.el,
        {
          duration: 0.4,
          ease: "power2.in",
          opacity: 0,
          scale: 0.2,
          force3D: true,
        },
        0.4,
      );
  }
}

class ImageTrailVariant3 extends BaseTrail {
  showNextImage() {
    ++this.zIndexVal;
    this.imgPosition = (this.imgPosition + 1) % this.imagesTotal;
    const img = this.images[this.imgPosition];
    if (!img || !img.rect) return;

    gsap.killTweensOf(img.DOM.el);

    gsap
      .timeline({
        onStart: () => this.onImageActivated(),
        onComplete: () => this.onImageDeactivated(),
      })
      .fromTo(
        img.DOM.el,
        {
          opacity: 1,
          scale: 0,
          zIndex: this.zIndexVal,
          xPercent: 0,
          yPercent: 0,
          x: this.cacheMousePos.x - img.rect.width / 2,
          y: this.cacheMousePos.y - img.rect.height / 2,
          force3D: true,
        },
        {
          duration: 0.5,
          ease: "power2.out",
          scale: 1,
          x: this.mousePos.x - img.rect.width / 2,
          y: this.mousePos.y - img.rect.height / 2,
          force3D: true,
        },
        0,
      )
      .to(
        img.DOM.el,
        {
          duration: 0.6,
          ease: "power3.out",
          opacity: 0,
          scale: 0.2,
          xPercent: gsap.utils.random(-25, 25),
          yPercent: -180,
          force3D: true,
        },
        0.4,
      );
  }
}

class ImageTrailVariant4 extends BaseTrail {
  showNextImage() {
    ++this.zIndexVal;
    this.imgPosition = (this.imgPosition + 1) % this.imagesTotal;
    const img = this.images[this.imgPosition];
    if (!img || !img.rect) return;

    gsap.killTweensOf(img.DOM.el);

    let dx = this.mousePos.x - this.cacheMousePos.x;
    let dy = this.mousePos.y - this.cacheMousePos.y;
    let distance = Math.hypot(dx, dy) || 1;
    dx /= distance;
    dy /= distance;

    gsap
      .timeline({
        onStart: () => this.onImageActivated(),
        onComplete: () => this.onImageDeactivated(),
      })
      .fromTo(
        img.DOM.el,
        {
          opacity: 1,
          scale: 0,
          zIndex: this.zIndexVal,
          x: this.cacheMousePos.x - img.rect.width / 2,
          y: this.cacheMousePos.y - img.rect.height / 2,
          force3D: true,
        },
        {
          duration: 0.4,
          ease: "power2.out",
          scale: 1,
          x: this.mousePos.x - img.rect.width / 2,
          y: this.mousePos.y - img.rect.height / 2,
          force3D: true,
        },
        0,
      )
      .to(
        img.DOM.el,
        {
          duration: 0.4,
          ease: "power3.in",
          opacity: 0,
          force3D: true,
        },
        0.3,
      )
      .to(
        img.DOM.el,
        {
          duration: 1.2,
          ease: "power4.out",
          x: `+=${dx * 90}`,
          y: `+=${dy * 90}`,
          force3D: true,
        },
        0,
      );
  }
}

class ImageTrailVariant5 extends BaseTrail {
  showNextImage() {
    let dx = this.mousePos.x - this.cacheMousePos.x;
    let dy = this.mousePos.y - this.cacheMousePos.y;
    let angle = Math.atan2(dy, dx) * (180 / Math.PI);

    ++this.zIndexVal;
    this.imgPosition = (this.imgPosition + 1) % this.imagesTotal;
    const img = this.images[this.imgPosition];
    if (!img || !img.rect) return;

    gsap.killTweensOf(img.DOM.el);

    gsap
      .timeline({
        onStart: () => this.onImageActivated(),
        onComplete: () => this.onImageDeactivated(),
      })
      .fromTo(
        img.DOM.el,
        {
          opacity: 1,
          scale: 0.2,
          zIndex: this.zIndexVal,
          rotation: angle - 15,
          x: this.cacheMousePos.x - img.rect.width / 2,
          y: this.cacheMousePos.y - img.rect.height / 2,
          force3D: true,
        },
        {
          duration: 0.7,
          ease: "power3.out",
          scale: 1,
          rotation: angle,
          x: this.mousePos.x - img.rect.width / 2,
          y: this.mousePos.y - img.rect.height / 2,
          force3D: true,
        },
        0,
      )
      .to(
        img.DOM.el,
        {
          duration: 0.4,
          ease: "power2.in",
          opacity: 0,
          scale: 0.5,
          force3D: true,
        },
        0.4,
      );
  }
}

class ImageTrailVariant6 extends BaseTrail {
  showNextImage() {
    let dx = this.mousePos.x - this.cacheMousePos.x;
    let dy = this.mousePos.y - this.cacheMousePos.y;
    let speed = Math.hypot(dx, dy);

    ++this.zIndexVal;
    this.imgPosition = (this.imgPosition + 1) % this.imagesTotal;
    const img = this.images[this.imgPosition];
    if (!img || !img.rect) return;

    const scaleFactor = gsap.utils.clamp(0.5, 1.8, speed / 50);

    gsap.killTweensOf(img.DOM.el);
    gsap
      .timeline({
        onStart: () => this.onImageActivated(),
        onComplete: () => this.onImageDeactivated(),
      })
      .fromTo(
        img.DOM.el,
        {
          opacity: 1,
          scale: 0,
          zIndex: this.zIndexVal,
          x: this.cacheMousePos.x - img.rect.width / 2,
          y: this.cacheMousePos.y - img.rect.height / 2,
          force3D: true,
        },
        {
          duration: 0.6,
          ease: "power3.out",
          scale: scaleFactor,
          x: this.mousePos.x - img.rect.width / 2,
          y: this.mousePos.y - img.rect.height / 2,
          force3D: true,
        },
        0,
      )
      .to(
        img.DOM.el,
        {
          duration: 0.4,
          ease: "power2.in",
          opacity: 0,
          scale: 0.2,
          force3D: true,
        },
        0.4,
      );
  }
}

class ImageTrailVariant7 extends BaseTrail {
  constructor(container) {
    super(container);
    this.visibleImagesCount = 0;
    this.visibleImagesTotal = Math.min(8, this.imagesTotal - 1);
  }

  showNextImage() {
    ++this.zIndexVal;
    this.imgPosition = (this.imgPosition + 1) % this.imagesTotal;
    const img = this.images[this.imgPosition];
    if (!img || !img.rect) return;

    this.visibleImagesCount++;
    gsap.killTweensOf(img.DOM.el);
    const scaleValue = gsap.utils.random(0.7, 1.3);

    gsap
      .timeline({
        onStart: () => this.onImageActivated(),
        onComplete: () => this.onImageDeactivated(),
      })
      .fromTo(
        img.DOM.el,
        {
          scale: scaleValue * 0.7,
          rotationZ: gsap.utils.random(-8, 8),
          opacity: 1,
          zIndex: this.zIndexVal,
          x: this.cacheMousePos.x - img.rect.width / 2,
          y: this.cacheMousePos.y - img.rect.height / 2,
          force3D: true,
        },
        {
          duration: 0.4,
          ease: "power2.out",
          scale: scaleValue,
          x: this.mousePos.x - img.rect.width / 2,
          y: this.mousePos.y - img.rect.height / 2,
          force3D: true,
        },
        0,
      );

    if (this.visibleImagesCount >= this.visibleImagesTotal) {
      const lastIndex =
        (this.imgPosition - this.visibleImagesTotal + this.imagesTotal) %
        this.imagesTotal;
      const oldImg = this.images[lastIndex];
      if (oldImg) {
        gsap.to(oldImg.DOM.el, {
          duration: 0.4,
          ease: "power3.in",
          opacity: 0,
          scale: 1.2,
          force3D: true,
        });
      }
    }
  }
}

class ImageTrailVariant8 extends BaseTrail {
  showNextImage() {
    const rect = this.container.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const relX = this.mousePos.x - centerX;
    const relY = this.mousePos.y - centerY;

    const rotX = -(relY / centerY) * 20;
    const rotY = (relX / centerX) * 20;

    ++this.zIndexVal;
    this.imgPosition = (this.imgPosition + 1) % this.imagesTotal;
    const img = this.images[this.imgPosition];
    if (!img || !img.rect) return;

    gsap.killTweensOf(img.DOM.el);

    gsap
      .timeline({
        onStart: () => this.onImageActivated(),
        onComplete: () => this.onImageDeactivated(),
      })
      .set(this.DOM.el, { perspective: 1000 }, 0)
      .fromTo(
        img.DOM.el,
        {
          opacity: 1,
          scale: 0.8,
          zIndex: this.zIndexVal,
          x: this.cacheMousePos.x - img.rect.width / 2,
          y: this.cacheMousePos.y - img.rect.height / 2,
          rotationX: rotX * 0.5,
          rotationY: rotY * 0.5,
          force3D: true,
        },
        {
          duration: 0.6,
          ease: "power3.out",
          scale: 1,
          x: this.mousePos.x - img.rect.width / 2,
          y: this.mousePos.y - img.rect.height / 2,
          rotationX: rotX,
          rotationY: rotY,
          force3D: true,
        },
        0,
      )
      .to(
        img.DOM.el,
        {
          duration: 0.4,
          ease: "power2.in",
          opacity: 0,
          scale: 0.3,
          force3D: true,
        },
        0.4,
      );
  }
}

const variantMap = {
  1: ImageTrailVariant1,
  2: ImageTrailVariant2,
  3: ImageTrailVariant3,
  4: ImageTrailVariant4,
  5: ImageTrailVariant5,
  6: ImageTrailVariant6,
  7: ImageTrailVariant7,
  8: ImageTrailVariant8,
};

export default function ImageTrail({ items = [], variant = 1 }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current || items.length === 0) return;

    const Cls = variantMap[variant] || variantMap[1];
    const trailInstance = new Cls(containerRef.current);

    return () => {
      trailInstance.destroy();
    };
  }, [variant, items]);

  return (
    <div
      className="w-full h-full relative z-[100] rounded-lg bg-transparent overflow-visible pointer-events-none"
      ref={containerRef}
    >
      {items.map((url, i) => (
        <div
          className="content__img w-[150px] aspect-[1.1] rounded-[15px] absolute top-0 left-0 opacity-0 overflow-hidden [will-change:transform,opacity,filter]"
          key={i}
        >
          <div
            className="content__img-inner bg-center bg-cover w-full h-full"
            style={{ backgroundImage: `url(${url})` }}
          />
        </div>
      ))}
    </div>
  );
}
