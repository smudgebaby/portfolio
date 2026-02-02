
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CATEGORIES, PHOTOS } from '../constants';
import { Photo } from '../types';
import PhotoCard from '../components/PhotoCard';
import Lightbox from '../components/Lightbox';
import { getCuratorInsight } from '../services/getCuratorInsight';
import { useMetaTags } from '../hooks/useMetaTags';

const CategoryView: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [insight, setInsight] = useState<string | null>(null);
  const [loadingInsight, setLoadingInsight] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  const category = CATEGORIES.find(c => c.slug === slug);
  const filteredPhotos = PHOTOS.filter(p => p.category === slug);

  // Set meta tags based on category
  useMetaTags({
    title: category ? `${category.name} | Xinyi Photography` : 'Photography Collection | Xinyi',
    description: category ? `Explore Xinyi's ${category.name} photography collection. ${category.description}` : 'Browse photography collections',
    keywords: category ? `${category.name}, photography, collection, ${category.name} photos` : 'photography collection',
    image: category?.coverImage,
  });

  useEffect(() => {
    if (category) {
      setLoadingInsight(false);
      setInsight(getCuratorInsight(category.slug, category.description));
    }
  }, [category]);

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold serif mb-4">Collection not found</h2>
          <button onClick={() => navigate('/')} className="text-neutral-400 underline uppercase tracking-widest text-sm">Back to Home</button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 min-h-screen bg-black">
      {/* Category Header */}
      <section className="px-6 py-16 border-b border-white/10 max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div>
          <button 
            onClick={() => navigate('/')} 
            className="text-neutral-500 text-xs tracking-widest uppercase hover:text-white transition-colors mb-4 flex items-center gap-2"
            aria-label="Back to all collections"
          >
            <span aria-hidden="true">&larr;</span> Back to Collections
          </button>
          <h1 className="text-6xl md:text-7xl font-bold serif">{category.name}</h1>
          <p className="mt-4 text-neutral-400 max-w-xl text-lg">{category.description}</p>
        </div>
        
        <div className="md:w-1/3 bg-neutral-900/50 p-6 border-l-2 border-neutral-700 italic">
          <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-neutral-500 mb-2">Curator's Insight</h4>
          {loadingInsight ? (
            <div className="animate-pulse flex space-y-2 flex-col" aria-hidden="true">
              <div className="h-2 bg-neutral-800 rounded w-3/4"></div>
              <div className="h-2 bg-neutral-800 rounded"></div>
              <div className="h-2 bg-neutral-800 rounded w-5/6"></div>
            </div>
          ) : (
            <p className="text-sm text-neutral-300 leading-relaxed font-light">"{insight}"</p>
          )}
        </div>
      </section>

      {/* Grid */}
      <section className="px-6 py-20 max-w-7xl mx-auto">
        <h2 className="sr-only">Photography Collection - {category.name}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
          {filteredPhotos.map(photo => (
            <PhotoCard key={photo.id} photo={photo} onClick={setSelectedPhoto} />
          ))}
        </div>
      </section>

      {/* Lightbox / Modal */}
      {selectedPhoto && (
        <Lightbox 
          photo={selectedPhoto}
          allPhotos={filteredPhotos}
          onClose={() => setSelectedPhoto(null)}
          onNavigate={setSelectedPhoto}
        />
      )}
    </div>
  );
};

export default CategoryView;
