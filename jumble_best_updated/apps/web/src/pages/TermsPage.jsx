import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

function TermsPage() {
  return <>
    <Helmet>
      <title>Jumble.best - Terms of Service</title>
      <meta name="description" content="Terms of Service for Jumble.best — simple, fair, and written in plain English." />
    </Helmet>

    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="py-24 bg-gradient-to-br from-secondary/15 via-background to-primary/15 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-secondary/10 rounded-full mix-blend-multiply filter blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut" }}>
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="p-4 bg-secondary rounded-2xl shadow-lg shadow-secondary/20 rotate-12">
                <FileText className="w-10 h-10 text-secondary-foreground -rotate-12" />
              </div>
              <h1 className="hero-heading text-5xl md:text-6xl font-black text-foreground">
                Terms of Service
              </h1>
            </div>
            <p className="body-text text-xl text-muted-foreground max-w-2xl mx-auto font-medium">
              No fine print, no legalese. Just a fair agreement between you and Kalamity Kate.
            </p>
            <p className="text-sm text-muted-foreground mt-4">Last updated: May 2026</p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">

          {[
            {
              title: "Welcome!",
              content: "By using Jumble.best, you agree to these terms. Don't worry — they're short, fair, and written by a real human (with a little help from KK). If you don't agree, you're welcome to close the tab, but we'd hate to see you go!"
            },
            {
              title: "What Jumble.best Is",
              content: "Jumble.best is a free word puzzle tool designed for Boomers and Word Nerds. It includes a word unscrambler, anagram solver, and downloadable cheat sheets. All tools are provided for personal, non-commercial entertainment and educational use."
            },
            {
              title: "It's Free — And Always Will Be",
              content: "All tools on Jumble.best are free to use. We don't charge you anything, require a subscription, or hide features behind a paywall. In the future the site may display advertisements to help keep the lights on, but the tools themselves will always be free."
            },
            {
              title: "How You Can Use This Site",
              content: "You're welcome to use Jumble.best for personal use, share it with friends and family, print or download our cheat sheets for personal use, and link to Jumble.best from your own website or social media. Please don't copy, sell, or republish our content as your own — Kalamity Kate worked hard on this!"
            },
            {
              title: "No Guarantees (But We Try Hard!)",
              content: "We do our best to keep Jumble.best accurate, up-to-date, and running smoothly. However, we can't guarantee the site will always be available or error-free. Word definitions, puzzle solutions, and tool results are provided as-is. If you spot a mistake, please let us know via the Feedback form!"
            },
            {
              title: "Third-Party Links & Advertising",
              content: "Jumble.best may contain links to other websites and may display ads served by Google AdSense. We're not responsible for the content or privacy practices of those external sites. Any ads you see are served automatically — we don't personally endorse advertised products."
            },
            {
              title: "Your Content",
              content: "When you submit feedback through our form, you're giving us permission to read it and respond. We won't publish your feedback publicly without your permission, and we'll never sell your contact information to anyone."
            },
            {
              title: "Changes to These Terms",
              content: "If we ever update these Terms of Service, we'll post the new version right here with an updated date at the top. Continued use of the site after changes means you accept the new terms. We'll always keep it plain and simple."
            },
            {
              title: "Questions?",
              content: "If anything here seems unclear or you have concerns, reach out to Kalamity Kate directly using the Feedback form on our site — we're real people and we actually read every message!"
            },
          ].map((section, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="bg-card rounded-2xl border-2 border-border p-8 shadow-sm"
            >
              <h2 className="hero-heading text-2xl font-black text-foreground mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-secondary text-secondary-foreground flex items-center justify-center text-sm font-black shadow-md flex-shrink-0">
                  {i + 1}
                </span>
                {section.title}
              </h2>
              <p className="body-text text-lg text-muted-foreground leading-relaxed font-medium">
                {section.content}
              </p>
            </motion.div>
          ))}

        </div>
      </section>

      <Footer />
    </div>
  </>;
}

export default TermsPage;