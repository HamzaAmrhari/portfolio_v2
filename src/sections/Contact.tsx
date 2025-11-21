import React, { useState, useRef } from 'react';
import SectionWrapper from '../components/SectionWrapper';
import emailjs from '@emailjs/browser';
import { FaPaperPlane, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        if (!formRef.current) return;

        emailjs.sendForm(
            'service_vr1pr6p',
            'template_h4b2h9u',
            formRef.current,
            'Ma2HvnjXsSrzY4IG3'
        ).then(() => {
            setLoading(false);
            setStatus('success');
            formRef.current?.reset();
            setTimeout(() => setStatus('idle'), 5000);
        }, (error) => {
            setLoading(false);
            setStatus('error');
            console.error(error);
            setTimeout(() => setStatus('idle'), 5000);
        });
    };

    return (
        <SectionWrapper id="contact" className="bg-dark dark:bg-dark">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-light dark:text-light mb-4">
                    Get In <span className="text-primary">Touch</span>
                </h2>
                <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                    Have a project in mind or just want to say hi? I'd love to hear from you.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
                {/* Contact Info */}
                <div className="space-y-8">
                    <h3 className="text-2xl font-bold text-light dark:text-light mb-6">
                        Let's talk about everything!
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-8">
                        Don't like forms? Send me an email. 👋
                    </p>

                    <div className="flex items-start gap-4">
                        <div className="p-4 bg-primary/10 rounded-full text-primary">
                            <FaEnvelope size={24} />
                        </div>
                        <div>
                            <h4 className="text-lg font-bold text-light dark:text-light">Email</h4>
                            <a href="mailto:amrharihamza@gmail.com" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
                                amrharihamza@gmail.com
                            </a>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <div className="p-4 bg-primary/10 rounded-full text-primary">
                            <FaMapMarkerAlt size={24} />
                        </div>
                        <div>
                            <h4 className="text-lg font-bold text-light dark:text-light">Location</h4>
                            <p className="text-gray-600 dark:text-gray-400">
                                Morocco
                            </p>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="bg-dark dark:bg-dark-secondary p-8 rounded-2xl shadow-sm border border-gray-800 dark:border-gray-800"
                >
                    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Your Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                required
                                className="w-full px-4 py-3 rounded-lg bg-dark dark:bg-dark border border-gray-800 dark:border-gray-700 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-light dark:text-light"
                                placeholder="John Doe"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Your Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                required
                                className="w-full px-4 py-3 rounded-lg bg-dark dark:bg-dark border border-gray-800 dark:border-gray-700 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-light dark:text-light"
                                placeholder="john@example.com"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Message
                            </label>
                            <textarea
                                name="message"
                                id="message"
                                rows={4}
                                required
                                className="w-full px-4 py-3 rounded-lg bg-dark dark:bg-dark border border-gray-800 dark:border-gray-700 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-light dark:text-light resize-none"
                                placeholder="Tell me about your project..."
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full py-4 bg-primary text-light rounded-lg font-bold hover:bg-sky-600 transition-all transform hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                        >
                            {loading ? (
                                <span className="animate-pulse">Sending...</span>
                            ) : (
                                <>
                                    Send Message <FaPaperPlane />
                                </>
                            )}
                        </button>

                        {status === 'success' && (
                            <p className="text-green-500 text-center text-sm font-medium mt-4">
                                Message sent successfully! I'll get back to you soon.
                            </p>
                        )}
                        {status === 'error' && (
                            <p className="text-red-500 text-center text-sm font-medium mt-4">
                                Something went wrong. Please try again later.
                            </p>
                        )}
                    </form>
                </motion.div>
            </div>
        </SectionWrapper>
    );
};

export default Contact;
