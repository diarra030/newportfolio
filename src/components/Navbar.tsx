import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
    { name: 'Accueil', href: '#accueil' },
    { name: 'À propos', href: '#apropos' },
    { name: 'Compétences', href: '#competences' },
    { name: 'Expérience', href: '#experience' },
    { name: 'Projets', href: '#projets' },
    { name: 'Formation', href: '#formation' },
    { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                ? 'bg-dark/90 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-primary/5'
                : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 lg:h-20">
                    {/* Logo */}
                    <a href="#accueil" className="flex items-center gap-2">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                            <span className="text-white font-bold font-display text-lg">AD</span>
                        </div>
                        <span className="hidden sm:block font-display font-semibold text-white">
                            Aboubacar <span className="gradient-text">Diarra</span>
                        </span>
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white rounded-lg hover:bg-white/5 transition-all duration-200"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <a
                        href="#contact"
                        className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-primary to-accent text-white text-sm font-medium rounded-full hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:scale-105"
                    >
                        Me contacter
                    </a>

                    {/* Mobile menu button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            <motion.div
                initial={false}
                animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="lg:hidden overflow-hidden bg-dark-light/95 backdrop-blur-xl border-b border-white/5"
            >
                <div className="px-4 py-4 space-y-1">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="block px-4 py-3 text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        onClick={() => setIsOpen(false)}
                        className="block mt-4 px-4 py-3 text-center bg-gradient-to-r from-primary to-accent text-white font-medium rounded-full"
                    >
                        Me contacter
                    </a>
                </div>
            </motion.div>
        </motion.nav>
    );
}