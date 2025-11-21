import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import { skills } from '../data';
import { motion } from 'framer-motion';

const Skills: React.FC = () => {
    return (
        <SectionWrapper id="skills" className="bg-dark dark:bg-dark-secondary">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-light dark:text-light mb-4">
                    My <span className="text-primary">Skills</span>
                </h2>
                <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                    The technologies and tools I use to bring ideas to life.
                </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
                {skills.map((skill, index) => (
                    <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ y: -5 }}
                        className="flex flex-col items-center justify-center p-6 bg-dark dark:bg-dark rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-800 dark:border-gray-800 group"
                    >
                        <div
                            className="text-4xl mb-4 transition-colors duration-300 group-hover:scale-110"
                            style={{ color: skill.color }}
                        >
                            <skill.icon />
                        </div>
                        <h3 className="font-medium text-gray-700 dark:text-gray-200 group-hover:text-primary transition-colors">
                            {skill.name}
                        </h3>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    );
};

export default Skills;
