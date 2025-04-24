// Hero.jsx
import React from 'react';
import HeroBannerText from './HeroBannerText';
import video from '../../public/IntroVid.mp4';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gray-100 overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover -z-0"
        src={video}  // Ensure this path is correct
        autoPlay
        muted
        loop
        playsInline
      />

      {/* About Section */}
      <div className="relative ">
        <HeroBannerText />
      </div>
    </section>
  );
};

export default Hero;
h