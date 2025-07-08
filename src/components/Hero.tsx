
import React from 'react';
import { PERSONAL_DATA } from '../constants';
import { ArrowRightIcon } from './icons/ArrowRightIcon';

const Hero: React.FC = () => {
    const handleCTAClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    return (
        <section id="home" className="h-screen flex items-center justify-center text-center bg-grid-white/[0.05] relative">
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
            <div className="z-10 px-4">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase text-gray-100 tracking-tighter">
                    {PERSONAL_DATA.name}
                </h1>
                <p className="mt-4 text-xl md:text-2xl lg:text-3xl font-light text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                    {PERSONAL_DATA.title}
                </p>
                <a 
                    href="#projects" 
                    onClick={(e) => handleCTAClick(e, '#projects')}
                    className="mt-8 inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg shadow-lg hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105">
                    View My Work <ArrowRightIcon className="w-5 h-5 ml-2" />
                </a>
            </div>
        </section>
    );
};

export default Hero;