import React from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-gradient-to-br from-muted/50 to-background border-t border-border mt-20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full mix-blend-multiply filter blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 rounded-full mix-blend-multiply filter blur-3xl translate-y-1/2 -translate-x-1/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-primary via-accent to-secondary rounded-2xl flex items-center justify-center shadow-lg shadow-primary/20">
                <span className="text-2xl font-black text-primary-foreground brand-text">J</span>
              </div>
              <span className="brand-text text-2xl font-black text-foreground tracking-tight">
                Jumble.best
              </span>
            </div>
            <p className="body-text text-base text-muted-foreground leading-relaxed max-w-sm">
              Unscramble words, solve anagrams, and have fun with our boomer-friendly word tools. Made to bring joy to your puzzles.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <span className="font-bold text-sm uppercase tracking-widest mb-6 block text-foreground">
              Quick Links
            </span>
            <nav className="space-y-3">
              <Link to="/" className="block body-text text-base font-medium text-muted-foreground hover:text-primary transition-colors duration-200 w-fit">
                Home
              </Link>
              <Link to="/how-it-works" className="block body-text text-base font-medium text-muted-foreground hover:text-secondary transition-colors duration-200 w-fit">
                How It Works
              </Link>
              <Link to="/about" className="block body-text text-base font-medium text-muted-foreground hover:text-accent transition-colors duration-200 w-fit">
                About
              </Link>
              <Link to="/dictionary" className="block body-text text-base font-medium text-muted-foreground hover:text-secondary transition-colors duration-200 w-fit">
                Dictionary
              </Link>
              <Link to="/terms" className="block body-text text-base font-medium text-muted-foreground hover:text-primary transition-colors duration-200 w-fit">
                Terms
              </Link>
              <Link to="/faq" className="block body-text text-base font-medium text-muted-foreground hover:text-primary transition-colors duration-200 w-fit">
                FAQ
              </Link>
              <Link to="/faq#download" className="block body-text text-base font-medium text-muted-foreground hover:text-primary transition-colors duration-200 w-fit">
                🧩 Free Downloads
              </Link>
            </nav>
          </div>

          {/* Legal */}
          <div>
            <span className="font-bold text-sm uppercase tracking-widest mb-6 block text-foreground">
              Legal
            </span>
            <nav className="space-y-3">
              <Link to="/privacy" className="block body-text text-base font-medium text-muted-foreground hover:text-primary transition-colors duration-200 w-fit">
                Privacy Policy
              </Link>
              <Link to="/terms" className="block body-text text-base font-medium text-muted-foreground hover:text-secondary transition-colors duration-200 w-fit">
                Terms of Service
              </Link>
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border/60">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="body-text text-base font-medium text-muted-foreground flex items-center gap-2">
              Made with <Heart className="w-5 h-5 text-primary fill-primary animate-pulse" /> for word puzzle enthusiasts
            </p>
            <p className="body-text text-sm font-medium text-muted-foreground/80">
              © {new Date().getFullYear()} Jumble.best. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
