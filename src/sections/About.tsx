import React from 'react';
import SectionWrapper from '../components/SectionWrapper';

const About: React.FC = () => {
    return (
        <SectionWrapper id="about" className="bg-dark dark:bg-dark">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Image Column */}
                <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                    <div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-100 dark:bg-dark-secondary">
                        <img
                            src="/profile.png"
                            alt="About Hamza"
                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                </div>

                {/* Content Column */}
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-light dark:text-light mb-6">
                        About <span className="text-primary">Me</span>
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-lg">
                        I am a passionate Front-End Developer from Morocco, specializing in building functional and aesthetic web applications using <strong className="text-primary">React</strong>, <strong className="text-primary">Next.js</strong>, and <strong className="text-primary">Tailwind CSS</strong>.
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-lg">
                        With a strong foundation in modern web technologies, I have experience integrating services like <span className="font-semibold text-secondary">EmailJS</span>, <span className="font-semibold text-secondary">Sanity CMS</span>, and <span className="font-semibold text-secondary">Leaflet maps</span>. I enjoy creating intuitive dashboards for management systems and solving real-world problems through code.
                    </p>

                    <div className="grid grid-cols-2 gap-4 mt-8">
                        <div className="p-4 bg-dark dark:bg-dark-secondary rounded-lg border border-gray-800 dark:border-gray-800">
                            <h3 className="font-bold text-2xl text-primary mb-1">3+</h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Years Experience</p>
                        </div>
                        <div className="p-4 bg-dark dark:bg-dark-secondary rounded-lg border border-gray-800 dark:border-gray-800">
                            <h3 className="font-bold text-2xl text-primary mb-1">10+</h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Projects Completed</p>
                        </div>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default About;
