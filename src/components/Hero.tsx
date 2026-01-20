import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center text-center bg-zinc-900 text-white overflow-hidden">
      {/* Background overlay for a subtle textural feel, even without a specific image */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 to-zinc-800 opacity-90"></div>
      
      {/* Content */}
      <div className="relative z-10 p-8 max-w-5xl mx-auto">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-sans font-extrabold tracking-tighter leading-none mb-6 text-white uppercase drop-shadow-lg">
          Keller Shine
        </h1>
        <p className="text-xl md:text-3xl lg:text-4xl font-light tracking-wide mb-10 text-zinc-300 max-w-3xl mx-auto">
          Transforming vehicles into pristine works of art, reflecting unparalleled craftsmanship and meticulous care.
        </p>
        <button className="bg-white text-zinc-900 px-10 py-5 rounded-full text-lg md:text-xl font-semibold tracking-wide hover:bg-zinc-200 transition duration-300 shadow-xl uppercase cursor-pointer">
          Explore Our Services
        </button>
      </div>
    </section>
  );
};

export default Hero;
