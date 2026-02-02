import React, { useEffect } from 'react';
import { Photo } from '../types';

interface LightboxProps {
  photo: Photo;
  allPhotos: Photo[];
  onClose: () => void;
  onNavigate: (photo: Photo) => void;
}

const Lightbox: React.FC<LightboxProps> = ({ photo, allPhotos, onClose, onNavigate }) => {
  const currentIndex = allPhotos.findIndex(p => p.id === photo.id);
  const previousPhoto = currentIndex > 0 ? allPhotos[currentIndex - 1] : null;
  const nextPhoto = currentIndex < allPhotos.length - 1 ? allPhotos[currentIndex + 1] : null;

  // Keyboard controls
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft' && previousPhoto) {
        onNavigate(previousPhoto);
      } else if (e.key === 'ArrowRight' && nextPhoto) {
        onNavigate(nextPhoto);
      } else if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [previousPhoto, nextPhoto, onNavigate, onClose]);

  return (
    <div 
      className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-12 animate-in fade-in duration-300"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="lightbox-title"
    >
      {/* Close Button */}
      <button 
        className="absolute top-8 right-8 text-white/50 hover:text-white text-3xl z-[110] transition-colors"
        onClick={onClose}
        title="Close (ESC)"
        aria-label="Close lightbox gallery"
      >
        &times;
      </button>

      {/* Navigation Info */}
      <div 
        className="absolute top-8 left-8 text-white/50 text-sm z-[110]"
        aria-live="polite"
        aria-label={`Photo ${currentIndex + 1} of ${allPhotos.length}`}
      >
        {currentIndex + 1} / {allPhotos.length}
      </div>

      {/* Main Content */}
      <div className="relative max-w-4xl w-full flex flex-col items-center">
        {/* Image Container */}
        <div className="relative w-full flex items-center justify-center">
          {/* Left Arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              if (previousPhoto) onNavigate(previousPhoto);
            }}
            disabled={!previousPhoto}
            className={`absolute left-0 lg:left-[-60px] z-20 p-3 rounded-lg transition-all ${
              previousPhoto
                ? 'text-white/70 hover:text-white hover:bg-white/10 cursor-pointer'
                : 'text-white/20 cursor-not-allowed'
            }`}
            title="Previous (← arrow key)"
            aria-label="View previous photo"
            aria-disabled={!previousPhoto}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Image */}
          <img 
            src={photo.url} 
            alt={`${photo.title}. Photograph taken at ${photo.location} in ${photo.year}. ${photo.description}`}
            className="max-h-[80vh] w-auto object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
            id="lightbox-title"
          />

          {/* Right Arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              if (nextPhoto) onNavigate(nextPhoto);
            }}
            disabled={!nextPhoto}
            className={`absolute right-0 lg:right-[-60px] z-20 p-3 rounded-lg transition-all ${
              nextPhoto
                ? 'text-white/70 hover:text-white hover:bg-white/10 cursor-pointer'
                : 'text-white/20 cursor-not-allowed'
            }`}
            title="Next (→ arrow key)"
            aria-label="View next photo"
            aria-disabled={!nextPhoto}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Photo Info */}
        <div className="mt-8 text-center w-full" onClick={(e) => e.stopPropagation()}>
          <h2 className="text-2xl font-bold serif">{photo.title}</h2>
          <p className="text-neutral-400 text-sm mt-2">{photo.location} — {photo.year}</p>
          <p className="text-neutral-500 text-sm mt-4 italic max-w-md mx-auto">{photo.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Lightbox;
