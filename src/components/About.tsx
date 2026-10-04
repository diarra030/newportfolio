import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Lightbulb, Rocket } from 'lucide-react';

export default function About() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section id="apropos" className="relative py-24 lg:py-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div ref={ref} className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left side - Visual */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative w-full max-w-md mx-auto">
                            {/* Decorative background */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl" />

                            {/* Main card */}
                            <div className="relative bg-dark-light/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 space-y-6">
                                {/* Profile avatar placeholder */}
                                <div className="w-32 h-32 mx-auto rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                                    <span className="text-4xl font-display font-bold text-white">AD</span>
                                </div>

                                {/* Stats */}
                                <div className="grid grid-cols-3 gap-4 text-center">
                                    <div className="p-3 rounded-xl bg-white/5">
                                        <div className="text-2xl font-bold gradient-text">3+</div>
                                        <div className="text-xs text-slate-400 mt-1">Années d'exp.</div>
                                    </div>
                                    <div className="p-3 rounded-xl bg-white/5">
                                        <div className="text-2xl font-bold gradient-text">4+</div>
                                        <div className="text-xs text-slate-400 mt-1">Projets majeurs</div>
                                    </div>
                                    <div className="p-3 rounded-xl bg-white/5">
                                        <div className="text-2xl font-bold gradient-text">10+</div>
                                        <div className="text-xs text-slate-400 mt-1">Technologies</div>
                                    </div>
                                </div>

                                {/* Quick info */}
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3 text-sm">
                                        <Code size={16} className="text-primary" />
                                        <span className="text-slate-300">Développement Web & Mobile</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm">
                                        <Lightbulb size={16} className="text-accent" />
                                        <span className="text-slate-300">Transformation numérique</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm">
                                        <Rocket size={16} className="text-primary-light" />
                                        <span className="text-slate-300">Innovation & IA</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right side - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                            À propos de moi
                        </div>

                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-6">
                            Passionné par la{' '}
                            <span className="gradient-text">transformation numérique</span>
                        </h2>

                        <div className="space-y-4 text-slate-300 leading-relaxed">
                            <p>
                                Développeur logiciel spécialisé dans la conception et le développement de solutions numériques web et mobiles. Titulaire d'une <strong className="text-white">Licence Professionnelle en Génie Logiciel</strong> et d'un <strong className="text-white">BTS en Informatique Développeur d'Application</strong>, je possède une expérience pratique dans la conception, le développement, le déploiement et l'amélioration d'applications numériques.
                            </p>
                            <p>
                                Mon parcours m'a amené à travailler sur des solutions de <strong className="text-white">dématérialisation</strong>, <strong className="text-white">gestion documentaire</strong>, <strong className="text-white">automatisation de processus</strong>, gestion administrative et conception de produits numériques.
                            </p>
                            <p>
                                Je m'intéresse particulièrement à la transformation numérique, à l'innovation et à l'utilisation des technologies émergentes, notamment <strong className="text-white">l'intelligence artificielle</strong>, pour répondre à des problématiques concrètes de développement.
                            </p>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mt-8">
                            {['Transformation numérique', 'Innovation', 'IA', 'GovTech', 'Inclusion numérique'].map((tag) => (
                                <span
                                    key={tag}
                                    className="px-3 py-1.5 text-xs font-medium text-slate-300 bg-white/5 border border-white/10 rounded-full hover:border-primary/50 hover:text-primary transition-colors"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}