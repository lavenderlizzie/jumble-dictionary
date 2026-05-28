import React, { useState } from 'react';
import { Lightbulb, RefreshCw, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
const questions = {
  silly: [{
    q: "If animals could talk, which would be the rudest?",
    a: "Probably cats, they already act superior"
  }, {
    q: "What's the weirdest thing you've ever eaten?",
    a: "Fried grasshoppers at a fair"
  }, {
    q: "If you could be any kitchen appliance, which one?",
    a: "A toaster, warm and reliable"
  }, {
    q: "What would your superhero name be?",
    a: "Captain Comfortable, defender of cozy naps"
  }, {
    q: "If you could only eat one color food, what color?",
    a: "Brown: chocolate, bread, coffee, steak"
  }, {
    q: "What's your most useless talent?",
    a: "Can wiggle ears independently"
  }, {
    q: "If you were a vegetable, which one?",
    a: "A potato, versatile and beloved"
  }, {
    q: "What's the silliest fear you have?",
    a: "Butterflies, they're unpredictable"
  }, {
    q: "If you could talk to one species, which?",
    a: "Dogs, to finally understand them"
  }, {
    q: "What's your go-to dance move?",
    a: "The classic dad shuffle"
  }],
  serious: [{
    q: "What's the most important lesson you've learned?",
    a: "Patience and kindness go far"
  }, {
    q: "What would you tell your younger self?",
    a: "Don't worry so much, it works out"
  }, {
    q: "What's your proudest accomplishment?",
    a: "Raising a kind, thoughtful family"
  }, {
    q: "What does a perfect day look like?",
    a: "Coffee, good book, time with loved ones"
  }, {
    q: "What's the best advice you've received?",
    a: "Listen more than you speak"
  }, {
    q: "What motivates you to keep going?",
    a: "Seeing my grandchildren grow and thrive"
  }, {
    q: "What's one thing you'd change about the world?",
    a: "More empathy and understanding between people"
  }, {
    q: "What's your definition of success?",
    a: "Being content and helping others"
  }, {
    q: "What's the most valuable thing you own?",
    a: "Family photos and memories"
  }, {
    q: "What would you do with an extra hour daily?",
    a: "Read more books and learn"
  }]
};
function RandomQuestion() {
  const [mode, setMode] = useState('silly');
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const handleGenerate = () => {
    setIsGenerating(true);
    setCurrentQuestion(null);

    // Simulate a brief loading state for better UX feedback
    setTimeout(() => {
      const questionList = questions[mode];
      const randomIndex = Math.floor(Math.random() * questionList.length);
      setCurrentQuestion(questionList[randomIndex]);
      setIsGenerating(false);
    }, 600);
  };
  return <div className="w-full max-w-2xl mx-auto">
      <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl shadow-lg p-5 sm:p-6 md:p-8 border border-border">
        <div className="flex items-center justify-center gap-3 mb-6 md:mb-8">
          <Lightbulb className="w-7 h-7 md:w-8 md:h-8 text-primary flex-shrink-0" />
          <h3 className="hero-heading text-2xl md:text-3xl font-bold text-foreground text-center">RANDOM QUESTIONS</h3>
        </div>

        <div className="space-y-6 md:space-y-8">
          {/* Mode Toggle */}
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Button onClick={() => {
            setMode('silly');
            setCurrentQuestion(null);
          }} variant={mode === 'silly' ? 'default' : 'outline'} className="flex-1 min-h-[48px] h-12 text-base transition-all duration-200 active:scale-95 touch-manipulation">
              Silly & Fun
            </Button>
            <Button onClick={() => {
            setMode('serious');
            setCurrentQuestion(null);
          }} variant={mode === 'serious' ? 'default' : 'outline'} className="flex-1 min-h-[48px] h-12 text-base transition-all duration-200 active:scale-95 touch-manipulation">
              Deep & Serious
            </Button>
          </div>

          {/* Prominent Generate Button */}
          <div className="flex justify-center">
            <Button onClick={handleGenerate} disabled={isGenerating} className="btn-generate w-full max-w-md min-h-[56px] text-lg md:text-xl font-bold shadow-md md:hover:shadow-lg transition-all duration-300 active:scale-[0.98] touch-manipulation" size="lg">
              {isGenerating ? <RefreshCw className="w-6 h-6 mr-3 animate-spin flex-shrink-0" /> : <Sparkles className="w-6 h-6 mr-3 flex-shrink-0" />}
              <span className="truncate">
                {isGenerating ? 'Finding a question...' : 'GENERATE QUESTION'}
              </span>
            </Button>
          </div>

          {/* Question Display Area */}
          <div className="min-h-[220px] flex flex-col items-center justify-center">
            <AnimatePresence mode="wait">
              {currentQuestion ? <motion.div key={currentQuestion.q} initial={{
              opacity: 0,
              y: 20,
              scale: 0.95
            }} animate={{
              opacity: 1,
              y: 0,
              scale: 1
            }} exit={{
              opacity: 0,
              y: -20,
              scale: 0.95
            }} transition={{
              duration: 0.4,
              ease: "easeOut"
            }} className="w-full bg-card rounded-2xl border-2 border-primary/20 shadow-sm p-5 sm:p-6 md:p-8 text-center mt-4 md:mt-8">
                  <p className="text-xs sm:text-sm font-bold text-primary uppercase tracking-widest mb-3 md:mb-4">
                    {mode === 'silly' ? 'Fun Question' : 'Thoughtful Question'}
                  </p>
                  <h4 className="question-display-text text-xl sm:text-2xl md:text-3xl lg:text-4xl text-card-foreground mb-5 md:mb-6 px-2">
                    "{currentQuestion.q}"
                  </h4>
                  
                  <div className="inline-block bg-muted/50 rounded-xl px-4 sm:px-6 py-3 sm:py-4 border border-border/50 w-full sm:w-auto">
                    <p className="text-[10px] sm:text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">
                      Sample Answer
                    </p>
                    <p className="body-text text-sm sm:text-base text-foreground italic">
                      {currentQuestion.a}
                    </p>
                  </div>
                </motion.div> : !isGenerating ? <motion.div initial={{
              opacity: 0
            }} animate={{
              opacity: 1
            }} className="text-center text-muted-foreground px-4">
                  <Lightbulb className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-3 md:mb-4 opacity-20" />
                  <p className="body-text text-base md:text-lg">
                    Tap the big button above to get a random question!
                  </p>
                </motion.div> : null}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>;
}
export default RandomQuestion;