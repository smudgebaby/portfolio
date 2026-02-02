
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CATEGORIES } from '../constants';
import { useMetaTags } from '../hooks/useMetaTags';

const CategoryCover: React.FC<{ url: string; name: string }> = ({ url, name }) => {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div className="absolute inset-0 flex items-center justify-center bg-neutral-900 border border-white/5">
        <div className="text-center opacity-40">
          <p className="text-xs uppercase tracking-[0.2em] font-bold">Image Not Found</p>
          <p className="text-[10px] mt-1 italic">{url}</p>
        </div>
      </div>
    );
  }

  return (
    <img 
      src={url} 
      alt={`${name} photography collection cover image`}
      onError={() => setHasError(true)}
      className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-70 group-hover:opacity-40"
    />
  );
};

const Home: React.FC = () => {
  useMetaTags({
    title: 'Xinyi | Professional Photography Portfolio',
    description: 'Explore Xinyi\'s professional photography portfolio showcasing urban, nature, and creative collections. A personal archive of captured moments organized by theme.',
    keywords: 'photography, portfolio, urban, nature, landscape, artist, visual',
  });

  return (
    <div className="pt-24 min-h-screen">
      {/* Hero */}
      <section className="px-6 py-20 max-w-7xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-bold serif leading-tight max-w-4xl">
          The world, through my <span className="italic">lens</span>.
        </h1>
        <p className="mt-8 text-xl text-neutral-400 max-w-2xl leading-relaxed">
          Welcome to my personal archive. A collection of captured moments, organized by theme and intent, showcasing my journey in photography.
        </p>
      </section>

      {/* Categories Grid */}
      <section className="px-6 pb-32 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CATEGORIES.map((cat) => (
            <Link 
              key={cat.id} 
              to={`/category/${cat.slug}`}
              className="group relative h-[600px] overflow-hidden bg-neutral-900 flex items-center justify-center text-center"
            >
              <CategoryCover url={cat.coverImage} name={cat.name} />
              <div className="relative z-10 px-8">
                <h2 className="text-5xl font-bold serif mb-4">{cat.name}</h2>
                <p className="text-neutral-300 max-w-sm mx-auto uppercase tracking-widest text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {cat.description}
                </p>
                <div className="mt-6 inline-block border-b border-white pb-1 text-sm tracking-widest font-medium group-hover:text-white transition-colors">
                  VIEW COLLECTION
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
