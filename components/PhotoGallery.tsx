"use client";

import { useState } from "react";

interface PhotoGalleryProps {
  images: string[];
  title: string;
}

export const PhotoGallery = ({ images, title }: PhotoGalleryProps) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="space-y-3">
      <h1 className="text-2xl font-bold text-zinc-900 md:text-3xl">{title}</h1>

      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl bg-zinc-200 md:aspect-[21/9]">
        <img
          src={images[currentIndex]}
          alt={`${title} - Foto ${currentIndex + 1}`}
          className="h-full w-full object-cover transition duration-300"
        />

        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 text-zinc-900 shadow-md hover:bg-white"
            >
              ❮
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 text-zinc-900 shadow-md hover:bg-white"
            >
              ❯
            </button>
            <div className="absolute bottom-4 right-4 rounded-full bg-black/70 px-3 py-1 text-xs font-semibold text-white">
              {currentIndex + 1} / {images.length}
            </div>
          </>
        )}
      </div>
    </div>
  );
};