import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, FolderOpen, Code, Layers, Smartphone, Building } from 'lucide-react';

const projects = [
    {
        title: 'DCTC-eDOC',
        subtitle: 'Plateforme de dématérialisation et d\'archivage électronique',
        description: 'Conception et développement d\'une plateforme permettant aux organisations de dématérialiser, centraliser, rechercher, archiver et partager leurs documents électroniques.',
        role: 'Développeur logiciel · Projet numérique',
        icon: FolderOpen,
        color: 'from-primary to-indigo-400',
        tags: ['Laravel', 'PHP', 'MySQL', 'GED', 'Dématérialisation'],
    },
    {
        title: 'CrédiFlow',
        subtitle: 'Solution numérique de gestion du crédit commercial',
        description: 'Conception d\'une solution numérique destinée aux PME, commerces et coopératives afin de remplacer les carnets de crédit papier par un système numérique de suivi des créances.',
        role: 'Concepteur / Développeur',
        icon: Layers,
        color: 'from-accent to-cyan-400',
        tags: ['Conception', 'Fintech', 'PME', 'Gestion de crédit'],
    },
    {
        title: 'Digitalisation d\'une mairie',
        subtitle: 'Application de gestion administrative municipale',
        description: 'Conception d\'une application Laravel destinée à la digitalisation de processus administratifs municipaux, notamment la gestion du personnel et des services d\'état civil.',
        role: 'Concepteur / Développeur',
        icon: Building,
        color: 'from-violet-500 to-purple-400',
        tags: ['Laravel', 'GovTech', 'Administration', 'État civil'],
    },
    {
        title: 'LASCO',
        subtitle: 'Application mobile d\'apprentissage et de formation',
        description: 'Conception et développement d\'une application mobile dédiée à l\'apprentissage, permettant aux utilisateurs d\'accéder à des contenus pédagogiques, de suivre leur progression et de développer leurs connaissances.',
        role: 'Concepteur / Développeur',
        icon: Smartphone,
        color: 'from-emerald-500 to-green-400',
        tags: ['Flutter', 'Dart', 'EdTech', 'Mobile', 'E-learning'],
    },
];

export default function Projects() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <section id="projets" className="relative py-24 lg:py-32 bg-dark-light/30">
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 right-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
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
                        Portfolio
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-4">
                        Mes <span className="gradient-text">projets</span> réalisés
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Découvrez les projets sur lesquels j'ai travaillé, de la conception au déploiement.
                    </p>
                </motion.div>

                {/* Projects grid */}
                <div className="grid md:grid-cols-2 gap-6">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            className="group relative"
                        >
                            <div className="relative h-full bg-dark/80 backdrop-blur-sm border border-white/5 rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-500">
                                {/* Top gradient bar */}
                                <div className={`h-1 bg-gradient-to-r ${project.color} transition-all duration-500 ${hoveredIndex === index ? 'h-1.5' : ''}`} />

                                <div className="p-6 lg:p-8">
                                    {/* Header */}
                                    <div className="flex items-start justify-between mb-4">
                                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                                            <project.icon size={22} className="text-white" />
                                        </div>
                                        <motion.div
                                            animate={hoveredIndex === index ? { rotate: -45 } : { rotate: 0 }}
                                            className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/5 text-slate-400 group-hover:text-primary group-hover:bg-primary/10 transition-colors"
                                        >
                                            <ExternalLink size={16} />
                                        </motion.div>
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-xl font-display font-bold text-white mb-1 group-hover:text-primary transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-sm text-accent font-medium mb-3">{project.subtitle}</p>
                                    <p className="text-sm text-slate-400 mb-4">{project.description}</p>

                                    {/* Role */}
                                    <div className="flex items-center gap-2 mb-4">
                                        <Code size={14} className="text-primary" />
                                        <span className="text-xs text-slate-500">{project.role}</span>
                                    </div>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-2.5 py-1 text-xs font-medium text-slate-300 bg-white/5 border border-white/10 rounded-lg"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}