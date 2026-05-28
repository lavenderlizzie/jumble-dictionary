import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

function FeedbackForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedback: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (name === 'feedback' && value.trim()) {
      setError('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.feedback.trim()) {
      setError('Please enter your feedback before submitting.');
      return;
    }

    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: 'b79d1e6f-b771-47d0-9c5b-131ac11cd78e',
          subject: 'New Feedback from Jumble.best',
          name: formData.name || 'Anonymous',
          email: formData.email || 'No email provided',
          message: formData.feedback
        })
      });

      const result = await response.json();

      if (result.success) {
        setIsSubmitting(false);
        setIsSuccess(true);
        setFormData({ name: '', email: '', feedback: '' });
        setTimeout(() => {
          setIsSuccess(false);
        }, 4000);
      } else {
        throw new Error('Submission failed');
      }
    } catch (err) {
      setIsSubmitting(false);
      setError('Something went wrong. Please try again in a moment.');
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="bg-card rounded-2xl shadow-lg p-6 md:p-8 border border-border relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -z-10" />
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-secondary/5 rounded-tr-full -z-10" />

        <AnimatePresence mode="wait">
          {isSuccess ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="flex flex-col items-center justify-center py-12 text-center space-y-4"
            >
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-2">
                <Heart className="w-8 h-8 text-primary fill-primary" />
              </div>
              <h3 className="feedback-success text-2xl font-bold text-foreground">
                Thanks for your feedback, Boomer!
              </h3>
              <p className="body-text text-muted-foreground text-lg">
                We love hearing from you and appreciate your help in making our tools better.
              </p>
            </motion.div>
          ) : (
            <motion.div
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="feedback-label">Name (Optional)</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="How should we call you?"
                      className="bg-background transition-smooth focus:ring-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="feedback-label">Email (Optional)</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="For replies, if needed"
                      className="bg-background transition-smooth focus:ring-primary"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="feedback" className="feedback-label">
                    Your Feedback or Suggestion <span className="text-destructive">*</span>
                  </Label>
                  <Textarea
                    id="feedback"
                    name="feedback"
                    value={formData.feedback}
                    onChange={handleChange}
                    placeholder="Tell us what you love, what's broken, or what we should add next..."
                    className={`min-h-[120px] bg-background transition-smooth resize-y ${error ? 'border-destructive focus-visible:ring-destructive' : 'focus-visible:ring-primary'}`}
                  />
                  {error && (
                    <p className="text-sm text-destructive mt-1 animate-in fade-in slide-in-from-top-1">
                      {error}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto h-12 px-8 transition-all duration-200 active:scale-[0.98]"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                      <span>Sending...</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <Send className="w-4 h-4" />
                      <span>Send Feedback</span>
                    </div>
                  )}
                </Button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default FeedbackForm;