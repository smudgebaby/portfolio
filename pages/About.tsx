
import React from 'react';
import { useMetaTags } from '../hooks/useMetaTags';

const About: React.FC = () => {
  useMetaTags({
    title: 'About Xinyi | Professional Photographer',
    description: 'Learn about Xinyi, a professional photographer specializing in urban, landscape, and conceptual photography. Discover the vision and disciplines behind the work.',
    keywords: 'about, photographer, artist, urban photography, landscape, visual artist',
  });

  return (
    <div className="pt-24 min-h-screen bg-black">
      <section className="px-6 py-20 max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-start">
        <div className="w-full md:w-1/2 aspect-[3/4] overflow-hidden bg-neutral-900 transition-all duration-1000">
          <img 
            src="./images/profile.jpg" 
            alt="Portrait of Xinyi, a professional photographer specializing in urban, landscape, and atmospheric photography" 
            className="w-full h-full object-cover" 
          />
        </div>
        <div className="w-full md:w-1/2">
          <h1 className="text-6xl font-bold serif mb-8">The Eye Behind the Lens</h1>
          <div className="space-y-6 text-neutral-400 text-lg leading-relaxed">
            <p>
              My work is an ongoing exploration of the spaces we inhabit and the moments we often overlook. I believe that photography is more than just documentation; it is a way to distill the chaos of the world into a single, resonant truth.
            </p>
            <p>
              Whether I am wandering through a snow-covered city or waiting for the perfect light in a remote landscape, my goal remains the same: to capture the soul of the subject.
            </p>
            <p>
              This site is my personal digital archive—a place where my most significant works are categorized and shared.
            </p>
          </div>
          
          <div className="mt-12 pt-12 border-t border-white/10 grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-xs uppercase tracking-widest font-bold text-white mb-4">Core Disciplines</h4>
              <ul className="text-sm text-neutral-500 space-y-2">
                <li>Urban Stillness</li>
                <li>Landscape Geometry</li>
                <li>Atmospheric Portraits</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-widest font-bold text-white mb-4">Equipment</h4>
              <ul className="text-sm text-neutral-500 space-y-2">
                <li>Fujifilm X100VI</li>
                <li>Sony ZVE-10</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
