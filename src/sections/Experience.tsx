import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import { experiences } from '../data';
import { FaBriefcase, FaCalendarAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Experience: React.FC = () => {
    return (
        <SectionWrapper id="experience" className="bg-dark dark:bg-dark-secondary">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-light dark:text-light mb-4">
                    Professional <span className="text-primary">Experience</span>
                </h2>
                <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                    My journey in the tech industry, from internships to freelance work.
                </p>
            </div>

            <div className="relative max-w-3xl mx-auto">
                {/* Vertical Line */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 h-full w-1 bg-gray-200 dark:bg-gray-800"></div>

                {experiences.map((exp, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        className={`relative flex flex-col md:flex-row items-center justify-between mb-12 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                            }`}
                    >
                        {/* Timeline Dot */}
                        <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-8 h-8 bg-primary rounded-full border-4 border-white dark:border-dark z-10 flex items-center justify-center shadow-lg">
                            <div className="w-2 h-2 bg-dark rounded-full"></div>
                        </div>

                        {/* Content Spacer */}
                        <div className="w-full md:w-5/12"></div>

                        {/* Content Card */}
                        <div className="w-full md:w-5/12 pl-12 md:pl-0">
                            <div className="bg-dark dark:bg-dark p-6 rounded-xl shadow-sm border border-gray-800 dark:border-gray-800 hover:shadow-md transition-shadow relative">
                                {/* Arrow for Desktop */}
                                <div
                                    className={`hidden md:block absolute top-1/2 transform -translate-y-1/2 w-4 h-4 bg-dark dark:bg-dark border-t border-l border-gray-800 dark:border-gray-800 rotate-45 ${index % 2 === 0 ? '-right-2 border-r-0 border-b-0' : '-left-2 border-t-0 border-l-0'
                                        }`}
                                ></div>

                                <h3 className="text-xl font-bold text-light dark:text-light mb-1">
                                    {exp.title}
                                </h3>
                                <div className="flex items-center gap-2 text-primary font-medium mb-3">
                                    <FaBriefcase className="text-sm" />
                                    <span>{exp.company}</span>
                                </div>
                                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                                    {exp.description}
                                </p>
                                <div className="flex items-center gap-2 text-xs text-gray-400 uppercase tracking-wider font-semibold">
                                    <FaCalendarAlt />
                                    <span>{exp.period}</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    );
};

export default Experience;
