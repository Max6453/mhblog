'use client';

import { useState } from 'react';


type ImageItem = {
  src: string;
  alt: string;
};

const images: ImageItem[] = [
  { src: 'assets/wallpaper/Cyberpunk2077-Watson.jpg', alt: 'Cyberpunk 2077',},
  { src: 'assets/wallpaper/Cyberpunk2077-Evening.jpg', alt: 'Cyberpunk 2077',},
  { src: 'assets/wallpaper/Cyberpunk2077-Westbrook.jpg', alt: 'Cyberpunk 2077',},
  { src: 'assets/wallpaper/Waterfall-DS1.jpg', alt: 'Death Stranding',},
  { src: 'assets/wallpaper/flat-DS1.jpg', alt: 'Death Stranding'},
  { src: 'assets/wallpaper/No-Mans-Sky.jpg', alt: 'No Mans Sky'},
];

export default function ImageGallery() {
  return (
    <div className="p-6">
      {/* Gallery */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((img, index) => (
          <div key={index} className="rounded overflow-hidden shadow-md">
            <img src={img.src} alt={img.alt} className="w-full h-auto hover:scale-110 duration-300" />
            <div className="p-2 text-sm text-gray-600 capitalize">{img.alt}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
