import React from 'react'
import ImageGallery from './ImageGallery'

import img1 from "../assets/favourites/biryani.png";
import img2 from "../assets/favourites/momos.png";
import img3 from "../assets/favourites/icecream.png";
import img4 from "../assets/favourites/icecream2.png";
import img5 from "../assets/favourites/harry.png";
import img6 from "../assets/favourites/draco.png";
import img7 from "../assets/favourites/cherry.png";
import img8 from "../assets/favourites/peach.png";
import img9 from "../assets/favourites/chai.png";


const Memories = () => {



const favouriteImages = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,

  "https://images.unsplash.com/photo-1493770348161-369560ae357d?w=800&q=80",
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80",
  "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?w=800&q=80",
  "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=800&q=80",
  "https://images.unsplash.com/photo-1547592180-85f173990554?w=800&q=80",
  "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=800&q=80",
  "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=800&q=80",
  "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&q=80",
  "https://images.unsplash.com/photo-1506354666786-959d6d497f1a?w=800&q=80",
  "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800&q=80",
  "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=800&q=80",
  "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&q=80",
  "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80",
  "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=800&q=80",
  "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=800&q=80",
];

  return (
    <div>
      <ImageGallery images={favouriteImages} />
    </div>
  );
}

export default Memories