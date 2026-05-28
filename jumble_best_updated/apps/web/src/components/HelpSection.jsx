import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Settings, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from '@/components/ui/collapsible';
function HelpItem({
  title,
  icon: Icon,
  children,
  defaultOpen = false,
  colorClass = "primary"
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  // Map color names to actual semantic tailwind classes for the icon background
  const colorMap = {
    primary: "bg-primary text-primary-foreground shadow-primary/30",
    secondary: "bg-secondary text-secondary-foreground shadow-secondary/30"
  };
  const borderMap = {
    primary: "border-primary/20 hover:border-primary/40",
    secondary: "border-secondary/20 hover:border-secondary/40"
  };
  return <Collapsible open={isOpen} onOpenChange={setIsOpen} className={`bg-card rounded-2xl border-2 ${borderMap[colorClass]} shadow-lg overflow-hidden transition-all duration-300`}>
      <CollapsibleTrigger className="w-full flex items-center justify-between p-5 sm:p-6 bg-card hover:bg-muted/50 transition-colors active:bg-muted group">
        <div className="flex items-center gap-4 text-left">
          <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center shadow-md ${colorMap[colorClass]}`}>
            <Icon className="w-6 h-6" />
          </div>
          <h3 className="hero-heading text-xl sm:text-2xl font-bold text-card-foreground">
            {title}
          </h3>
        </div>
        <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center bg-muted group-hover:bg-background transition-colors`}>
          <motion.div animate={{
          rotate: isOpen ? 180 : 0
        }} transition={{
          duration: 0.3,
          ease: "easeInOut"
        }}>
            <ChevronDown className="w-6 h-6 text-foreground" />
          </motion.div>
        </div>
      </CollapsibleTrigger>
      
      <AnimatePresence initial={false}>
        {isOpen && <CollapsibleContent forceMount asChild>
            <motion.div initial={{
          height: 0,
          opacity: 0
        }} animate={{
          height: 'auto',
          opacity: 1
        }} exit={{
          height: 0,
          opacity: 0
        }} transition={{
          duration: 0.3,
          ease: "easeInOut"
        }}>
              <div className="p-5 sm:p-6 pt-0 sm:pt-0 text-muted-foreground body-text text-lg border-t border-border/50 bg-muted/10">
                <div className="mt-4">
                  {children}
                </div>
              </div>
            </motion.div>
          </CollapsibleContent>}
      </AnimatePresence>
    </Collapsible>;
}
function HelpSection() {
  return <section className="py-24 bg-gradient-to-b from-background to-muted/30">
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
      }} className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-primary/10 mb-6 shadow-inner -rotate-3">
            <HelpCircle className="w-10 h-10 text-primary rotate-3" />
          </div>
          <h2 className="hero-heading text-4xl md:text-5xl font-black text-foreground mb-6">
            Quick Help Guide
          </h2>
          <p className="body-text text-xl text-muted-foreground font-medium">
            Got questions? We've got answers. Learn how to maximize your puzzle-solving skills. If you encounter any problems with our site, please use our feedback form under the FAQ tab at the bottom of the page.
          </p>
        </motion.div>

        <div className="space-y-6">
          <HelpItem title="How to use advanced options?" icon={Settings} colorClass="primary" defaultOpen={true}>
            <p className="mb-4 text-foreground font-medium">
              Take full control of your search results using our advanced filtering system:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span><strong>Dictionary Selection:</strong> Choose between Standard English, Oxford, or Slang dictionaries to match the exact rules of the game you're playing.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span><strong>Length Filters:</strong> Use the letter count buttons above the results to instantly filter out words that don't fit your puzzle's space requirements.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span><strong>Starts/Ends With:</strong> (Coming soon) Pin specific letters to the beginning or end of your scrambled words to fit intersecting crossword tiles.</span>
              </li>
            </ul>
          </HelpItem>

          <HelpItem title="How does this work?" icon={Sparkles} colorClass="secondary">
            <p className="mb-4 text-foreground font-medium">
              Jumble.best uses a lightning-fast matching engine to solve your puzzles in milliseconds:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0" />
                <span><strong>Enter Letters:</strong> Simply type your scrambled letters (up to 15 characters) into the main search box. Spaces and special characters are automatically ignored.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0" />
                <span><strong>Instant Unscrambling:</strong> When you hit search, our engine compares your letters against a comprehensive dictionary database containing over 300,000 valid words.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0" />
                <span><strong>Smart Grouping:</strong> The results are instantly sorted by word length and alphabetized, making it incredibly easy to scan for the highest scoring words or the exact length you need.</span>
              </li>
            </ul>
          </HelpItem>
        </div>
      </div>
    </section>;
}
export default HelpSection;