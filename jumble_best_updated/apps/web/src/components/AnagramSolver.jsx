import React, { useState, useEffect } from 'react';
import { Shuffle, Search, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { findAnagrams, getDefinition } from '@/lib/wordDictionary.js';
import DefinitionPopup from '@/components/DefinitionPopup.jsx';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { getRandomQuote } from '@/components/KalamityKateQuotes.jsx';

function AnagramSolver() {
  const [letters, setLetters] = useState('');
  const [dictionary, setDictionary] = useState('standard');
  const [bestMatch, setBestMatch] = useState('');
  const [bonusWordsGrouped, setBonusWordsGrouped] = useState({});
  const [isSearching, setIsSearching] = useState(false);
  const [noMatchQuote, setNoMatchQuote] = useState('');

  useEffect(() => {
    const cleanLetters = letters.toLowerCase().replace(/[^a-z]/g, '');

    if (cleanLetters.length >= 2) {
      setIsSearching(true);
      const timer = setTimeout(async () => {
        // Get sub-anagrams from the built-in dictionary (used for bonus words)
        const _raw = findAnagrams(cleanLetters, dictionary);

        // Supplemental list — used ONLY for exact matching, never for bonus words
        const EXTRA = ['hopeless','useless','helpless','restless','endless','careless','homeless','painless','harmless','worthless','fearless','nameless','clueless','tasteless','lawless','loveless','jobless','aimless','boneless','brainless','breathless','cheerless','cloudless','colorless','cordless','countless','doubtless','effortless','flawless','graceless','heartless','joyless','lifeless','listless','merciless','mindless','motionless','needless','noiseless','penniless','pointless','powerless','reckless','relentless','ruthless','senseless','shameless','shapeless','sleepless','smokeless','spotless','stainless','thankless','thoughtless','timeless','voiceless','weightless','wireless','witless','sadness','gladness','madness','goodness','boldness','darkness','hardness','kindness','coldness','illness','wellness','stillness','fullness','dullness','tallness','fitness','witness','weakness','thickness','richness','sickness','toughness','softness','brightness','closeness','freshness','greatness','happiness','laziness','loneliness','loudness','neatness','openness','sharpness','shyness','silliness','smartness','smoothness','soreness','sourness','stiffness','sweetness','tiredness','ugliness','wildness','helpful','grateful','peaceful','fearful','harmful','painful','wasteful','faithful','bashful','cheerful','colorful','dreadful','fruitful','graceful','hateful','hopeful','hurtful','joyful','lawful','mindful','playful','powerful','restful','shameful','skillful','thankful','truthful','unlawful','watchful','willful','wishful','woeful','youthful','action','fraction','traction','reaction','section','mention','tension','pension','mansion','fashion','passion','nation','station','motion','notion','option','caution','fiction','friction','suction','auction','caption','function','junction','sanction','vacation','addition','edition','audition','condition','position','tradition','ambition','admission','omission','commission','permission','running','jumping','singing','dancing','playing','sleeping','working','talking','reading','writing','walking','laughing','fighting','growing','living','loving','cooking','baking','making','taking','giving','going','coming','seeing','feeling','knowing','thinking','looking','keeping','telling','putting','getting','sitting','standing','turning','leaving','moving','showing','winning','losing','hiding','chasing','falling','rising','flying','crying','trying','buying','paying','staying','fishing','hunting','kicking','lifting','mixing','opening','pushing','pulling','raising','saving','sending','sharing','sliding','smiling','solving','sorting','spending','spinning','starting','stopping','throwing','touching','twisting','visiting','waiting','washing','watching','waving','wishing','wondering','wrapping','cornflake','cornflakes','dogfight','snowflake','snowflakes','eggplant','bookmark','bedroom','bathroom','classroom','playground','baseball','football','basketball','softball','downfall','upstairs','downtown','sunflower','butterfly','dragonfly','waterfall','fireplace','bookshelf','handshake','heartbeat','nightmare','daydream','keyboard','doorbell','starfish','jellyfish','swordfish','bluebird','blackbird','happiness','beautiful','adventure','celebrate','challenge','chocolate','companion','condition','container','dangerous','delicious','different','direction','discovery','encourage','enjoyment','everybody','excellent','exception','expecting','expensive','exploring','extremely','happening','highlight','hourglass','household','important','inspiring','invisible','knowledge','landscape','legendary','listening','mechanics','milestone','newcomers','offensive','offspring','operating','ownership','passenger','patchwork','permanent','pineapple','playfully','plentiful','potential','practiced','premature','principal','provision','quicksand','raspberry','readiness','realistic','remainder','satisfied','saxophone','searching','sensation','signature','situation','something','somewhere','spiritual','stability','statement','steadfast','storybook','strategic','structure','substance','surprised','surviving','therefore','timeframe','trademark','tradition','transform','transport','traveling','turbulent','typically','unchanged','wonderful','workbench','worldwide','yesterday','youngster','loneliness','celebration','comfortable','competition','challenging','opportunity','imagination','explanation','information','responsible','independent','interesting','grandfather','grandmother','underground','countryside','magnificent','description','achievement','encouraging','entertaining','experienced','frightening','outstanding','partnership','questioning','recognizing','remembering','significant','spectacular','surrounding','sympathetic','troublesome','trustworthy','unfortunate','unstoppable','wonderfully','accomplished','championship','considerable','disappearing','encyclopedia','entertainment','independence','neighborhood','overwhelming','relationships','uncomfortable','understanding','unbelievable','unprecedented','announcement','choreography','independently','strawberry','watermelon','wanderlust'];

        // Sort the input letters for exact comparison
        const sortedInput = cleanLetters.split('').sort().join('');

        // Filter EXTRA to only words that are an EXACT letter match for the input
        const exactExtra = EXTRA.filter(w => w.split('').sort().join('') === sortedInput);

        // Combine dictionary results with exact-match supplemental words
        const allCandidates = [...new Set([..._raw, ...exactExtra])];

        // Find the exact match
        const exactMatches = allCandidates.filter(word =>
          word.toLowerCase().split('').sort().join('') === sortedInput
        );

        if (exactMatches.length > 0) {
          const match = exactMatches[0];
          setBestMatch(match);

          // Bonus words come ONLY from the real dictionary (_raw), never from EXTRA
          const bonusWords = _raw.filter(w => w !== match && w.length >= 3);
          const grouped = bonusWords.reduce((acc, word) => {
            const len = word.length;
            if (!acc[len]) acc[len] = [];
            acc[len].push(word);
            return acc;
          }, {});
          setBonusWordsGrouped(grouped);
          setNoMatchQuote('');
          setIsSearching(false);
        } else {
          // Last resort: ask Datamuse API for words of the same length
          try {
            const pattern = '?'.repeat(cleanLetters.length);
            const resp = await fetch(`https://api.datamuse.com/words?sp=${pattern}&max=1000`);
            const data = await resp.json();
            const apiMatch = data.find(item =>
              item.word.toLowerCase().split('').sort().join('') === sortedInput
            );
            if (apiMatch) {
              setBestMatch(apiMatch.word.toLowerCase());
              setBonusWordsGrouped({});
              setNoMatchQuote('');
            } else {
              setBestMatch('');
              setBonusWordsGrouped({});
              setNoMatchQuote(getRandomQuote());
            }
          } catch (e) {
            setBestMatch('');
            setBonusWordsGrouped({});
            setNoMatchQuote(getRandomQuote());
          }
          setIsSearching(false);
        }
      }, 400);

      return () => clearTimeout(timer);
    } else {
      setBestMatch('');
      setBonusWordsGrouped({});
    }
  }, [letters, dictionary]);

  // Sort length keys descending (e.g., 6, 5, 4, 3)
  const sortedBonusLengths = Object.keys(bonusWordsGrouped).sort((a, b) => b - a);

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="bg-card rounded-3xl shadow-xl p-6 md:p-8 border border-border">
        <div className="flex items-center gap-3 mb-8 pb-6 border-b border-border/50">
          <div className="bg-primary/10 p-3 rounded-2xl">
            <Shuffle className="w-8 h-8 text-primary" />
          </div>
          <div>
            <h3 className="hero-heading text-3xl font-extrabold text-card-foreground">Anagram Solver</h3>
            <p className="text-muted-foreground mt-1">Discover the perfect word hiding in your letters.</p>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <label htmlFor="anagram-input" className="block text-sm font-semibold text-card-foreground mb-2">
              Enter your jumbled letters
            </label>
            <Input
              id="anagram-input"
              type="text"
              value={letters}
              onChange={(e) => setLetters(e.target.value.replace(/[^a-zA-Z\s]/g, ''))}
              placeholder="e.g., listen"
              className="hero-heading text-2xl h-16 md:h-20 md:text-4xl text-center text-foreground placeholder:text-muted-foreground/50 uppercase tracking-[0.2em] border-2 focus-visible:ring-primary focus-visible:border-primary transition-all rounded-2xl"
              autoComplete="off"
              spellCheck="false"
            />
          </div>

          <div className="max-w-xs mx-auto">
            <label htmlFor="anagram-dictionary" className="block text-sm font-semibold text-card-foreground mb-2 text-center">
              Dictionary
            </label>
            <Select value={dictionary} onValueChange={setDictionary}>
              <SelectTrigger id="anagram-dictionary" className="text-foreground h-12 rounded-xl">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="standard">Standard English</SelectItem>
                <SelectItem value="oxford">Oxford Dictionary</SelectItem>
                <SelectItem value="slang">Slang</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {isSearching && (
          <div className="mt-12 flex flex-col items-center justify-center py-12">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
              <div className="w-3 h-3 bg-primary rounded-full animate-pulse delay-75" />
              <div className="w-3 h-3 bg-primary rounded-full animate-pulse delay-150" />
            </div>
            <p className="text-muted-foreground font-medium mt-4 animate-pulse">Unscrambling...</p>
          </div>
        )}

        {!isSearching && letters.replace(/[^a-zA-Z]/g, '').length >= 2 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mt-8"
          >
            {bestMatch ? (
              <div className="space-y-12">
                {/* Main Prominent Reveal Section */}
                <div className="text-center py-10 px-4 bg-primary/5 rounded-3xl border border-primary/10 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
                  
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.1 }}
                  >
                    <h4 className="text-sm font-bold text-primary uppercase tracking-[0.3em] mb-6 flex items-center justify-center gap-2">
                      <Sparkles className="w-4 h-4" /> Perfect Match Found <Sparkles className="w-4 h-4" />
                    </h4>
                    
                    <div className="reveal-word mb-8">
                      {bestMatch}
                    </div>

                    <div className="flex justify-center mt-6">
                      <DefinitionPopup
                        word={bestMatch}
                        definition={getDefinition(bestMatch, dictionary)}
                      />
                    </div>
                  </motion.div>
                </div>
                
                {/* Bonus Words Section */}
                {sortedBonusLengths.length > 0 && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="pt-8 border-t-2 border-border border-dashed"
                  >
                    <div className="text-center mb-8">
                      <h4 className="text-2xl md:text-3xl font-extrabold text-foreground tracking-tight">
                        Bonus Words hiding inside!
                      </h4>
                      <p className="text-muted-foreground mt-2 font-medium">
                        Look at all these shorter words you can make from "{letters.toUpperCase()}"
                      </p>
                    </div>

                    <div className="space-y-8">
                      {sortedBonusLengths.map((len, index) => (
                        <motion.div 
                          key={len}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4 + (index * 0.1) }}
                          className="bg-card p-6 rounded-2xl border border-border/60 shadow-sm"
                        >
                          <h5 className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-4 flex items-center gap-4">
                            <span>{len}-Letter Words</span>
                            <div className="h-px bg-border/50 flex-grow" />
                            <span className="bg-secondary/10 text-secondary-foreground px-2 py-0.5 rounded-full text-xs">
                              {bonusWordsGrouped[len].length}
                            </span>
                          </h5>
                          
                          <div className="flex flex-wrap gap-2 md:gap-3">
                            {bonusWordsGrouped[len].map(word => (
                              <span key={word} className="bonus-word-badge">
                                {word}
                              </span>
                            ))}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            ) : (
              <div className="text-center py-16 px-6 bg-muted/30 rounded-3xl border border-border/50">
                <Search className="w-16 h-16 text-muted-foreground/40 mx-auto mb-6" />
                <p className="text-xl md:text-2xl font-semibold text-foreground max-w-lg mx-auto leading-relaxed">
                  {noMatchQuote}
                </p>
              </div>
            )}
          </motion.div>
        )}

        {letters.length > 0 && letters.replace(/[^a-zA-Z]/g, '').length < 2 && (
          <div className="mt-8 text-center py-10">
            <p className="text-muted-foreground text-sm font-medium">Type at least 2 letters to start the magic...</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default AnagramSolver;