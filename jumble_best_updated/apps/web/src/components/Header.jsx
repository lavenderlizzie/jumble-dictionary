import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import LogoMascot from '@/components/LogoMascot.jsx';

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/dictionary', label: 'Dictionary' },
    { path: '/about-our-players', label: 'About Our Players' },
    { path: '/how-it-works', label: 'How It Works' },
    { path: '/about', label: 'About' },
    { path: '/', label: 'Quick Help', hash: '#help' },
    { path: '/faq', label: 'FAQ' },
    { path: '/faq', label: 'Feedback', hash: '#feedback' },
    { path: '/', label: 'Random Questions', hash: '#random-questions' },
  ];

  const isActive = (path, hash) => location.pathname === path && !hash;

  return (
    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-11 h-11 bg-gradient-to-br from-primary via-accent to-secondary rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(var(--primary),0.4)] shrink-0">
                <span className="text-2xl font-black text-primary-foreground brand-text">J</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="brand-text text-xl md:text-2xl font-black text-foreground hidden sm:block">
                  Jumble.best
                </span>
                <span className="inline-block text-xs font-bold bg-primary text-primary-foreground px-2 py-0.5 rounded-full uppercase tracking-wide">
                  Beta
                </span>
              </div>
            </Link>
            <div className="flex items-end self-end pb-0 ml-4">
              <img
                src="https://horizons-cdn.hostinger.com/9d0685b6-6057-4d84-99e1-dcfefe1c18f1/947c65278b32eda2302b918e33c4a7aa.png"
                alt="Kalamity Kate"
                className="h-[88px] md:h-[110px] w-auto object-contain origin-bottom"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link
                key={`${link.path}-${link.label}`}
                to={link.hash ? `${link.path}${link.hash}` : link.path}
                className={`px-4 py-2 rounded-xl body-text text-sm font-bold transition-all duration-200 ${
                  isActive(link.path, link.hash)
                    ? 'bg-primary text-primary-foreground shadow-md shadow-primary/20 scale-105'
                    : 'text-foreground hover:bg-muted/80 hover:text-primary hover:scale-105'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl hover:bg-muted/80 text-foreground transition-all duration-200 active:scale-95"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-border bg-background/95 backdrop-blur-md"
          >
            <nav className="px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={`${link.path}-${link.label}`}
                  to={link.hash ? `${link.path}${link.hash}` : link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-3 rounded-xl body-text text-base font-bold transition-all duration-200 ${
                    isActive(link.path, link.hash)
                      ? 'bg-primary text-primary-foreground shadow-md shadow-primary/20'
                      : 'text-foreground hover:bg-muted/80 hover:text-primary'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;
