import React, { useState } from 'react';
import { Grid3x3, Search } from 'lucide-react';
import { motion } from 'framer-motion';
import { findWordsMatchingPattern, getDefinition } from '@/lib/wordDictionary.js';
import DefinitionPopup from '@/components/DefinitionPopup.jsx';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';

function CrosswordHelper() {
  const [pattern, setPattern] = useState('');
  const [dictionary, setDictionary] = useState('standard');
  const [results, setResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = () => {
    if (pattern.length < 2) return;
    
    console.log(`\n[CrosswordHelper] SUBMIT button clicked!`);
    console.log(`[CrosswordHelper] Pattern input value before search: "${pattern}"`);
    console.log(`[CrosswordHelper] Selected dictionary: "${dictionary}"`);
    
    setIsSearching(true);
    setHasSearched(true);
    
    // Small delay to show loading state and provide visual feedback of the action
    setTimeout(() => {
      const foundWords = findWordsMatchingPattern(pattern, dictionary);
      
      console.log(`[CrosswordHelper] Results returned from findWordsMatchingPattern:`, foundWords);

      setResults(foundWords.sort((a, b) => a.length - b.length));
      setIsSearching(false);
    }, 300);
  };

  const groupByLength = (words) => {
    const grouped = {};
    words.forEach(word => {
      const len = word.length;
      if (!grouped[len]) grouped[len] = [];
      grouped[len].push(word);
    });
    return grouped;
  };

  const renderWordGroup = () => {
    if (results.length === 0) return null;
    
    const grouped = groupByLength(results);
    
    return (
      <div className="space-y-6 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
        {Object.keys(grouped).sort((a, b) => a - b).map(length => (
          <div key={length}>
            <h4 className="text-sm font-semibold text-muted-foreground mb-3 uppercase tracking-wider">
              {length}-Letter Words ({grouped[length].length})
            </h4>
            <div className="grid grid-cols-1 gap-2">
              {grouped[length].map(word => (
                <DefinitionPopup
                  key={word}
                  word={word}
                  definition={getDefinition(word, dictionary)}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="w-full">
      <div className="bg-card rounded-2xl shadow-lg p-6 border border-border">
        <div className="flex items-center gap-3 mb-6">
          <Grid3x3 className="w-6 h-6 text-primary" />
          <h3 className="hero-heading text-2xl font-bold text-card-foreground">Crossword Helper</h3>
        </div>

        <div className="space-y-5">
          <div>
            <label htmlFor="pattern-input" className="block text-sm font-medium text-card-foreground mb-2">
              Enter pattern (use _ for unknown letters)
            </label>
            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                id="pattern-input"
                type="text"
                value={pattern}
                onChange={(e) => {
                  setPattern(e.target.value.toLowerCase());
                  setHasSearched(false); // Reset search state when input changes
                }}
                placeholder="e.g., C_T, _AT, B__K, sc_n__r"
                className="hero-heading text-2xl h-16 flex-1 text-foreground placeholder:text-muted-foreground"
              />
              <Button 
                onClick={handleSearch}
                disabled={isSearching || pattern.length < 2}
                className="h-16 px-8 text-lg font-semibold shadow-md transition-all active:scale-[0.98]"
              >
                {isSearching ? 'Searching...' : 'Submit'}
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              Example: "sc_n__r" will find "scanner"
            </p>
          </div>

          <div>
            <label htmlFor="crossword-dictionary" className="block text-sm font-medium text-card-foreground mb-2">
              Dictionary
            </label>
            <Select value={dictionary} onValueChange={(val) => {
              setDictionary(val);
              setHasSearched(false);
            }}>
              <SelectTrigger id="crossword-dictionary" className="text-foreground h-12">
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
          <div className="mt-8 flex items-center justify-center py-12">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
              <div className="w-3 h-3 bg-primary rounded-full animate-pulse delay-75" />
              <div className="w-3 h-3 bg-primary rounded-full animate-pulse delay-150" />
            </div>
          </div>
        )}

        {!isSearching && hasSearched && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 pt-6 border-t border-border"
          >
            {results.length > 0 ? (
              <>
                <div className="mb-6 p-4 bg-muted/50 rounded-xl border border-border/50">
                  <p className="text-sm font-medium text-card-foreground">
                    Found <span className="font-bold text-primary">{results.length}</span> word{results.length !== 1 ? 's' : ''} matching "{pattern}"
                  </p>
                </div>
                {renderWordGroup()}
              </>
            ) : (
              <div className="text-center py-12 bg-muted/30 rounded-xl border border-border/50">
                <Search className="w-12 h-12 text-muted-foreground/50 mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-card-foreground mb-1">No matches found</h4>
                <p className="text-muted-foreground text-sm">Try adjusting your pattern or selecting a different dictionary.</p>
              </div>
            )}
          </motion.div>
        )}

        {!hasSearched && pattern.length > 0 && pattern.length < 2 && (
          <div className="mt-6 text-center py-8">
            <p className="text-muted-foreground text-sm">Enter at least 2 characters to search</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default CrosswordHelper;