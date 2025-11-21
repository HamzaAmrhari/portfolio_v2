import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import { projects } from '../data';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Projects: React.FC = () => {
    return (
        <SectionWrapper id="projects" className="bg-dark dark:bg-dark">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-light dark:text-light mb-4">
                    Featured <span className="text-primary">Projects</span>
                </h2>
                <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                    A selection of my recent work, ranging from management dashboards to interactive maps.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="group relative bg-dark dark:bg-dark-secondary rounded-2xl overflow-hidden border border-gray-800 dark:border-gray-800 hover:shadow-xl transition-all duration-300"
                    >
                        {/* Project Image Placeholder */}
                        <div className="h-48 bg-gray-200 dark:bg-gray-800 overflow-hidden relative">
                            <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/0 transition-colors duration-300"></div>
                            <img
                                src={project.image || (index % 2 === 0 ? "/project-dashboard.png" : "/project-mobile.png")}
                                alt={project.title}
                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>

                        <div className="p-6">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary dark:bg-primary/20 dark:text-sky-300"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <h3 className="text-xl font-bold text-light dark:text-light mb-2 group-hover:text-primary transition-colors">
                                {project.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 mb-6 line-clamp-3">
                                {project.description}
                            </p>

                            <div className="flex gap-4">
                                <a
                                    href={project.demo}
                                    className="flex items-center gap-2 px-4 py-2 bg-primary text-light rounded-lg hover:bg-sky-600 transition-colors text-sm font-medium"
                                >
                                    <FaExternalLinkAlt /> Live Demo
                                </a>
                                <a
                                    href={project.github}
                                    className="flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:border-primary hover:text-primary dark:hover:border-primary dark:hover:text-primary transition-colors text-sm font-medium"
                                >
                                    <FaGithub /> Source Code
                                </a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    );
};

export default Projects;
