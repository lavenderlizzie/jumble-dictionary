import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

function PrivacyPage() {
  return <>
    <Helmet>
      <title>Jumble.best - Privacy Policy</title>
      <meta name="description" content="Privacy Policy for Jumble.best — we keep it simple, honest, and boomer-friendly." />
    </Helmet>

    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="py-24 bg-gradient-to-br from-primary/15 via-background to-secondary/15 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-primary/10 rounded-full mix-blend-multiply filter blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut" }}>
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="p-4 bg-primary rounded-2xl shadow-lg shadow-primary/20 rotate-12">
                <Shield className="w-10 h-10 text-primary-foreground -rotate-12" />
              </div>
              <h1 className="hero-heading text-5xl md:text-6xl font-black text-foreground">
                Privacy Policy
              </h1>
            </div>
            <p className="body-text text-xl text-muted-foreground max-w-2xl mx-auto font-medium">
              Plain English, no legal mumbo-jumbo. We respect your privacy and want you to know exactly how this site works.
            </p>
            <p className="text-sm text-muted-foreground mt-4">Last updated: May 2026</p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          {[
            {
              title: "The Short Version",
              content: "Jumble.best is a free word puzzle tool. We don't sell your data. We don't require you to create an account. We don't store your scrambled words or search history. You can use this site completely anonymously."
            },
            {
              title: "What Information We Collect",
              content: "We collect almost nothing. The only time we receive your information is if you voluntarily fill out our Feedback Form — in which case we receive your name, email address, and the message you write. We use that information only to read and respond to your feedback. We never share it with anyone."
            },
            {
              title: "Cookies",
              content: "Like most websites, Jumble.best may use cookies — small text files stored on your device — to help the site function properly and remember your preferences. We may also use third-party services (like Google) that place their own cookies for analytics and advertising purposes. You can control cookies through your browser settings at any time."
            },
            {
              title: "Google and Advertising",
              content: "Jumble.best may display advertisements served by Google AdSense. Google uses cookies to show ads based on your prior visits to this and other websites. You can opt out of personalized advertising at any time by visiting Google's Ad Settings at adssettings.google.com. For more information on how Google uses data, visit google.com/policies/privacy/partners."
            },
            {
              title: "Third-Party Services",
              content: "We use a few trusted services to run this site: Formspree (to receive your feedback form submissions), Hostinger (to host the website), and Google (for analytics and advertising). Each of these services has their own privacy policy. We don't control how they handle data on their end."
            },
            {
              title: "Children's Privacy",
              content: "Jumble.best is designed for adults, particularly word puzzle enthusiasts and Boomers. We do not knowingly collect any personal information from children under the age of 13."
            },
            {
              title: "Your Rights",
              content: "You have the right to know what information we have about you, to ask us to delete it, and to opt out of any data collection. Since we collect almost nothing, there's usually very little to worry about — but if you have concerns, just reach out and we'll sort it out together."
            },
            {
              title: "Changes to This Policy",
              content: "If we ever update this Privacy Policy, we'll post the new version right here with an updated date at the top. We'll always keep it in plain English — no surprises."
            },
            {
              title: "Contact Us",
              content: "Questions? Concerns? Just want to say hi? Reach Kalamity Kate at: katkitlavender@gmail.com — we read every email!"
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
                <span className="w-8 h-8 rounded-xl bg-primary text-primary-foreground flex items-center justify-center text-sm font-black shadow-md shadow-primary/30 flex-shrink-0">
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

export default PrivacyPage;