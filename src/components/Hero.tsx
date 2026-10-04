import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, ArrowDown, } from 'lucide-react';

export default function Hero() {
    return (
        <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden grid-pattern">
            {/* Background elements */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
            </div>

            {/* Floating particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-primary/30 rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, -30, 0],
                            opacity: [0.2, 0.8, 0.2],
                        }}
                        transition={{
                            duration: 3 + Math.random() * 2,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                        }}
                    />
                ))}
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="text-center">
                    {/* Status badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8"
                    >
                        <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                        <span className="text-sm text-slate-300">Disponible pour de nouveaux projets</span>
                    </motion.div>

                    {/* Name */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-4xl sm:text-5xl md:text-7xl font-display font-bold text-white mb-4"
                    >
                        ABOUBACAR{' '}
                        <span className="gradient-text">DIARRA</span>
                    </motion.h1>

                    {/* Title */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="mb-6"
                    >
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-display font-medium text-slate-300">
                            Développeur{' '}
                            <span className="text-primary">Web</span> &{' '}
                            <span className="text-accent">Mobile</span>
                        </h2>
                    </motion.div>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="text-lg text-slate-400 max-w-2xl mx-auto mb-8"
                    >
                        Transformation numérique &bull; Innovation &bull; Solutions digitales sur mesure
                    </motion.p>

                    {/* Location & Contact */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        className="flex flex-wrap items-center justify-center gap-4 mb-10 text-sm text-slate-400"
                    >
                        <span className="flex items-center gap-1.5">
                            <MapPin size={16} className="text-primary" />
                            Abidjan, Côte d'Ivoire
                        </span>
                        <span className="flex items-center gap-1.5">
                            <Mail size={16} className="text-primary" />
                            diarraaboubacar030@gmail.com
                        </span>
                        <span className="flex items-center gap-1.5">
                            <Phone size={16} className="text-primary" />
                            05 46 36 33 35
                        </span>
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1 }}
                        className="flex flex-wrap items-center justify-center gap-4"
                    >
                        <a
                            href="#projets"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-full hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 hover:scale-105"
                        >
                            Voir mes projets
                            <ArrowDown size={18} />
                        </a>
                        <a
                            href="#contact"
                            className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white font-semibold rounded-full hover:bg-white/5 hover:border-primary/50 transition-all duration-300"
                        >
                            Me contacter
                        </a>
                    </motion.div>

                    {/* Social links */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 1.2 }}
                        className="flex items-center justify-center gap-4 mt-12"
                    >
                        {/* <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-slate-400 hover:text-primary hover:border-primary/50 transition-all duration-300">
                            <Github size={18} />
                        </a>
                        <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-slate-400 hover:text-primary hover:border-primary/50 transition-all duration-300">
                            <Linkedin size={18} />
                        </a> */}
                        <a href="mailto:diarraaboubacar030@gmail.com" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-slate-400 hover:text-primary hover:border-primary/50 transition-all duration-300">
                            <Mail size={18} />
                        </a>
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="w-6 h-10 border-2 border-white/20 rounded-full flex items-start justify-center p-1.5"
                >
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                </motion.div>
            </motion.div>
        </section>
    );
}