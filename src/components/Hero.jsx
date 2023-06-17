import React from 'react';
import sectionWrapper from '../hoc/sectionWrapper';
import { styles } from '../styles';
import { icon7 } from '../assets';

function Hero() {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} flex flex-col gap-5 relative z-0 top-[180px] max-w-[1440px] mx-auto`}>
        <div className="flex-1 pt-36 padding-x">
          <h1 className="sm:text-6xl md:text-7xl xs:text-5xl font-semibold text-white mb-6 gradient-heading">
            Imagine with
            <br />
            Serendipity
            <br />
          </h1>
          <p className="sm:text-md md:text-lg text-white/60 mb-6">
            Discover a vibrant community of creators on Serendipity!
            <br />
            Connect with thousands of like-minded individuals on Discord or the web
            <br />
            and unleash your imagination through collaborative storytelling.
            <br />
            From vivid worlds to unforgettable characters,
            <br />
            bring your short text descriptions to life in new and exciting ways.
            <br />
            Join Serendipity today and embark on a journey of endless creativity!
            <br />
          </p>
          <div className="relative">
            <button className="px-4 py-2 rounded-xl bg-blue-500 text-white hover:bg-blue-600 mb-6 bg-gradient-radial from-heroButton via-heroButton to-gradient1 items-center flex-row glow-button">
              <img src={icon7} alt="logo" className="mr-2 w-4 h-4 object-contain" />
              Generate Images
            </button>
          </div>
        </div>
      </div>

    </section>
  );
}
export default Hero;
