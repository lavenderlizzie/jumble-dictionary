import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Users, Coffee, Brain, Smartphone, GraduationCap, Globe, Heart, Puzzle, ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { Button } from '@/components/ui/button';
function AboutOurPlayersPage() {
  const fadeUp = {
    hidden: {
      opacity: 0,
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };
  return <>
      <Helmet>
        <title>About Our Players - Jumble & Unscrambler Community</title>
        <meta name="description" content="Discover the diverse and passionate community that enjoys our word games. From traditional jumble lovers to digital unscrambler users, learn what brings us together." />
      </Helmet>

      <div className="min-h-screen bg-background flex flex-col">
        <Header />

        {/* Hero Section */}
        <section className="relative pt-24 pb-20 md:pt-32 md:pb-32 overflow-hidden bg-muted/30">
          <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-primary/10 rounded-full mix-blend-multiply filter blur-[80px] -translate-y-1/2 translate-x-1/3" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-2xl">
                <h1 className="hero-heading text-5xl md:text-6xl lg:text-7xl font-black text-foreground mb-6 leading-tight">
                  Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Players</span>
                </h1>
                <p className="body-text text-xl md:text-2xl text-muted-foreground font-medium leading-relaxed mb-8">
                  Word games aren't just a solo activity—they form the foundation of a vibrant, diverse community that bridges generations and brings people together around a shared love of language.
                </p>
              </motion.div>
              <motion.div initial={{
              opacity: 0,
              scale: 0.95
            }} animate={{
              opacity: 1,
              scale: 1
            }} transition={{
              duration: 0.6,
              delay: 0.2
            }} className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-3xl transform rotate-3 scale-105" />
                <img src="https://horizons-cdn.hostinger.com/9d0685b6-6057-4d84-99e1-dcfefe1c18f1/scrabh1resized-duD6k.png" alt="People enjoying Scrabble and word games together" className="relative z-10 w-full h-[400px] object-contain rounded-3xl shadow-2xl" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Player Profile 1 - Traditional Jumble Lover */}
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <motion.div initial="hidden" whileInView="visible" viewport={{
              once: true,
              margin: "-100px"
            }} variants={fadeUp} className="order-2 md:order-1 relative">
                <div className="absolute -inset-4 bg-primary/10 rounded-3xl transform -rotate-2" />
                <img src="https://i.ibb.co/GQP2TWBQ/2-Women-Crossword.png" alt="Women enjoying a crossword puzzle together" className="relative z-10 w-full h-[500px] object-cover rounded-2xl shadow-lg" />
              </motion.div>

              <motion.div initial="hidden" whileInView="visible" viewport={{
              once: true,
              margin: "-100px"
            }} variants={fadeUp} className="order-1 md:order-2 space-y-8">
                <div>
                  <h2 className="hero-heading text-4xl md:text-5xl font-black text-foreground mb-4">
                    The Traditional Jumble Lover
                  </h2>
                  <div className="inline-block px-4 py-2 bg-primary/10 text-primary font-bold rounded-lg text-sm tracking-wide uppercase mb-6">
                    A cherished daily tradition that keeps the mind sharp
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="bg-card border border-border p-6 rounded-2xl shadow-sm">
                    <Users className="w-8 h-8 text-primary mb-4" />
                    <h3 className="font-bold text-card-foreground text-lg mb-2">Demographics</h3>
                    <p className="text-muted-foreground body-text text-sm">
                      Primarily ages 50–85+, with a strong representation of women who have played for decades.
                    </p>
                  </div>

                  <div className="bg-primary border border-primary-foreground/10 p-6 rounded-2xl shadow-md text-primary-foreground">
                    <Coffee className="w-8 h-8 text-primary-foreground mb-4" />
                    <h3 className="font-bold text-lg mb-2">Daily Ritual</h3>
                    <p className="text-primary-foreground/90 body-text text-sm">
                      Enjoyed religiously with morning coffee. Deeply values cognitive exercise and nostalgic, pun-based wordplay.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Player Profile 2 - Digital Unscrambler User */}
        <section className="py-24 bg-muted/40 border-y border-border/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <motion.div initial="hidden" whileInView="visible" viewport={{
              once: true,
              margin: "-100px"
            }} variants={fadeUp} className="space-y-8">
                <div>
                  <h2 className="hero-heading text-4xl md:text-5xl font-black text-foreground mb-4">
                    The Digital Unscrambler User
                  </h2>
                  <div className="inline-block px-4 py-2 bg-secondary/15 text-secondary-foreground font-bold rounded-lg text-sm tracking-wide uppercase mb-6">
                    Bringing word games into the modern era
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex gap-5 items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center mt-1">
                      <GraduationCap className="w-6 h-6 text-secondary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground text-xl mb-1">Modern Demographics</h3>
                      <p className="text-muted-foreground body-text">
                        Ages 25–54, heavily spanning Millennials and Gen X. Highly educated, with 65-68% holding college degrees.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5 items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center mt-1">
                      <Smartphone className="w-6 h-6 text-accent-foreground" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground text-xl mb-1">Fast-Paced Intent</h3>
                      <p className="text-muted-foreground body-text">
                        Competitive mobile gamers seeking quick mental challenges during commutes, alongside educators building vocabulary worksheets.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div initial="hidden" whileInView="visible" viewport={{
              once: true,
              margin: "-100px"
            }} variants={fadeUp} className="relative">
                <div className="absolute -inset-4 bg-secondary/10 rounded-3xl transform rotate-2" />
                <img src="https://i.ibb.co/SXWMLx3Q/Wom-Wordle800x500px.png" alt="Women playing Wordle on their devices" className="relative z-10 w-full h-[500px] object-cover rounded-2xl shadow-lg" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Overlapping Traits - Bento Grid */}
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial="hidden" whileInView="visible" viewport={{
            once: true
          }} variants={fadeUp} className="text-center mb-16">
              <h2 className="hero-heading text-4xl md:text-5xl font-black text-foreground mb-6">
                What Unites Our Community
              </h2>
              <p className="body-text text-xl text-muted-foreground max-w-2xl mx-auto font-medium">
                Despite different habits, our players share a deep connection through the joy of solving linguistic puzzles.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(200px,auto)]">
              <motion.div initial={{
              opacity: 0,
              scale: 0.95
            }} whileInView={{
              opacity: 1,
              scale: 1
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.5
            }} className="md:col-span-1 md:row-span-2 relative rounded-3xl overflow-hidden shadow-lg group">
                <img src="https://i.ibb.co/j9b2ytMx/Nurses-Wordle.png" alt="Nurses enjoying a Wordle word game together" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-8">
                  <h3 className="text-white font-bold text-2xl leading-tight">Shared love of wordplay across generations.</h3>
                </div>
              </motion.div>

              <motion.div initial="hidden" whileInView="visible" viewport={{
              once: true
            }} variants={fadeUp} className="bg-card border-2 border-border rounded-3xl p-8 shadow-sm flex flex-col justify-center">
                <Globe className="w-10 h-10 text-accent mb-5" />
                <h3 className="font-bold text-card-foreground text-2xl mb-3">Global Yet Local</h3>
                <p className="text-muted-foreground body-text">
                  North America leads with 38-42% of users in the U.S., complemented by strong, growing communities in the UK, Canada, and Australia.
                </p>
              </motion.div>

              <motion.div initial="hidden" whileInView="visible" viewport={{
              once: true
            }} variants={fadeUp} className="bg-primary/5 border-2 border-primary/20 rounded-3xl p-8 shadow-sm flex flex-col justify-center">
                <Brain className="w-10 h-10 text-primary mb-5" />
                <h3 className="font-bold text-foreground text-2xl mb-3">Mental Stimulation</h3>
                <p className="text-muted-foreground body-text">
                  A perfect balance of keeping the mind engaged while offering genuine stress relief from the daily grind.
                </p>
              </motion.div>

              <motion.div initial="hidden" whileInView="visible" viewport={{
              once: true
            }} variants={fadeUp} className="bg-secondary/5 border-2 border-secondary/20 rounded-3xl p-8 shadow-sm md:col-span-2 flex flex-col justify-center">
                <Puzzle className="w-10 h-10 text-secondary-foreground mb-5" />
                <h3 className="font-bold text-foreground text-2xl mb-3">Easy to Learn, Hard to Master</h3>
                <p className="text-muted-foreground body-text max-w-3xl">
                  Whether you write with a pencil or tap on a screen, the rules are accessible to everyone, yet the intellectual challenge never stops growing as your vocabulary expands.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-br from-primary via-accent to-secondary relative overflow-hidden mt-auto">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIi8+PC9zdmc+')] opacity-30" />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
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
          }}>
              <Heart className="w-16 h-16 text-primary-foreground mx-auto mb-8 drop-shadow-md" />
              <h2 className="hero-heading text-4xl md:text-6xl font-black text-primary-foreground mb-6 leading-tight">
                Join our community of word lovers
              </h2>
              <p className="body-text text-xl md:text-2xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto font-medium">
                Challenge your mind today. Pick a puzzle and see how quickly you can unscramble your way to victory!
              </p>
              <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
                <Button size="lg" variant="secondary" className="h-16 px-10 text-xl font-bold rounded-2xl shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 text-secondary-foreground w-full sm:w-auto" asChild>
                  <Link to="/">
                    Try Unscrambler <Play className="ml-2 w-6 h-6" />
                  </Link>
                </Button>
                <Button size="lg" className="h-16 px-10 text-xl font-bold rounded-2xl border-2 border-primary-foreground text-primary-foreground bg-transparent hover:bg-primary-foreground/10 transition-all duration-300 active:scale-95 w-full sm:w-auto" asChild>
                  <Link to="/how-it-works">
                    Learn More <ArrowRight className="ml-2 w-6 h-6" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>;
}
export default AboutOurPlayersPage;