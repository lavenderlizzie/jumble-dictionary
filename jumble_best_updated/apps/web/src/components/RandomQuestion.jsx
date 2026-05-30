import React, { useState } from 'react';
import { Lightbulb, RefreshCw, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';

const questions = {
  silly: [
    {
      q: "If you could have dinner with any fictional character, who would it be and why?",
      a: "Sherlock Holmes — the conversation would never be dull!"
    },
    {
      q: "If your pet could talk for one minute, what do you think they'd say?",
      a: "Probably 'feed me' followed by a list of grievances"
    },
    {
      q: "What's the strangest food combination you secretly enjoy?",
      a: "Peanut butter and pickles — don't knock it till you try it"
    },
    {
      q: "If you had to survive a zombie apocalypse using only what's in your kitchen, what's your plan?",
      a: "Barricade with the fridge and live off condiments"
    },
    {
      q: "What song would play every time you entered a room?",
      a: "Something dramatic — maybe Eye of the Tiger"
    },
    {
      q: "If you could swap lives with anyone for just one day, who and what would you do?",
      a: "A dolphin — swim all day without a care in the world"
    },
    {
      q: "What's the most ridiculous thing you've ever done on a dare or a whim?",
      a: "Sang karaoke in a language I don't speak"
    },
    {
      q: "If you wrote a memoir, what would the funniest chapter be called?",
      a: "'The Time I Was Absolutely Certain I Was Right'"
    },
    {
      q: "What's a skill you have that would be completely useless in a survival situation?",
      a: "Knowing every word to 500 songs from the 70s"
    },
    {
      q: "If you could invent one holiday, what would it celebrate?",
      a: "National Nap Day — mandatory rest for everyone"
    },
    {
      q: "What's the most dramatic thing that ever happened to you in a grocery store?",
      a: "Cart collision led to a 20-minute friendship"
    },
    {
      q: "If you could only communicate in movie quotes for a week, which movies would you rely on?",
      a: "Casablanca, The Godfather, and maybe some Monty Python"
    },
  ],
  serious: [
    {
      q: "What's a moment in your life that felt devastating at the time but turned out to be a blessing?",
      a: "Losing a job that led me to something far better"
    },
    {
      q: "What do you know now that you wish someone had told you at 30?",
      a: "That most of what you worry about never actually happens"
    },
    {
      q: "Who is someone you've never properly thanked but should?",
      a: "A teacher who believed in me when I didn't believe in myself"
    },
    {
      q: "What's the bravest thing you've ever done quietly, without anyone noticing?",
      a: "Walked away from something comfortable that was making me miserable"
    },
    {
      q: "If you could sit with your younger self for an hour, what would you most want them to know?",
      a: "You are enough, exactly as you are right now"
    },
    {
      q: "What's a belief you held for years that you've since completely changed your mind about?",
      a: "That being busy meant I was doing life right"
    },
    {
      q: "What does home mean to you — and has that meaning changed over the years?",
      a: "It's become less about a place and more about people"
    },
    {
      q: "What's something you've forgiven someone for that took real strength to let go of?",
      a: "Old family wounds that were poisoning the present"
    },
    {
      q: "If your life were a book, what chapter would you say you're in right now?",
      a: "The one where the character finally knows who they are"
    },
    {
      q: "What's the most important thing you've learned from a relationship that ended?",
      a: "That how someone treats you on bad days tells you everything"
    },
    {
      q: "What do you want to be remembered for that has nothing to do with your career?",
      a: "Being someone people felt safe around"
    },
    {
      q: "Is there something you've been putting off that, deep down, you know you need to do?",
      a: "Saying 'I love you' more often and without waiting for the right moment"
    },
  ]
};

function RandomQuestion() {
  const [mode, setMode] = useState('silly');
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = () => {
    setIsGenerating(true);
    setCurrentQuestion(null);
    setTimeout(() => {
      const questionList = questions[mode];
      const randomIndex = Math.floor(Math.random() * questionList.length);
      setCurrentQuestion(questionList[randomIndex]);
      setIsGenerating(false);
    }, 600);
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl shadow-lg p-5 sm:p-6 md:p-8 border border-border">
        <div className="flex items-center justify-center gap-3 mb-6 md:mb-8">
          <Lightbulb className="w-7 h-7 md:w-8 md:h-8 text-primary flex-shrink-0" />
          <h3 className="hero-heading text-2xl md:text-3xl font-bold text-foreground text-center">RANDOM QUESTIONS</h3>
        </div>

        <div className="space-y-6 md:space-y-8">
          {/* Mode Toggle */}
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Button
              onClick={() => { setMode('silly'); setCurrentQuestion(null); }}
              variant={mode === 'silly' ? 'default' : 'outline'}
              className="flex-1 min-h-[48px] h-12 text-base transition-all duration-200 active:scale-95 touch-manipulation"
            >
              Silly & Fun
            </Button>
            <Button
              onClick={() => { setMode('serious'); setCurrentQuestion(null); }}
              variant={mode === 'serious' ? 'default' : 'outline'}
              className="flex-1 min-h-[48px] h-12 text-base transition-all duration-200 active:scale-95 touch-manipulation"
            >
              Deep & Thoughtful
            </Button>
          </div>

          {/* Generate Button */}
          <div className="flex justify-center">
            <Button
              onClick={handleGenerate}
              disabled={isGenerating}
              className="btn-generate w-full max-w-md min-h-[56px] text-lg md:text-xl font-bold shadow-md md:hover:shadow-lg transition-all duration-300 active:scale-[0.98] touch-manipulation"
              size="lg"
            >
              {isGenerating
                ? <RefreshCw className="w-6 h-6 mr-3 animate-spin flex-shrink-0" />
                : <Sparkles className="w-6 h-6 mr-3 flex-shrink-0" />}
              <span className="truncate">
                {isGenerating ? 'Finding a question...' : 'GENERATE QUESTION'}
              </span>
            </Button>
          </div>

          {/* Question Display */}
          <div className="min-h-[220px] flex flex-col items-center justify-center">
            <AnimatePresence mode="wait">
              {currentQuestion ? (
                <motion.div
                  key={currentQuestion.q}
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.95 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="w-full bg-card rounded-2xl border-2 border-primary/20 shadow-sm p-5 sm:p-6 md:p-8 text-center mt-4 md:mt-8"
                >
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
                </motion.div>
              ) : !isGenerating ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center text-muted-foreground px-4"
                >
                  <Lightbulb className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-3 md:mb-4 opacity-20" />
                  <p className="body-text text-base md:text-lg">
                    Tap the big button above to get a random question!
                  </p>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RandomQuestion;
