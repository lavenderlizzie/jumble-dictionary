import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Heart, Users, Target, Sparkles } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import GrandmaMascot from '@/components/GrandmaMascot.jsx';
function AboutPage() {
  return <>
      <Helmet>
        <title>Jumble.best - About Us</title>
        <meta name="description" content="Learn about Jumble.best, our mission to make word puzzles accessible and enjoyable for everyone, and the story behind our friendly tools." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-accent/15 via-background to-primary/10 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-96 h-96 bg-accent/10 rounded-full mix-blend-multiply filter blur-3xl -translate-y-1/2 -translate-x-1/2" />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
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
                About <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Jumble.best</span>
              </h1>
              <p className="body-text text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto font-medium">
                The fastest way to unscramble words for Wordle, Scrabble & Jumble, you word lover!
              </p>
            </motion.div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{
            opacity: 0,
            y: 40
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true,
            margin: "-100px"
          }} transition={{
            duration: 0.6
          }} className="bg-card rounded-3xl shadow-xl p-10 md:p-16 border-2 border-border relative overflow-hidden">
              <div className="absolute top-0 right-0 w-full h-2 bg-gradient-to-r from-primary via-accent to-secondary" />
              <h2 className="hero-heading text-4xl md:text-5xl font-black text-card-foreground mb-8">
                Our story
              </h2>
              <div className="space-y-6 body-text text-lg font-medium text-card-foreground/90">
                <p>
                  Jumble.best was born from our creator, Kalamity Kate, who believes word puzzles should be fun and offer a bit of whimsy. Too many puzzle tools are soulless and designed without a spark of joy.
                </p>
                <p>
                  She wanted to create something different with her unique voice. A place where anyone could enjoy the timeless pleasure of solving word puzzles, but with a modern twist made especially for boomers and puzzle lovers the world over.
                </p>
                <p>
                  Our tools are designed with bold clarity in mind. Large, readable text. High-contrast colors. No hidden menus or complicated features. Just pure,  word-solving fun. And we value your feedback. Contact us at the end of FAQs.
                </p>
                <p>
                  Whether you're playing Scrabble with friends, Wordle, Jumble, or simply keeping your mind sharp, we're here to add a moment of amusement to your day. Think of us as your most enthusiastic companion in the world of wonderful words.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24 bg-muted/40 border-y border-border/50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
                What we believe
              </h2>
              <p className="body-text text-xl text-muted-foreground max-w-2xl mx-auto font-medium">
                The core principles that guide everything we do
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[{
              icon: Heart,
              title: 'Warmth and energy',
              description: 'We treat every user with enthusiastic care. Our tools are designed with passion and genuine affection for the craft.',
              color: 'text-primary',
              bgColor: 'bg-primary/15',
              borderColor: 'border-primary/20'
            }, {
              icon: Users,
              title: 'Accessibility for all',
              description: 'Word puzzles should be enjoyable for everyone. We use bold colors and clear text to make that possible.',
              color: 'text-secondary',
              bgColor: 'bg-secondary/15',
              borderColor: 'border-secondary/20'
            }, {
              icon: Target,
              title: 'Striking simplicity',
              description: 'We believe the best tools are beautifully simple. No clutter, just vivid and helpful features that pop.',
              color: 'text-accent',
              bgColor: 'bg-accent/15',
              borderColor: 'border-accent/20'
            }].map((value, index) => {
              const Icon = value.icon;
              return <motion.div key={value.title} initial={{
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
              }} className={`bg-card rounded-3xl p-8 border-2 ${value.borderColor} shadow-lg hover:shadow-xl transition-shadow duration-300`}>
                    <div className={`w-16 h-16 ${value.bgColor} rounded-2xl flex items-center justify-center mb-6 shadow-inner`}>
                      <Icon className={`w-8 h-8 ${value.color}`} />
                    </div>
                    <h3 className="font-black text-2xl text-card-foreground mb-4">{value.title}</h3>
                    <p className="body-text text-base font-medium text-muted-foreground">{value.description}</p>
                  </motion.div>;
            })}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{
            opacity: 0,
            y: 40
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} className="bg-gradient-to-br from-primary/15 via-accent/10 to-secondary/15 rounded-3xl p-10 md:p-16 border-2 border-primary/20 shadow-xl">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-primary rounded-2xl shadow-md">
                  <Sparkles className="w-8 h-8 text-primary-foreground" />
                </div>
                <h2 className="hero-heading text-4xl md:text-5xl font-black text-foreground">
                  Our mission
                </h2>
              </div>
              <p className="body-text text-xl font-medium text-foreground mb-6 leading-relaxed">
                To create the most energetic, colorful, and helpful word puzzle tools on the internet. We want every visitor to feel inspired, excited, and empowered to solve puzzles with confidence.
              </p>
              <p className="body-text text-xl font-medium text-foreground leading-relaxed">
                We're not just building software. We're building a lively community of word lovers who appreciate bright design, bold clarity, and the simple joy of finding the right word at the right time.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Grandma Section */}
        <section className="py-24 bg-muted/40 border-t border-border/50">
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
              <GrandmaMascot message="I'm so thrilled with all these bright colors! Every tool, every feature, every word is chosen to bring a smile to your face. Welcome to the vibrant family!" position="right" />
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>;
}
export default AboutPage;