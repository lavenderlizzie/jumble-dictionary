import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Shuffle, Lightbulb, ChevronDown, ChevronUp, Info, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import GrandmaMascot from '@/components/GrandmaMascot.jsx';
import UnscrambleInput from '@/components/UnscrambleInput.jsx';
import AnagramSolver from '@/components/AnagramSolver.jsx';
import RandomQuestion from '@/components/RandomQuestion.jsx';
import HelpSection from '@/components/HelpSection.jsx';
import { Button } from '@/components/ui/button';

function HomePage() {
  const [showNewbies, setShowNewbies] = useState(false);
  
  return (
    <>
      <Helmet>
        <title>Jumble.best - Unscramble Words Like a Pro</title>
        <meta name="description" content="Solve word puzzles, unscramble letters, find anagrams, and get crossword help with our vibrant tools. Unscramble like a pro, solve it with color!" />
      </Helmet>

      <div className="min-h-screen bg-background flex flex-col">
        
        {/* Absolute Top: Unscrambler Input Section */}
        <div className="bg-gradient-to-b from-primary/10 via-background to-background border-b border-border/50 pt-16 pb-12 relative z-10 mt-10">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            
            {/* Kalamity Kate Mascot & Speech Bubble */}
            <div className="absolute -top-28 right-0 md:-right-20 flex flex-col items-end z-20 hidden sm:flex pointer-events-none">
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 10, rotate: 5 }}
                animate={{ opacity: 1, scale: 1, y: 0, rotate: -2 }}
                transition={{ type: "spring", bounce: 0.5, delay: 0.8 }}
                className="relative bg-accent text-accent-foreground px-5 py-3 rounded-3xl shadow-xl mb-3 max-w-[220px] text-center font-bold text-sm border-2 border-accent-foreground/10"
              >
                "Well, that's either a typo...or ancient Viking."
                <div className="absolute -bottom-3 right-10 w-0 h-0 border-l-[12px] border-l-transparent border-t-[14px] border-t-accent border-r-[12px] border-r-transparent drop-shadow-md" />
              </motion.div>
              
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", bounce: 0.4, delay: 0.5 }}
                className="mr-4"
              >
                <svg width="90" height="90" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-lg">
                  <circle cx="50" cy="45" r="35" fill="#f97316" />
                  <circle cx="50" cy="55" r="28" fill="#ffedd5" />
                  <path d="M 15 45 Q 50 10 85 45 Q 50 30 15 45" fill="#ea580c" />
                  <circle cx="40" cy="52" r="4" fill="#0f172a" />
                  <circle cx="60" cy="52" r="4" fill="#0f172a" />
                  <circle cx="35" cy="60" r="2" fill="#fca5a5" opacity="0.8" />
                  <circle cx="65" cy="60" r="2" fill="#fca5a5" opacity="0.8" />
                  <path d="M 45 68 Q 55 72 62 65" stroke="#0f172a" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                  <circle cx="40" cy="52" r="12" stroke="#ec4899" strokeWidth="3" fill="none" />
                  <circle cx="60" cy="52" r="12" stroke="#ec4899" strokeWidth="3" fill="none" />
                  <line x1="52" y1="52" x2="48" y2="52" stroke="#ec4899" strokeWidth="3" />
                  <path d="M 25 100 Q 50 75 75 100" fill="#ec4899" />
                </svg>
              </motion.div>
            </div>

            <UnscrambleInput />
            
            {/* Collapsible Newbies Section */}
            <div className="mt-6">
              <button onClick={() => setShowNewbies(!showNewbies)} className="w-full flex items-center justify-center gap-3 py-4 px-6 bg-card/80 hover:bg-card border-2 border-border hover:border-primary/30 rounded-2xl transition-all duration-300 active:scale-[0.98] shadow-sm hover:shadow-md">
                <Info className="w-5 h-5 text-accent" />
                <span className="font-bold text-card-foreground text-lg tracking-tight">Newbies - Here's what you need to know</span>
                {showNewbies ? <ChevronUp className="w-6 h-6 text-muted-foreground ml-auto" /> : <ChevronDown className="w-6 h-6 text-muted-foreground ml-auto" />}
              </button>
              
              <AnimatePresence>
                {showNewbies && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }} 
                    animate={{ height: 'auto', opacity: 1 }} 
                    exit={{ height: 0, opacity: 0 }} 
                    transition={{ duration: 0.3, ease: "easeInOut" }} 
                    className="overflow-hidden"
                  >
                    <div className="mt-4 p-8 bg-card border-2 border-primary/20 rounded-2xl shadow-lg shadow-primary/5">
                      <ul className="space-y-6 body-text text-card-foreground">
                        <li className="flex items-start gap-4">
                          <span className="flex-shrink-0 w-8 h-8 rounded-xl bg-primary text-primary-foreground flex items-center justify-center font-black text-lg mt-0.5 shadow-md shadow-primary/30">1</span>
                          <span className="text-lg"><strong>Enter scrambled letters</strong> and we'll find all possible words that can be made from them.</span>
                        </li>
                        <li className="flex items-start gap-4">
                          <span className="flex-shrink-0 w-8 h-8 rounded-xl bg-secondary text-secondary-foreground flex items-center justify-center font-black text-lg mt-0.5 shadow-md shadow-secondary/30">2</span>
                          <span className="text-lg"><strong>Filter by letter count:</strong> Results are automatically grouped by length so you can find exactly what you need.</span>
                        </li>
                        <li className="flex items-start gap-4">
                          <span className="flex-shrink-0 w-8 h-8 rounded-xl bg-accent text-accent-foreground flex items-center justify-center font-black text-lg mt-0.5 shadow-md shadow-accent/30">3</span>
                          <span className="text-lg"><strong>Select your dictionary:</strong> Choose between Standard English, Oxford, or Slang depending on your puzzle.</span>
                        </li>
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        <Header />

        {/* Hero Section */}
        <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-br from-primary/15 via-accent/10 to-secondary/15">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full mix-blend-multiply filter blur-[100px] opacity-70 -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/20 rounded-full mix-blend-multiply filter blur-[100px] opacity-70 translate-y-1/3 -translate-x-1/3" />
          
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h1 className="hero-heading text-5xl md:text-7xl lg:text-8xl font-black text-foreground mb-4 leading-tight">
                Jumble for <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary">Boomers & Word Nerds!</span>
              </h1>
              <h3 className="text-2xl md:text-3xl font-semibold text-muted-foreground mb-10 leading-snug">
                Unscramble like a Pro for Scrabble & Wordle
              </h3>
              <p className="body-text text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto font-medium">
                Your companion for word puzzles and anagrams.
              </p>
              <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
                <Button size="lg" className="h-16 px-10 text-xl font-bold rounded-2xl shadow-xl shadow-primary/25 transition-all duration-300 hover:shadow-primary/40 hover:-translate-y-1 active:scale-[0.98] active:translate-y-0 w-full sm:w-auto" asChild>
                  <Link to="/how-it-works">
                    Get Started <ArrowRight className="ml-2 w-6 h-6" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="h-16 px-10 text-xl font-bold rounded-2xl border-2 hover:bg-muted/50 transition-all duration-300 active:scale-[0.98] w-full sm:w-auto" asChild>
                  <Link to="/about">Learn More</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── FREE DOWNLOAD TEASER BANNER ── */}
        <section className="py-10 bg-gradient-to-r from-primary via-primary to-secondary relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIi8+PC9zdmc+')] opacity-40" />
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left"
            >
              <div className="text-primary-foreground">
                <p className="text-base font-bold opacity-80 uppercase tracking-widest mb-1">🧩 Free Download</p>
                <h3 className="hero-heading text-2xl md:text-3xl font-black leading-tight">
                  Top 50 Jumble Words That Fool Everyone
                </h3>
                <p className="body-text opacity-80 mt-2 text-lg">
                  Kalamity Kate's cheat sheet — hints, fun facts & KK's seal of approval!
                </p>
              </div>
              <Link
                to="/faq#download"
                className="flex-shrink-0 inline-flex items-center gap-3 h-14 px-8 text-lg font-bold rounded-2xl bg-white text-primary shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 active:scale-[0.98] whitespace-nowrap"
              >
                <Download className="w-5 h-5" />
                Get It Free
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Anagram Solver Section */}
        <section className="py-24 bg-muted/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true, margin: "-100px" }} 
              transition={{ duration: 0.6 }} 
              className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
            >
              <div className="order-2 lg:order-1">
                <AnagramSolver />
              </div>
              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-secondary/20 mb-6 shadow-inner">
                  <Shuffle className="w-8 h-8 text-secondary" />
                </div>
                <h2 className="hero-heading text-4xl md:text-5xl font-black text-foreground mb-6">
                  Anagram Solver
                </h2>
                <p className="body-text text-xl text-muted-foreground mb-8 font-medium">
                  Discover all the words you can make from a set of letters. Great for Scrabble, Wordle, Words with Friends, and other word games where you need to maximize your options.
                </p>
                <div className="bg-card rounded-2xl p-8 border-2 border-border shadow-lg">
                  <p className="body-text text-base text-card-foreground mb-4 font-bold">
                    <span className="text-secondary">Example:</span> Enter "listen" and find:
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {['silent', 'enlist', 'listen', 'inlets', 'tinsel'].map(word => (
                      <span key={word} className="px-4 py-2 bg-secondary text-secondary-foreground rounded-xl text-base font-bold shadow-md shadow-secondary/20">
                        {word}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Random Question Feature Section */}
        <section className="py-24 bg-gradient-to-br from-accent/10 via-background to-primary/10 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.6 }} 
              className="text-center mb-16"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-accent/20 mb-6 shadow-inner rotate-3">
                <Lightbulb className="w-10 h-10 text-accent -rotate-3" />
              </div>
              <h2 className="hero-heading text-4xl md:text-5xl font-black text-foreground mb-6">
                Take a Break
              </h2>
              <p className="body-text text-xl text-muted-foreground max-w-2xl mx-auto font-medium">
                Need a mental break from puzzles? Generate a random question to ponder. Choose between silly fun or thoughtful reflection.
              </p>
            </motion.div>
            <div className="max-w-4xl mx-auto">
              <RandomQuestion />
            </div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.5, delay: 0.3 }} 
              className="mt-16 flex justify-center"
            >
              <GrandmaMascot message="These questions are a wonderful way to spark conversation with family and friends. Give it a try!" position="right" />
            </motion.div>
          </div>
        </section>

        {/* About Our Players Section */}
        <section id="about-our-players" className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="hero-heading text-4xl md:text-5xl font-black text-foreground mb-6">
                About Our Players
              </h2>
              <p className="body-text text-xl text-muted-foreground max-w-2xl mx-auto font-medium">
                Our community is made up of word puzzle enthusiasts, Scrabble champions, and everyday players who love a good challenge. Join thousands of others who use Jumble.best daily!
              </p>
            </motion.div>
          </div>
        </section>

        <HelpSection />

        {/* CTA Section */}
        <section className="py-24 bg-primary text-primary-foreground mt-auto relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIi8+PC9zdmc+')] opacity-50" />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }} 
              whileInView={{ opacity: 1, scale: 1 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.5 }}
            >
              <h2 className="hero-heading text-4xl md:text-6xl font-black mb-8 leading-tight">
                Ready to become a word puzzle master?
              </h2>
              <p className="body-text text-2xl mb-10 opacity-90 font-medium max-w-2xl mx-auto">
                All our tools are free and easy to use. No sign-up required. Start solving puzzles today!
              </p>
              <Button size="lg" variant="secondary" className="h-16 px-10 text-xl font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 active:scale-[0.98] active:translate-y-0 text-secondary-foreground" asChild>
                <Link to="/how-it-works">
                  Learn How It Works <ArrowRight className="ml-2 w-6 h-6" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default HomePage;