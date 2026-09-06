import React, { useRef, useEffect, useState } from "react";

const ScratchCard = ({ imageSrc, altText, coverColor = "#C0C0C0" }) => {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    // Match canvas display size to its rendered bounding rect
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;

    // Fill the canvas with a solid cover color (or pattern)
    ctx.fillStyle = coverColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Optional instruction text on top of the scratch layer
    ctx.fillStyle = "#555555";
    ctx.font = "16px sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("Scratch to reveal", canvas.width / 2, canvas.height / 2);
  }, [coverColor]);

  const getCoordinates = (e) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    return {
      x: clientX - rect.left,
      y: clientY - rect.top,
    };
  };

  const scratch = (e) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const { x, y } = getCoordinates(e);

    ctx.globalCompositeOperation = "destination-out";
    ctx.beginPath();
    ctx.arc(x, y, 25, 0, Math.PI * 2); // Radius of the scratch brush
    ctx.fill();
  };

  const startScratching = (e) => {
    setIsDrawing(true);
    scratch(e);
  };

  const stopScratching = () => {
    setIsDrawing(false);
  };

  return (
    <div className="relative w-full h-64 sm:h-80 overflow-hidden rounded shadow-inner select-none">
      {/* Background Image to reveal */}
      <img
        src={imageSrc}
        alt={altText}
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      />

      {/* Overlay Canvas to scratch off */}
      <canvas
        ref={canvasRef}
        onMouseDown={startScratching}
        onMouseMove={scratch}
        onMouseUp={stopScratching}
        onMouseLeave={stopScratching}
        onTouchStart={startScratching}
        onTouchMove={scratch}
        onTouchEnd={stopScratching}
        className="absolute inset-0 w-full h-full cursor-pointer touch-none"
      />
    </div>
  );
};

export default ScratchCard;
