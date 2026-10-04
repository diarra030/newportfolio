import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Database, Globe, Server, Smartphone, Workflow } from 'lucide-react';

const skillCategories = [
    {
        icon: Code2,
        title: 'Développement logiciel',
        color: 'from-primary to-primary-light',
        skills: ['PHP / Laravel', 'JavaScript', 'HTML5 / CSS3', 'Tailwind CSS', 'Livewire', 'APIs REST', 'Flutter / Dart'],
    },
    {
        icon: Workflow,
        title: 'Architecture & Conception',
        color: 'from-accent to-cyan-300',
        skills: ['Modélisation BDD', 'Architecture MVC', 'Intégration APIs', 'Automatisation', 'Déploiement', 'Conception d\'applications'],
    },
    {
        icon: Globe,
        title: 'Transformation numérique',
        color: 'from-violet-500 to-purple-400',
        skills: ['Dématérialisation', 'GED', 'Digitalisation', 'Produits numériques', 'Analyse des besoins', 'Documentation technique'],
    },
    {
        icon: Server,
        title: 'Outils & Infrastructure',
        color: 'from-emerald-500 to-green-400',
        skills: ['MySQL', 'Git / GitHub', 'Docker', 'Apache', 'Debian / Linux'],
    },
    {
        icon: Smartphone,
        title: 'Mobile',
        color: 'from-orange-500 to-amber-400',
        skills: ['Flutter', 'Dart', 'Applications mobiles', 'UI/UX Mobile', 'APIs Mobile'],
    },
    {
        icon: Database,
        title: 'Bases de données',
        color: 'from-rose-500 to-pink-400',
        skills: ['MySQL', 'Modélisation', 'Optimisation', 'Migration', 'Sauvegarde'],
    },
];

export default function Skills() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section id="competences" className="relative py-24 lg:py-32 bg-dark-light/30">
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
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
                        Compétences
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-4">
                        Mes <span className="gradient-text">compétences</span> clés
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Un ensemble de compétences techniques et fonctionnelles acquises à travers mes formations et mon expérience professionnelle.
                    </p>
                </motion.div>

                {/* Skills grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group relative"
                        >
                            <div className="relative h-full bg-dark-light/60 backdrop-blur-sm border border-white/5 rounded-2xl p-6 hover:border-primary/30 transition-all duration-500 hover:shadow-lg hover:shadow-primary/5">
                                {/* Icon */}
                                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                    <category.icon size={22} className="text-white" />
                                </div>

                                {/* Title */}
                                <h3 className="text-lg font-display font-semibold text-white mb-4">
                                    {category.title}
                                </h3>

                                {/* Skills tags */}
                                <div className="flex flex-wrap gap-2">
                                    {category.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="px-2.5 py-1 text-xs font-medium text-slate-300 bg-white/5 border border-white/10 rounded-lg hover:border-primary/30 hover:text-primary transition-colors duration-200"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}