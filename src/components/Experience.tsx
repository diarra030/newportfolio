import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

export default function Experience() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section id="experience" className="relative py-24 lg:py-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                        Parcours
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-4">
                        Expérience <span className="gradient-text">professionnelle</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Mon parcours professionnel dans le développement de solutions numériques innovantes.
                    </p>
                </motion.div>

                {/* Timeline */}
                <div className="relative max-w-4xl mx-auto">
                    {/* Timeline line */}
                    <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent" />

                    {/* Experience item */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative flex flex-col lg:flex-row gap-8 lg:gap-12"
                    >
                        {/* Left content (desktop) */}
                        <div className="hidden lg:block lg:w-1/2 lg:text-right lg:pr-12">
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-3">
                                <Calendar size={14} />
                                Sept. 2023 - Juil. 2026
                            </div>
                            <h3 className="text-2xl font-display font-bold text-white mb-2">
                                Développeur Web et Mobile
                            </h3>
                            <div className="flex items-center justify-end gap-2 text-slate-400 mb-4">
                                <Briefcase size={16} className="text-accent" />
                                <span>DCTC</span>
                                <span className="text-slate-600">•</span>
                                <MapPin size={14} />
                                <span className="text-sm">Cocody Angré, Côte d'Ivoire</span>
                            </div>
                            <p className="text-sm text-slate-500">
                                Digital Com. Techno. And Consulting
                            </p>
                        </div>

                        {/* Timeline dot */}
                        <div className="absolute left-8 lg:left-1/2 top-0 -translate-x-1/2">
                            <div className="w-4 h-4 rounded-full bg-primary border-4 border-dark animate-pulse-glow" />
                        </div>

                        {/* Right content - Missions */}
                        <div className="lg:w-1/2 lg:pl-12 pl-16">
                            {/* Mobile header */}
                            <div className="lg:hidden mb-4">
                                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-3">
                                    <Calendar size={14} />
                                    Sept. 2023 - Juil. 2026
                                </div>
                                <h3 className="text-xl font-display font-bold text-white mb-1">
                                    Développeur Web et Mobile
                                </h3>
                                <div className="flex items-center gap-2 text-slate-400 text-sm mb-1">
                                    <Briefcase size={14} className="text-accent" />
                                    <span>DCTC</span>
                                </div>
                                <div className="flex items-center gap-2 text-slate-500 text-sm">
                                    <MapPin size={14} />
                                    <span>Cocody Angré, Côte d'Ivoire</span>
                                </div>
                            </div>

                            <div className="bg-dark-light/60 backdrop-blur-sm border border-white/5 rounded-2xl p-6 space-y-4">
                                <h4 className="text-sm font-semibold text-primary uppercase tracking-wider">Missions principales</h4>
                                <ul className="space-y-3">
                                    {[
                                        'Implémentation d\'une solution d\'archivage (Elo)',
                                        'Développement d\'une application web d\'archivage (pour la DOB)',
                                        'Configuration, déploiement et maintenance de serveurs Linux',
                                    ].map((mission, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <span className="mt-1.5 w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                                            <span className="text-slate-300 text-sm">{mission}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="pt-4 border-t border-white/5">
                                    <h4 className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">Technologies utilisées</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {['Laravel', 'PHP', 'Linux', 'MySQL', 'Elo', 'Docker'].map((tech) => (
                                            <span key={tech} className="px-2.5 py-1 text-xs font-medium text-slate-300 bg-white/5 border border-white/10 rounded-lg">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
