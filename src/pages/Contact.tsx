import { useState } from 'react';
import { Mail, Send, CheckCircle, Loader2 } from 'lucide-react';
import { supabase } from '../lib/supabase';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');

    const { error: submitError } = await supabase.from('contact_submissions').insert({
      name: form.name,
      email: form.email,
      subject: form.subject,
      message: form.message,
    });

    if (submitError) {
      setError('Something went wrong. Please try again.');
      setSubmitting(false);
      return;
    }

    setSubmitted(true);
    setSubmitting(false);
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative pt-28 pb-16 sm:pt-32 sm:pb-20 bg-gradient-to-br from-navy via-navy-light to-navy border-b border-gold/10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,168,67,0.08),transparent_60%)]" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold font-medium tracking-[0.2em] uppercase text-xs mb-3">Reach Out</p>
          <h1 className="text-4xl sm:text-6xl font-serif font-bold text-warm-white mb-6">Contact</h1>
          <p className="text-warm-white/60 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Whether you have a question about a book, a speaking inquiry, or simply want to say hello — Larry would love to hear from you.
          </p>
        </div>
      </section>

      <section className="section-padding bg-gold">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14">
            {/* Contact Info */}
            <div className="lg:col-span-2 bg-navy-card border border-navy/20 rounded-lg p-6 sm:p-8">
              <p className="text-gold font-medium tracking-[0.2em] uppercase text-xs mb-3">Get in Touch</p>
              <h2 className="text-3xl font-serif font-bold text-warm-white mb-6">Let's Connect</h2>
              <p className="text-warm-white/60 leading-relaxed mb-8">
                Larry is available for book signings, speaking engagements, media appearances, and ministry events. All proceeds from his books support ministry and service work.
              </p>

              <div className="flex items-start gap-4 mb-8">
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                  <Mail size={16} className="text-gold" />
                </div>
                <div>
                  <p className="font-medium text-warm-white/70 mb-0.5">Email</p>
                  <a href="mailto:larbach98@gmail.com" className="text-gold hover:text-gold-light transition-colors text-sm">
                    larbach98@gmail.com
                  </a>
                </div>
              </div>

              <div className="p-6 bg-navy-card/40 border-l-4 border-gold mb-8 rounded-r-lg">
                <p className="font-serif text-warm-white/60 italic leading-relaxed text-sm">
                  "My greatest hope is that my experiences resonate with readers, revealing the quiet yet powerful presence of God's charity woven into life's journey."
                </p>
                <p className="text-gold text-xs font-medium mt-3">— Larry Bachman</p>
              </div>

              <div>
                <p className="text-xs font-medium text-warm-white/30 uppercase tracking-widest mb-3">Inquiries Welcome For</p>
                <ul className="space-y-2">
                  {['Book Inquiry', 'Speaking / Appearance', 'Media & Press', 'Music & Licensing', 'General Message'].map((type) => (
                    <li key={type} className="flex items-center gap-2 text-sm text-warm-white/60">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                      {type}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3 bg-navy-card border border-navy/20 rounded-lg p-6 sm:p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center text-center py-20 px-8 bg-navy-card/40 border border-gold/10 rounded-lg h-full">
                  <CheckCircle size={48} className="text-gold mb-4" />
                  <h3 className="font-serif text-2xl font-bold text-warm-white mb-3">Message Sent</h3>
                  <p className="text-warm-white/60 leading-relaxed max-w-sm">
                    Thank you for reaching out. Larry or his team will be in touch with you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {error && (
                    <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm">
                      {error}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-warm-white/70 mb-1.5" htmlFor="name">
                        Full Name <span className="text-gold">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className="w-full px-4 py-2.5 bg-navy-card/40 border border-gold/20 focus:border-gold focus:ring-1 focus:ring-gold/30 rounded-sm text-sm text-warm-white placeholder-warm-white/20 outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-warm-white/70 mb-1.5" htmlFor="email">
                        Email Address <span className="text-gold">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className="w-full px-4 py-2.5 bg-navy-card/40 border border-gold/20 focus:border-gold focus:ring-1 focus:ring-gold/30 rounded-sm text-sm text-warm-white placeholder-warm-white/20 outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-warm-white/70 mb-1.5" htmlFor="subject">
                      Subject <span className="text-gold">*</span>
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="What is this about?"
                      className="w-full px-4 py-2.5 bg-navy-card/40 border border-gold/20 focus:border-gold focus:ring-1 focus:ring-gold/30 rounded-sm text-sm text-warm-white placeholder-warm-white/20 outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-warm-white/70 mb-1.5" htmlFor="message">
                      Your Message <span className="text-gold">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Write your message here..."
                      className="w-full px-4 py-2.5 bg-navy-card/40 border border-gold/20 focus:border-gold focus:ring-1 focus:ring-gold/30 rounded-sm text-sm text-warm-white placeholder-warm-white/20 outline-none transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light disabled:opacity-60 text-navy font-medium px-8 py-3 rounded-sm transition-all w-full sm:w-auto justify-center"
                  >
                    {submitting ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={15} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
