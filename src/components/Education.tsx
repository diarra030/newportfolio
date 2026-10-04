import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Calendar, MapPin, BookOpen } from 'lucide-react';

const education = [
    {
        degree: 'Licence Professionnelle - Génie Logiciel',
        school: 'Groupe EDEHC',
        location: 'Bouaké, Côte d\'Ivoire',
        year: '2021 - 2022',
        description: 'Formation axée sur Génie logiciel · Développement d\'applications · Bases de données · Programmation · Conception de systèmes d\'information · Développement web',
        icon: GraduationCap,
        color: 'from-primary to-indigo-400',
    },
    {
        degree: 'BTS - Informatique Développeur d\'Application',
        school: 'Groupe EDEHC',
        location: 'Bouaké, Côte d\'Ivoire',
        year: '2019 - 2021',
        description: 'Formation en développement d\'applications, programmation, bases de données et conception de systèmes informatiques.',
        icon: BookOpen,
        color: 'from-accent to-cyan-400',
    },
];

const languages = [
    { name: 'Français', level: 'Langue de travail, courant', percentage: 95 },
    { name: 'Anglais', level: 'Intermédiaire (lecture technique, compréhension basique)', percentage: 55 },
];

export default function Education() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section id="formation" className="relative py-24 lg:py-32">
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
                        Formation
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-4">
                        Formation & <span className="gradient-text">Langues</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Mon parcours académique et mes compétences linguistiques.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Education */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-display font-semibold text-white flex items-center gap-2 mb-6">
                            <GraduationCap size={22} className="text-primary" />
                            Parcours académique
                        </h3>

                        {education.map((item, index) => (
                            <motion.div
                                key={item.degree}
                                initial={{ opacity: 0, x: -30 }}
                                animate={isInView ? { opacity: 1, x: 0 } : {}}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                className="group relative"
                            >
                                <div className="relative bg-dark-light/60 backdrop-blur-sm border border-white/5 rounded-2xl p-6 hover:border-primary/30 transition-all duration-500">
                                    <div className="flex items-start gap-4">
                                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                                            <item.icon size={22} className="text-white" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h4 className="text-lg font-display font-semibold text-white mb-1">
                                                {item.degree}
                                            </h4>
                                            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-slate-400 mb-3">
                                                <span className="flex items-center gap-1">
                                                    <MapPin size={14} className="text-accent" />
                                                    {item.school}, {item.location}
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <Calendar size={14} className="text-primary" />
                                                    {item.year}
                                                </span>
                                            </div>
                                            <p className="text-sm text-slate-400">{item.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Languages */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-display font-semibold text-white flex items-center gap-2 mb-6">
                            <BookOpen size={22} className="text-accent" />
                            Langues
                        </h3>

                        <div className="space-y-6">
                            {languages.map((lang, index) => (
                                <motion.div
                                    key={lang.name}
                                    initial={{ opacity: 0, x: 30 }}
                                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
                                    className="bg-dark-light/60 backdrop-blur-sm border border-white/5 rounded-2xl p-6 hover:border-accent/30 transition-all duration-500"
                                >
                                    <div className="flex items-center justify-between mb-3">
                                        <h4 className="text-lg font-display font-semibold text-white">
                                            {lang.name}
                                        </h4>
                                        <span className="text-sm text-accent font-medium">{lang.percentage}%</span>
                                    </div>
                                    <p className="text-sm text-slate-400 mb-4">{lang.level}</p>
                                    {/* Progress bar */}
                                    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={isInView ? { width: `${lang.percentage}%` } : {}}
                                            transition={{ duration: 1, delay: 0.5 + index * 0.2, ease: 'easeOut' }}
                                            className="h-full bg-gradient-to-r from-accent to-primary rounded-full"
                                        />
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Interests */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="bg-dark-light/60 backdrop-blur-sm border border-white/5 rounded-2xl p-6"
                        >
                            <h4 className="text-lg font-display font-semibold text-white mb-4 flex items-center gap-2">
                                <span className="w-2 h-2 bg-primary rounded-full" />
                                Centres d'intérêt professionnels
                            </h4>
                            <div className="flex flex-wrap gap-2">
                                {[
                                    'Transformation numérique',
                                    'Intelligence artificielle',
                                    'Innovation technologique',
                                    'Produits numériques',
                                    'Digitalisation services publics',
                                    'GovTech',
                                    'Inclusion numérique',
                                    'Entrepreneuriat technologique',
                                    'Solutions adaptées contextes africains',
                                ].map((interest) => (
                                    <span
                                        key={interest}
                                        className="px-3 py-1.5 text-xs font-medium text-slate-300 bg-white/5 border border-white/10 rounded-full hover:border-primary/50 hover:text-primary transition-colors cursor-default"
                                    >
                                        {interest}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}