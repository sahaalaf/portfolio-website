import React from 'react';
import Navbar from './Navbar';
import ProjectCard from './ProjectCard';

const Portfolio = () => {
    return (
        <div className="bg-custom-bg bg-cover w-full h-screen flex items-center justify-center relative">
            <img
                src="/yellow_glossy.png"
                alt="Yellow Glossy"
                className="hidden md:block absolute z-10 yellow-glossy"
            />

            <div className="h-[92%] w-[87%] md:h-[75%] md:w-[85%] rounded-2xl bg-custom-opacity backdrop-blur-lg shadow-2xl flex flex-col md:flex-col px-4 md:px-20 py-0 md:py-2">
                <div className='md:mt-5 mt-0'>
                    <Navbar />
                    <div className='w-full'>
                        <ProjectCard />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;
