import React from 'react'
import { FaArrowRight, FaGithub, FaLinkedin, FaFacebook, FaInstagram, FaArrowDown } from 'react-icons/fa';
import Navbar from './Navbar';

const Home = () => {
    return (
        <div className="bg-custom-bg bg-cover overflow-hidden relative">
            <img
                src="/white_sphere.png"
                alt="White Sphere"
                className="hidden md:block absolute z-10 white-sphere"
            />
            <img
                src="/yellow_glossy.png"
                alt="Yellow Glossy"
                className="hidden md:block absolute z-10 yellow-glossy"
            />
            <img
                src="/cube_orange.png"
                alt="Orange Cube"
                className="hidden md:block absolute z-10 orange-cube"
            />
            <img
                src="/purple_glossy.png"
                alt="Purple Glossy"
                className="hidden md:block absolute z-10 purple-glossy"
            />
            <div className="flex items-center justify-center w-full h-screen px-4 md:px-0">
                <div className="md:w-[85%] w-[95%] h-[92%] md:h-[75%] rounded-2xl bg-custom-opacity backdrop-blur-lg shadow-2xl flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-2 md:py-0">
                    <div className='flex flex-col'>
                        <div>
                            <Navbar />
                        </div>
                        <div className='flex flex-row items-center justify-between'>
                            <div className="flex flex-col justify-center items-center w-full md:w-[50%] text-center md:text-left mb-8 md:mb-0">
                                <h3 className="text-[16px] md:text-2xl font-semibold mb-2 text-white ">
                                    Hi, I'm <span className="text-purple-600">Sahal Sajeed</span>, <br />
                                    <span className="text-2xl md:text-6xl font-bold tracking-wide">
                                        Frontend Developer
                                    </span>
                                </h3>
                                <div className="flex md:hidden justify-center w-full mb-4">
                                    <img src="/hero.png" alt="Hero" className="w-[200px] md:w-[300px] lg:w-[370px]" />
                                </div>
                                <p className="text-sm mt-4 md:text-lg mb-6 text-white">
                                    I'm a passionate Frontend Developer with a keen interest in creating
                                    dynamic and user-friendly web applications. My expertise lies in
                                    transforming designs into responsive and interactive interfaces.
                                </p>
                                <a className="flex items-center self-start justify-center md:w-[140px] md:text-lg text-sm mx-auto md:mx-0 px-4 py-2 bg-purple-600 text-white rounded-lg w-[120px]"
                                href='/resume.pdf'
                                    download='Sahal_Sajeed_Resume.pdf'>
                                    <span className="mr-2">Resume</span>
                                    <FaArrowDown />
                                </a>
                            </div>
                            <div className="hidden md:flex justify-center w-full md:w-auto">
                                <img src="/hero.png" alt="Hero" className="w-[200px] md:w-[340px] lg:w-[410px]" />
                            </div>
                        </div>
                        <div className='flex flex-row gap-6'>
                            <a href="https://github.com/sahaalaf" target='_blank'><FaGithub size={24} className='hidden md:block text-white hover:text-purple-600 transition-all' /></a>
                            <a href="https://www.linkedin.com/in/sahal-sajeed-aa736721b/" target='_blank'><FaLinkedin size={24} className='text-white hover:text-purple-600 transition-all hidden md:block' /></a>
                            <a href="https://github.com/sahaalaf" target='_blank'><FaFacebook size={24} className='text-white hover:text-purple-600 transition-all hidden md:block' /></a>
                            <a href="https://github.com/sahaalaf" target='_blank'><FaInstagram size={24} className='text-white hover:text-purple-600 transition-all hidden md:block' /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home
