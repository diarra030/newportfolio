import { Heart, ArrowUp } from 'lucide-react';

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="relative border-t border-white/5 bg-dark">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* Brand */}
                    <div className="sm:col-span-2 lg:col-span-1">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                                <span className="text-white font-bold font-display text-lg">AD</span>
                            </div>
                            <div>
                                <p className="font-display font-semibold text-white">Aboubacar Diarra</p>
                                <p className="text-xs text-slate-400">Développeur Web & Mobile</p>
                            </div>
                        </div>
                        <p className="text-sm text-slate-400 max-w-xs">
                            Passionné par la transformation numérique et l'innovation technologique en Afrique.
                        </p>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Navigation</h4>
                        <ul className="space-y-2">
                            {[
                                { name: 'Accueil', href: '#accueil' },
                                { name: 'À propos', href: '#apropos' },
                                { name: 'Compétences', href: '#competences' },
                                { name: 'Projets', href: '#projets' },
                            ].map((link) => (
                                <li key={link.name}>
                                    <a href={link.href} className="text-sm text-slate-400 hover:text-primary transition-colors">
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Services</h4>
                        <ul className="space-y-2">
                            {[
                                'Développement Web',
                                'Applications Mobiles',
                                'Transformation numérique',
                                'Dématérialisation',
                            ].map((service) => (
                                <li key={service}>
                                    <span className="text-sm text-slate-400">{service}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Contact</h4>
                        <ul className="space-y-2">
                            <li className="text-sm text-slate-400">diarraaboubacar030@gmail.com</li>
                            <li className="text-sm text-slate-400">05 46 36 33 35</li>
                            <li className="text-sm text-slate-400">Abidjan, Côte d'Ivoire</li>
                        </ul>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-slate-500 flex items-center gap-1">
                        © {new Date().getFullYear()} Aboubacar Diarra. Fait avec
                        <Heart size={14} className="text-red-400 fill-red-400" />
                        en Côte d'Ivoire
                    </p>

                    <button
                        onClick={scrollToTop}
                        className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-slate-400 hover:text-primary hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
                    >
                        <ArrowUp size={18} />
                    </button>
                </div>
            </div>
        </footer>
    );
}