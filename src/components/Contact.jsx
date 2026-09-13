import React, { useState } from 'react';
import { contactData } from '../data/portfolio';
import { Mail, Linkedin, Github, Instagram, Send, CheckCircle2, AlertCircle, ArrowUpRight } from 'lucide-react';

const iconComponents = {
  Mail: Mail,
  Linkedin: Linkedin,
  Github: Github,
  Instagram: Instagram,
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null,
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: null });

    try {
      const response = await fetch(contactData.formspreeEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `New Portfolio Message from ${formData.name}`,
        })
      });

      if (response.ok) {
        setStatus({ submitting: false, submitted: true, error: null });
        setFormData({ name: '', email: '', message: '' });
      } else {
        fallbackMailto();
      }
    } catch (err) {
      fallbackMailto();
    }
  };

  const fallbackMailto = () => {
    const mailtoUrl = `mailto:${contactData.email}?subject=${encodeURIComponent(
      `Message from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoUrl;
    setStatus({ 
      submitting: false, 
      submitted: true, 
      error: 'Redirected to your default email client.' 
    });
  };

  return (
    <section id="contact" className="py-20 bg-slate-900/40 dark:bg-cyber-bg/90 transition-colors duration-200 border-t border-slate-200 dark:border-cyber-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10">
          <div className="text-xs font-mono font-semibold text-cyan-500 uppercase tracking-widest mb-1">
            // 05. CONNECT
          </div>
          <h2 className="section-title">
            Get in Touch
          </h2>
        </div>

        {/* Two Columns Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Box 1: Contact Channels (Direct Clickable Links without Exposing Raw URLs) */}
          <div className="bg-white dark:bg-cyber-card border border-slate-200 dark:border-cyber-border rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="font-space font-semibold text-xl text-slate-900 dark:text-white tracking-normal mb-2 pb-3 border-b border-slate-100 dark:border-cyber-border">
                Direct Channels
              </h3>
              
              <p className="text-xs sm:text-sm text-slate-600 dark:text-cyber-textMuted leading-relaxed mb-6">
                Feel free to connect directly through any of these platforms. Click any card to open:
              </p>

              {/* Direct Links */}
              <div className="space-y-3">
                {contactData.channels.map((channel) => {
                  const Icon = iconComponents[channel.icon] || Mail;
                  return (
                    <a
                      key={channel.id}
                      href={channel.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between p-4 rounded-xl bg-slate-50 dark:bg-cyber-surface border border-slate-200 dark:border-cyber-border hover:border-cyan-400 dark:hover:border-cyan-400 hover:shadow-md transition-all duration-200"
                    >
                      <div className="flex items-center gap-3.5">
                        <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 group-hover:scale-110 transition-transform">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                            {channel.label}
                          </div>
                          <div className="text-xs text-slate-500 dark:text-cyber-textMuted font-mono">
                            {channel.subtitle}
                          </div>
                        </div>
                      </div>

                      <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-cyan-500 dark:group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-cyber-border text-xs text-slate-500 dark:text-slate-400 flex items-center justify-between font-mono">
              <span>Malang, East Java, Indonesia</span>
              <span>UTC+7 (WIB)</span>
            </div>
          </div>

          {/* Box 2: Send Message Form */}
          <div className="bg-white dark:bg-cyber-card border border-slate-200 dark:border-cyber-border rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="font-space font-semibold text-xl text-slate-900 dark:text-white tracking-normal mb-2 pb-3 border-b border-slate-100 dark:border-cyber-border">
                Send a Message
              </h3>
              
              <p className="text-xs sm:text-sm text-slate-600 dark:text-cyber-textMuted leading-relaxed mb-6">
                Have a project proposal, research opportunity, or technical inquiry? Send a message directly:
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1 font-mono">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-cyber-border bg-slate-50 dark:bg-cyber-surface text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1 font-mono">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@example.com"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-cyber-border bg-slate-50 dark:bg-cyber-surface text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1 font-mono">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Type your message, questions, or collaboration details here..."
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-cyber-border bg-slate-50 dark:bg-cyber-surface text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all resize-none"
                  ></textarea>
                </div>

                {status.submitted && (
                  <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                    <span>Message sent successfully! I will get back to you shortly.</span>
                  </div>
                )}

                {status.error && (
                  <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    <span>{status.error}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status.submitting}
                  className="w-full py-3 px-6 rounded-xl font-space text-sm font-semibold bg-cyan-500 text-slate-950 hover:bg-cyan-400 shadow-md shadow-cyan-500/20 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  {status.submitting ? 'Sending Message...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
