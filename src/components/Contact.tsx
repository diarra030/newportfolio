import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';

export default function Contact() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const mailtoLink = `mailto:diarraaboubacar030@gmail.com?subject=${encodeURIComponent(formState.subject)}&body=${encodeURIComponent(`De: ${formState.name} (${formState.email})\n\n${formState.message}`)}`;
        window.open(mailtoLink);
    };

    return (
        <section id="contact" className="relative py-24 lg:py-32 bg-dark-light/30">
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    ref={ref}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                        Contact
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-4">
                        Travaillons <span className="gradient-text">ensemble</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Vous avez un projet de transformation numérique ou souhaitez collaborer ? N'hésitez pas à me contacter.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
                    {/* Contact info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="lg:col-span-2 space-y-6"
                    >
                        {/* Contact cards */}
                        <div className="space-y-4">
                            <a
                                href="mailto:diarraaboubacar030@gmail.com"
                                className="flex items-center gap-4 p-4 bg-dark-light/60 backdrop-blur-sm border border-white/5 rounded-2xl hover:border-primary/30 transition-all duration-300 group"
                            >
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary-light flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <Mail size={20} className="text-white" />
                                </div>
                                <div>
                                    <p className="text-sm text-slate-400">Email</p>
                                    <p className="text-white font-medium">diarraaboubacar030@gmail.com</p>
                                </div>
                            </a>

                            <a
                                href="tel:+2250546363335"
                                className="flex items-center gap-4 p-4 bg-dark-light/60 backdrop-blur-sm border border-white/5 rounded-2xl hover:border-accent/30 transition-all duration-300 group"
                            >
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-cyan-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <Phone size={20} className="text-white" />
                                </div>
                                <div>
                                    <p className="text-sm text-slate-400">Téléphone</p>
                                    <p className="text-white font-medium">05 46 36 33 35</p>
                                    <p className="text-white font-medium text-sm">01 01 91 05 15</p>
                                </div>
                            </a>

                            <div className="flex items-center gap-4 p-4 bg-dark-light/60 backdrop-blur-sm border border-white/5 rounded-2xl">
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-purple-400 flex items-center justify-center">
                                    <MapPin size={20} className="text-white" />
                                </div>
                                <div>
                                    <p className="text-sm text-slate-400">Localisation</p>
                                    <p className="text-white font-medium">Abidjan, Côte d'Ivoire</p>
                                </div>
                            </div>
                        </div>

                        {/* Availability */}
                        <div className="p-6 bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 rounded-2xl">
                            <div className="flex items-center gap-2 mb-2">
                                <span className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse" />
                                <span className="text-sm font-medium text-green-400">Disponible</span>
                            </div>
                            <p className="text-sm text-slate-300">
                                Je suis actuellement disponible pour de nouveaux projets de développement web, mobile et de transformation numérique.
                            </p>
                        </div>
                    </motion.div>

                    {/* Contact form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="lg:col-span-3"
                    >
                        <form onSubmit={handleSubmit} className="bg-dark-light/60 backdrop-blur-sm border border-white/5 rounded-2xl p-6 lg:p-8 space-y-5">
                            <div className="flex items-center gap-2 mb-2">
                                <MessageSquare size={20} className="text-primary" />
                                <h3 className="text-lg font-display font-semibold text-white">Envoyez-moi un message</h3>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-1.5">
                                        Nom complet
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formState.name}
                                        onChange={handleChange}
                                        placeholder="Votre nom"
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1.5">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formState.email}
                                        onChange={handleChange}
                                        placeholder="votre@email.com"
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-1.5">
                                    Sujet
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formState.subject}
                                    onChange={handleChange}
                                    placeholder="Sujet de votre message"
                                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-1.5">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formState.message}
                                    onChange={handleChange}
                                    placeholder="Décrivez votre projet ou votre demande..."
                                    rows={5}
                                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all resize-none"
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:scale-[1.02]"
                            >
                                <Send size={18} />
                                Envoyer le message
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}