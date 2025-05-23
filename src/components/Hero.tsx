'use client';

import React from 'react';
import Image from 'next/image';

import AppStoreButton from './AppStoreButton';
import PlayStoreButton from './PlayStoreButton';

import { heroDetails } from '@/data/hero';
import { Bricolage_Grotesque } from 'next/font/google';

const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'], // Add all weights you need
  display: 'swap',
});

const Hero: React.FC = () => {
    return (
        <section
            id="hero"
            className={`${bricolageGrotesque.className} relative flex items-center justify-center pb-0 pt-32 md:pt-40 px-5`}
        >
            {/* Background GIF */}
            <div className="absolute left-0 top-0 bottom-0 -z-10 w-full h-full overflow-hidden">
                <Image
                    src="/images/lavender.gif" // Add your GIF file to the public/images directory
                    alt="Background animation"
                    fill
                    priority
                    className="object-cover opacity-30" // Adjust opacity as needed
                />
            </div>

            {/* Grid pattern overlay */}
            <div className="absolute left-0 top-0 bottom-0 -z-10 w-full">
                <div className="absolute inset-0 h-full w-full bg-hero-background bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]">
                </div>
            </div>

            <div className="absolute left-0 right-0 bottom-0 backdrop-blur-[2px] h-40 bg-gradient-to-b from-transparent via-[rgba(233,238,255,0.5)] to-[rgba(202,208,230,0.5)]">
            </div>

            <div className="text-center relative z-10"> {/* Added z-10 to ensure content is above background */}
                <h1 
                    className="text-4xl md:text-6xl md:leading-tight font-bold max-w-lg md:max-w-2xl mx-auto" 
                    style={{ color: '#9F78E5' }}
                >
                    {heroDetails.heading}
                </h1>
                <p className="mt-4 max-w-lg mx-auto">
                    {heroDetails.subheading}
                </p>

                <button 
                    className="mt-8 py-3 px-8 bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white font-large rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-50"
                    onClick={() => {
                        // Add your navigation logic or scroll functionality here
                        // Example: scroll to another section
                        document.getElementById('signup')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                >
                    Start your Journey
                </button>
                
                <Image
                    src={heroDetails.centerImageSrc}
                    width={384}
                    height={340}
                    quality={100}
                    sizes="(max-width: 768px) 100vw, 384px"
                    priority={true}
                    unoptimized={true}
                    alt="app mockup"
                    className='relative mt-12 md:mt-16 mx-auto z-10'
                />
            </div>
        </section>
    );
};

export default Hero;