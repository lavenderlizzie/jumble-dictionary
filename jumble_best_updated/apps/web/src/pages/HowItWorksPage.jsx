import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Sparkles, Shuffle, Lightbulb, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import GrandmaMascot from '@/components/GrandmaMascot.jsx';
import { Button } from '@/components/ui/button';
function HowItWorksPage() {
  const tools = [{
    icon: Sparkles,
    title: 'Jumble Word Unscrambler',
    color: 'text-primary',
    bgColor: 'bg-primary/15',
    badgeColor: 'bg-primary',
    badgeText: 'text-primary-foreground',
    steps: ['Enter your scrambled letters in the input box', 'Select your preferred dictionary (Standard, Oxford, or Slang)', 'View results instantly, organized by word length', 'Click any word to see its definition'],
    example: 'Example: Enter "tac" to find "cat" and "act"'
  }, {
    icon: Shuffle,
    title: 'Anagram Solver',
    color: 'text-secondary',
    bgColor: 'bg-secondary/15',
    badgeColor: 'bg-secondary',
    badgeText: 'text-secondary-foreground',
    steps: ['Type in any set of letters', 'Choose your dictionary preference', 'See all possible words you can make from those letters', 'Results are sorted by length for easy scanning'],
    example: 'Example: "listen" reveals "silent", "enlist", "inlets", and more'
  }, {
    icon: Lightbulb,
    title: 'Random Question',
    color: 'text-accent',
    bgColor: 'bg-accent/15',
    badgeColor: 'bg-accent',
    badgeText: 'text-accent-foreground',
    steps: ['Choose between "Silly" or "Serious" mode', 'Click the generate button', 'Read the random question', 'See a sample answer for inspiration'],
    example: 'Perfect for conversation starters or mental breaks'
  }];
  return <>
      <Helmet>
        <title>Jumble.best - How It Works</title>
        <meta name="description" content="Learn how to use our word puzzle tools. Simple step-by-step guides for the Jumble Word Unscrambler, Anagram Solver, and Random Question features." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-secondary/10 via-background to-primary/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full mix-blend-multiply filter blur-3xl -translate-y-1/2 translate-x-1/2" />
          
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            ease: "easeOut"
          }}>
              <h1 className="hero-heading text-5xl md:text-7xl font-black text-foreground mb-6">
                How it works
              </h1>
              <p className="body-text text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto font-medium">
                Simple, step-by-step guides to help you master each vibrant tool. From beginner to expert in minutes.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Tools Guide */}
        <section className="py-24">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-20">
              {tools.map((tool, index) => {
              const Icon = tool.icon;
              return <motion.div key={tool.title} initial={{
                opacity: 0,
                y: 40
              }} whileInView={{
                opacity: 1,
                y: 0
              }} viewport={{
                once: true,
                margin: "-100px"
              }} transition={{
                duration: 0.6,
                delay: index * 0.1
              }} className="bg-card rounded-3xl shadow-xl p-8 md:p-12 border-2 border-border relative overflow-hidden">
                    <div className={`absolute top-0 right-0 w-64 h-64 ${tool.bgColor} rounded-full filter blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2 pointer-events-none`} />
                    
                    <div className="relative z-10">
                      <div className="flex items-center gap-5 mb-8">
                        <div className={`w-20 h-20 ${tool.bgColor} rounded-2xl flex items-center justify-center shadow-inner`}>
                          <Icon className={`w-10 h-10 ${tool.color}`} />
                        </div>
                        <h2 className="hero-heading text-3xl md:text-4xl font-black text-card-foreground">
                          {tool.title}
                        </h2>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="space-y-6">
                          {tool.steps.map((step, stepIndex) => <div key={stepIndex} className="flex items-start gap-5">
                              <div className={`flex-shrink-0 w-10 h-10 ${tool.badgeColor} ${tool.badgeText} rounded-xl flex items-center justify-center font-black text-lg shadow-md`}>
                                {stepIndex + 1}
                              </div>
                              <p className="body-text text-lg text-card-foreground pt-1 font-medium">{step}</p>
                            </div>)}
                        </div>

                        <div className="flex flex-col justify-center">
                          <div className={`rounded-2xl p-8 border-2 border-border bg-gradient-to-br from-card to-muted/30`}>
                            <p className={`text-sm font-black uppercase tracking-widest mb-3 ${tool.color}`}>
                              Quick Tip
                            </p>
                            <p className="body-text text-xl font-bold text-foreground">{tool.example}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>;
            })}
            </div>
          </div>
        </section>

        {/* Tips Section */}
        <section className="py-24 bg-muted/50 border-y border-border/50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} className="text-center mb-16">
              <h2 className="hero-heading text-4xl md:text-5xl font-black text-foreground mb-6">
                Pro tips for success
              </h2>
              <p className="body-text text-xl text-muted-foreground font-medium">
                Get the most out of your colorful word puzzle experience
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[{
              title: 'Start simple',
              description: 'Begin with shorter words and work your way up to longer, more complex puzzles.',
              color: 'text-primary',
              borderColor: 'border-primary/20',
              hoverBg: 'hover:bg-primary/5'
            }, {
              title: 'Try different dictionaries',
              description: 'Switch between Standard, Oxford, and Slang to discover new words and expand your vocabulary.',
              color: 'text-secondary',
              borderColor: 'border-secondary/20',
              hoverBg: 'hover:bg-secondary/5'
            }, {
              title: 'Take breaks',
              description: 'Use the Random Question feature to rest your mind between challenging puzzles.',
              color: 'text-accent',
              borderColor: 'border-accent/20',
              hoverBg: 'hover:bg-accent/5'
            }].map((tip, index) => <motion.div key={tip.title} initial={{
              opacity: 0,
              y: 30
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.6,
              delay: index * 0.1
            }} className={`bg-card rounded-2xl p-8 border-2 ${tip.borderColor} shadow-lg transition-colors duration-300 ${tip.hoverBg}`}>
                  <h3 className={`font-black text-2xl mb-4 ${tip.color}`}>{tip.title}</h3>
                  <p className="body-text text-base font-medium text-card-foreground">{tip.description}</p>
                </motion.div>)}
            </div>
          </div>
        </section>

        {/* Grandma Section */}
        <section className="py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} className="flex justify-center">
              <GrandmaMascot message="Remember, dear, practice makes perfect! Don't be discouraged if you don't find the word right away. Keep trying, and you'll get better every day." position="right" />
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIi8+PC9zdmc+')] opacity-50" />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.div initial={{
            opacity: 0,
            scale: 0.95
          }} whileInView={{
            opacity: 1,
            scale: 1
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }}>
              <h2 className="hero-heading text-4xl md:text-6xl font-black mb-8 leading-tight">
                Ready to start Jumble solving?
              </h2>
              <p className="body-text text-2xl mb-10 opacity-90 font-medium">
                Head back to the home page and try out the tools yourself!
              </p>
              <Button size="lg" variant="secondary" className="h-16 px-10 text-xl font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 active:scale-[0.98] active:translate-y-0 text-secondary-foreground" asChild>
                <Link to="/">
                  Start Solving <ArrowRight className="ml-2 w-6 h-6" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>;
}
export default HowItWorksPage;