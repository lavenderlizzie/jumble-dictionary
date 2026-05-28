import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown, ChevronUp, MessageSquare as MessageSquareHeart, Download } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import GrandmaMascot from '@/components/GrandmaMascot.jsx';
import FeedbackForm from '@/components/FeedbackForm.jsx';

// ⬇️ STEP: Upload Top50JumbleWords_v4.pdfc to your Hostinger file manager,
//    then replace this URL with the real CDN link.
const PDF_URL = 'https://drive.google.com/uc?export=download&id=1psSSbdtc80dKFUsrxODpX23PzdYJ4A_x';

function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null);
  const faqs = [{
    question: 'How do I use the Word Unscrambler?',
    answer: 'Simply type your scrambled letters into the vibrant input box, select your preferred dictionary (Standard English, Oxford, or Slang), and the tool will instantly show you all possible words. Results are dynamically organized by word length for easy browsing.'
  }, {
    question: 'What\'s the difference between the dictionaries?',
    answer: 'Standard English includes common everyday words. Oxford Dictionary contains more formal and academic vocabulary. Slang includes informal words and expressions. Choose the dictionary that best matches your puzzle!'
  }, {
    question: 'Can I see word definitions?',
    answer: 'Yes! Click on any bright word pill in the results to expand and view its definition. This helps you learn new words while solving puzzles in style.'
  }, {
    question: 'How does the Anagram Solver work?',
    answer: 'The Anagram Solver finds all possible words you can make from a set of letters. Unlike the Unscrambler (which finds exact matches), the Anagram Solver shows every word that can be formed using some or all of your letters.'
  }, {
    question: 'Is Jumble.best free to use?',
    answer: 'Yes! All our colorful tools are completely free. No sign-up required, no hidden fees, no subscriptions. Just bright, helpful word puzzle tools available whenever you need them.'
  }, {
    question: 'Do I need to create an account?',
    answer: 'No account needed! You can dive straight into all our energetic tools immediately without signing up or providing any personal information.'
  }, {
    question: 'Can I use this on my phone or tablet?',
    answer: 'Absolutely! Our website is fully responsive and looks stunning on phones, tablets, and computers. The vibrant interface adapts seamlessly to your screen size.'
  }, {
    question: 'What is the Random Question feature for?',
    answer: 'It\'s a lively way to take a mental break from puzzles. Generate silly or serious questions to ponder, share with friends, or use as bright conversation starters!'
  }, {
    question: 'Why is the design so colorful?',
    answer: 'We believe word puzzles shouldn\'t be boring! Our vibrant, saturated color scheme is designed to boost energy, improve focus, and make the solving experience joyful.'
  }];
  const toggleFAQ = index => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return <>
      <Helmet>
        <title>Jumble.best - FAQ & Feedback</title>
        <meta name="description" content="Frequently asked questions about Jumble.best word puzzle tools. Learn how to use the vibrant Unscrambler, Anagram Solver, and leave us your feedback." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-primary/15 via-background to-secondary/15 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-primary/10 rounded-full mix-blend-multiply filter blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/10 rounded-full mix-blend-multiply filter blur-3xl translate-y-1/2 -translate-x-1/2" />

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut" }}>
              <div className="flex items-center justify-center gap-4 mb-8">
                <div className="p-4 bg-primary rounded-2xl shadow-lg shadow-primary/20 rotate-12">
                  <HelpCircle className="w-10 h-10 text-primary-foreground -rotate-12" />
                </div>
                <h1 className="hero-heading text-5xl md:text-7xl font-black text-foreground">
                  FAQ
                </h1>
              </div>
              <p className="body-text text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto font-medium">
                Find clear, bright answers to common questions about our word puzzle tools. Our feedback box is at the bottom of the page. We love to hear from our wordy friends.
              </p>
            </motion.div>
          </div>
        </section>

        {/* FAQ List */}
        <section className="py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-6">
              {faqs.map((faq, index) => <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.05 }} className={`bg-card rounded-2xl border-2 transition-all duration-300 overflow-hidden ${openIndex === index ? 'border-primary shadow-lg shadow-primary/10' : 'border-border shadow-sm hover:border-primary/40'}`}>
                  <button onClick={() => toggleFAQ(index)} className="w-full px-8 py-6 flex items-center justify-between hover:bg-muted/30 transition-all duration-200 active:scale-[0.99]">
                    <span className="font-black text-xl text-left text-card-foreground pr-8">
                      {faq.question}
                    </span>
                    <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 ${openIndex === index ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}`}>
                      {openIndex === index ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
                    </div>
                  </button>
                  <AnimatePresence>
                    {openIndex === index && <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: "easeInOut" }} className="overflow-hidden">
                        <div className="px-8 py-6 bg-primary/5 border-t-2 border-primary/10">
                          <p className="body-text text-lg font-medium text-card-foreground leading-relaxed">{faq.answer}</p>
                        </div>
                      </motion.div>}
                  </AnimatePresence>
                </motion.div>)}
            </div>
          </div>
        </section>

        {/* Grandma Section */}
        <section className="py-24 bg-muted/40 border-y border-border/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="flex justify-center">
              <GrandmaMascot message="Don't see your question here? That's perfectly fine! Just click around these bright buttons and you'll figure it out in no time." position="right" />
            </motion.div>
          </div>
        </section>

        {/* ── FREE DOWNLOAD SECTION ── */}
        <section id="download" className="py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-card rounded-3xl border-2 border-primary/30 shadow-xl shadow-primary/10 p-8 md:p-12 text-center"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-primary text-primary-foreground mb-6 shadow-xl shadow-primary/30 -rotate-3">
                <Download className="w-10 h-10 rotate-3" />
              </div>
              <h2 className="hero-heading text-3xl md:text-5xl font-black text-foreground mb-4">
                Free Download! 🧩
              </h2>
              <p className="body-text text-xl text-muted-foreground max-w-2xl mx-auto mb-3 font-medium">
                <strong>Kalamity Kate's Top 50 Jumble Words That Fool Everyone</strong>
              </p>
              <p className="body-text text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                Your 2-page cheat sheet with the trickiest Jumble words, solver hints, and fun facts about the puzzle game you love — totally free, no sign-up needed!
              </p>
              <a
                href={PDF_URL}
                download="Top50JumbleWords_KalamityKate.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 h-16 px-10 text-xl font-bold rounded-2xl bg-primary text-primary-foreground shadow-xl shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-1 transition-all duration-300 active:scale-[0.98]"
              >
                <Download className="w-6 h-6" />
                Download the Cheat Sheet — It's Free!
              </a>
              <p className="text-sm text-muted-foreground mt-5">
                2 pages · Print-friendly · No sign-up · Works on any device
              </p>
            </motion.div>
          </div>
        </section>

        {/* Feedback Section */}
        <section className="py-32 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-primary text-primary-foreground mb-8 shadow-xl shadow-primary/30 rotate-3">
                <MessageSquareHeart className="w-10 h-10 -rotate-3" />
              </div>
              <h2 className="hero-heading text-4xl md:text-6xl font-black text-foreground mb-6">
                We'd Love Your Feedback!
              </h2>
              <p className="body-text text-xl text-muted-foreground max-w-2xl mx-auto font-medium">
                The Jumble.best team values your energetic suggestions. Whether you have an idea for a new feature, found a bug, or just want to say hello, please let us know!
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
              <div className="bg-card p-2 md:p-4 rounded-3xl border-2 border-border shadow-2xl">
                <FeedbackForm />
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>;
}
export default FAQPage;