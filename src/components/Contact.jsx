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
          _subject: `New Portfolio Inquiry from ${formData.name}`,
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
    <section id="contact" className="py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Contrasting Section Box */}
        <div className="section-box p-8 sm:p-12 lg:p-14">
          
          {/* Header */}
          <div className="mb-10">
            <div className="text-xs font-mono font-bold text-brand-blue dark:text-sky-400 uppercase tracking-widest mb-1.5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-blue dark:bg-sky-400"></span>
              <span>// 06. CONNECT</span>
            </div>
            <h2 className="section-title">
              Get in Touch
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            
            {/* Box 1: Direct Clickable Channels (Without raw URLs) */}
            <div className="bg-slate-50/80 dark:bg-slate-900/60 border border-slate-200/90 dark:border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <h3 className="font-space font-bold text-xl text-slate-900 dark:text-white mb-2 pb-3 border-b border-slate-200 dark:border-slate-800">
                  Direct Channels
                </h3>
                
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  Feel free to reach out for software projects, research collaborations, or technology discussions. Click any card to connect:
                </p>

                <div className="space-y-3">
                  {contactData.channels.map((channel) => {
                    const Icon = iconComponents[channel.icon] || Mail;
                    return (
                      <a
                        key={channel.id}
                        href={channel.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-between p-4 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 hover:border-brand-blue dark:hover:border-sky-400 hover:shadow-md transition-all duration-200"
                      >
                        <div className="flex items-center gap-3.5">
                          <div className="p-2.5 rounded-lg bg-brand-blue/10 dark:bg-sky-500/10 text-brand-blue dark:text-sky-400 group-hover:scale-110 transition-transform">
                            <Icon className="w-5 h-5" />
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-brand-blue dark:group-hover:text-sky-400 transition-colors">
                              {channel.label}
                            </div>
                            <div className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                              {channel.subtitle}
                            </div>
                          </div>
                        </div>

                        <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-brand-blue dark:group-hover:text-sky-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                      </a>
                    );
                  })}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400 flex items-center justify-between font-mono">
                <span>Malang, East Java, Indonesia</span>
                <span>UTC+7 (WIB)</span>
              </div>
            </div>

            {/* Box 2: Send Message Form */}
            <div className="bg-slate-50/80 dark:bg-slate-900/60 border border-slate-200/90 dark:border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <h3 className="font-space font-bold text-xl text-slate-900 dark:text-white mb-2 pb-3 border-b border-slate-200 dark:border-slate-800">
                  Send a Message
                </h3>
                
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  Have a question or collaboration proposal? Send a direct message:
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
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue dark:focus:ring-sky-400 transition-all"
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
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue dark:focus:ring-sky-400 transition-all"
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
                      placeholder="Type your message or project requirements here..."
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue dark:focus:ring-sky-400 transition-all resize-none"
                    ></textarea>
                  </div>

                  {status.submitted && (
                    <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                      <span>Message sent successfully! Thank you.</span>
                    </div>
                  )}

                  {status.error && (
                    <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-600 dark:text-amber-400 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      <span>{status.error}</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status.submitting}
                    className="w-full py-3.5 px-6 rounded-xl font-space text-sm font-semibold bg-brand-blue text-white hover:bg-slate-900 dark:bg-sky-400 dark:text-slate-950 dark:hover:bg-sky-300 shadow-md transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    <Send className="w-4 h-4" />
                    {status.submitting ? 'Sending Message...' : 'Send Message'}
                  </button>
                </form>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
