
import React, { useState, useEffect, useRef } from 'react';
import { Photo } from '../types';

interface PhotoCardProps {
  photo: Photo;
  onClick: (photo: Photo) => void;
}

const PhotoCard: React.FC<PhotoCardProps> = ({ photo, onClick }) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imageRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Intersection Observer for lazy loading
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: '50px', // Start loading 50px before image enters viewport
        threshold: 0.01,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div 
      ref={containerRef}
      className="group relative cursor-pointer overflow-hidden aspect-[4/5] bg-neutral-900 image-reveal"
      onClick={() => onClick(photo)}
      role="button"
      tabIndex={0}
      aria-label={`${photo.title}. Photo from ${photo.location}, ${photo.year}. Click to open in lightbox`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick(photo);
        }
      }}
    >
      {hasError ? (
        <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center text-neutral-600 border border-white/5">
          <span className="text-sm uppercase tracking-widest font-bold mb-2">Image Missing</span>
          <span className="text-[10px] break-all">{photo.url}</span>
        </div>
      ) : (
        <>
          {/* Blur placeholder - shown while loading */}
          {!isLoaded && (
            <div className="absolute inset-0 bg-gradient-to-br from-neutral-800 to-neutral-900 animate-pulse" />
          )}
          
          {/* Lazy loaded image */}
          {isInView && (
            <img 
              ref={imageRef}
              src={photo.url} 
              alt={`${photo.title}. Photo taken at ${photo.location} in ${photo.year}. ${photo.description}`}
              onLoad={handleImageLoad}
              onError={() => setHasError(true)}
              className={`w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105 ${
                isLoaded ? 'opacity-100' : 'opacity-0'
              }`}
            />
          )}
        </>
      )}
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
        <h3 className="text-xl font-bold serif transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{photo.title}</h3>
        <p className="text-xs text-white/70 mt-1 tracking-widest uppercase transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
          {photo.location} — {photo.year}
        </p>
      </div>
    </div>
  );
};

export default PhotoCard;
