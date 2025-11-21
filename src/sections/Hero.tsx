import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaEnvelope } from 'react-icons/fa';

const Hero: React.FC = () => {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center bg-dark pt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">

                {/* Text Content */}
                <motion.div
                    className="md:w-1/2 text-center md:text-left mb-10 md:mb-0"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-primary font-semibold text-lg mb-2 uppercase tracking-wider">
                        Front-End Developer
                    </h2>
                    <h1 className="text-5xl md:text-7xl font-bold text-light dark:text-light mb-6 leading-tight">
                        Hi, I'm <span className="text-primary">Hamza</span>
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-lg mx-auto md:mx-0">
                        Crafting modern React & Next.js experiences. I build accessible, pixel-perfect, and performant web applications.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <a
                            href="#contact"
                            className="px-8 py-3 bg-primary text-light rounded-full font-medium hover:bg-sky-600 transition-transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg shadow-primary/30"
                        >
                            <FaEnvelope /> Contact Me
                        </a>
                        <a
                            href="/resume.pdf"
                            download
                            className="px-8 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 rounded-full font-medium hover:border-primary hover:text-primary dark:hover:border-primary dark:hover:text-primary transition-all flex items-center justify-center gap-2"
                        >
                            <FaDownload /> Download CV
                        </a>
                    </div>
                </motion.div>

                {/* Image/Visual */}
                <motion.div
                    className="md:w-1/2 flex justify-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="relative w-72 h-72 md:w-96 md:h-96">
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-full blur-2xl opacity-20 animate-pulse"></div>
                        <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-dark-secondary shadow-2xl">
                            {/* Placeholder for profile image */}
                            <img
                                src="/profile.png"
                                alt="Hamza"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Floating Tech Icons */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                            className="absolute -top-4 -right-4 bg-dark dark:bg-dark-secondary p-3 rounded-xl shadow-lg border border-gray-800 dark:border-gray-800"
                        >
                            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React" className="w-8 h-8" />
                        </motion.div>
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
                            className="absolute bottom-8 -left-8 bg-dark dark:bg-dark-secondary p-3 rounded-xl shadow-lg border border-gray-800 dark:border-gray-800"
                        >
                            <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" alt="Tailwind" className="w-8 h-8" />
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
