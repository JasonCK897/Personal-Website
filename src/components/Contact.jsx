import React, { useState } from 'react';
import { contactData } from '../data/portfolio';
import { Mail, Linkedin, Github, Instagram, Send, CheckCircle2, AlertCircle, Copy, Check } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [copiedKey, setCopiedKey] = useState(null);

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null,
  });

  const handleCopy = (key, value) => {
    navigator.clipboard.writeText(value);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2500);
  };

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
          _subject: `Pesan Portofolio Baru dari ${formData.name}`,
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
      `Pesan dari ${formData.name}`
    )}&body=${encodeURIComponent(
      `Nama: ${formData.name}\nEmail: ${formData.email}\n\nPesan:\n${formData.message}`
    )}`;
    window.location.href = mailtoUrl;
    setStatus({ 
      submitting: false, 
      submitted: true, 
      error: 'Form dialihkan ke aplikasi email default Anda.' 
    });
  };

  const contactList = [
    {
      key: 'email',
      label: 'Email',
      value: contactData.email,
      icon: Mail,
    },
    {
      key: 'linkedin',
      label: 'LinkedIn',
      value: contactData.linkedinHandle,
      icon: Linkedin,
    },
    {
      key: 'github',
      label: 'GitHub',
      value: contactData.githubHandle,
      icon: Github,
    },
    {
      key: 'instagram',
      label: 'Instagram',
      value: contactData.instagramHandle,
      icon: Instagram,
    }
  ];

  return (
    /* Background netral terang (#EFEAE0) - JELAS BERBEDA dari footer Navy #1B2A4A */
    <section id="contact" className="py-20 bg-cream-alt dark:bg-navy-dark/70 transition-colors duration-200 border-t border-navy-primary/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Consistent Section Heading: Space Grotesk 500, no uppercase eyebrow */}
        <div className="mb-12">
          <h2 className="section-title">
            Contact
          </h2>
        </div>

        {/* Dua Box Terpisah Berdampingan dengan Border & Radius Seragam */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Box 1: Info Kontak (Menggunakan Placeholder Langsung Tanpa Menunjukkan Direct Link) */}
          <div className="bg-white dark:bg-navy-dark border border-navy-primary/20 dark:border-navy-light/20 rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col justify-between">
            <div>
              {/* Box Title: Seragam dengan Box 2 */}
              <h3 className="font-space font-medium text-xl text-navy-dark dark:text-cream tracking-normal mb-3 pb-3 border-b border-gray-100 dark:border-navy-primary/20">
                Info kontak
              </h3>
              
              <p className="text-sm text-slateText-secondary dark:text-navy-textMuted leading-relaxed mb-6">
                Terbuka untuk diskusi mengenai peluang riset, kolaborasi firmware/embedded systems, maupun proyek Web3. Silakan hubungi melalui kontak berikut:
              </p>

              {/* Daftar Info Kontak: Placeholder Langsung Tanpa Tautan Keluar Langsung (Bisa Disalin) */}
              <div className="space-y-3.5">
                {contactList.map((item) => {
                  const Icon = item.icon;
                  const isCopied = copiedKey === item.key;
                  return (
                    <div
                      key={item.key}
                      className="flex items-center justify-between p-3.5 rounded-xl bg-cream/60 dark:bg-navy-deep/60 border border-navy-primary/15 dark:border-navy-light/10 transition-colors"
                    >
                      <div className="flex items-center gap-3.5 min-w-0 pr-2">
                        <div className="p-2.5 rounded-lg bg-navy-primary/10 dark:bg-navy-primary/30 text-navy-primary dark:text-navy-light flex-shrink-0">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div className="min-w-0">
                          <div className="text-[11px] font-mono uppercase tracking-wider text-slateText-secondary dark:text-navy-textSubtle">
                            {item.label}
                          </div>
                          <div className="text-sm font-medium text-navy-dark dark:text-cream truncate font-mono select-all">
                            {item.value}
                          </div>
                        </div>
                      </div>

                      {/* Tombol Salin Cepat */}
                      <button
                        onClick={() => handleCopy(item.key, item.value)}
                        className={`p-2 rounded-lg text-xs font-mono flex items-center gap-1 transition-colors flex-shrink-0 ${
                          isCopied 
                            ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-semibold' 
                            : 'bg-white dark:bg-navy-dark text-slateText-secondary hover:text-navy-primary dark:text-navy-textMuted dark:hover:text-navy-light border border-gray-200 dark:border-navy-primary/30'
                        }`}
                        title="Salin ke clipboard"
                        aria-label={`Salin ${item.label}`}
                      >
                        {isCopied ? (
                          <>
                            <Check className="w-3.5 h-3.5" />
                            <span className="hidden sm:inline">Disalin</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span className="hidden sm:inline">Salin</span>
                          </>
                        )}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-100 dark:border-navy-primary/20 text-xs text-slateText-secondary dark:text-navy-textSubtle flex items-center justify-between">
              <span>Lokasi: Malang, Jawa Timur</span>
              <span className="font-mono">WIB (UTC+7)</span>
            </div>
          </div>

          {/* Box 2: Kirim Pesan */}
          <div className="bg-white dark:bg-navy-dark border border-navy-primary/20 dark:border-navy-light/20 rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col justify-between">
            <div>
              {/* Box Title: Seragam persis dengan Box 1 */}
              <h3 className="font-space font-medium text-xl text-navy-dark dark:text-cream tracking-normal mb-3 pb-3 border-b border-gray-100 dark:border-navy-primary/20">
                Kirim pesan
              </h3>
              
              <p className="text-sm text-slateText-secondary dark:text-navy-textMuted leading-relaxed mb-6">
                Kirimkan pesan langsung melalui formulir ini. Pesan akan otomatis diteruskan ke email resmi <span className="text-xs text-navy-primary dark:text-navy-light font-mono bg-cream-alt dark:bg-navy-deep px-1.5 py-0.5 rounded font-semibold">{contactData.email}</span>.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Nama */}
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-navy-dark dark:text-cream mb-1.5 font-space">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Masukkan nama Anda..."
                    className="w-full px-4 py-2.5 rounded-xl border border-navy-primary/20 dark:border-navy-light/20 bg-cream/30 dark:bg-navy-deep/60 text-slateText-primary dark:text-cream text-sm focus:outline-none focus:ring-2 focus:ring-navy-primary dark:focus:ring-navy-light transition-all"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-navy-dark dark:text-cream mb-1.5 font-space">
                    Alamat Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="nama@domain.com"
                    className="w-full px-4 py-2.5 rounded-xl border border-navy-primary/20 dark:border-navy-light/20 bg-cream/30 dark:bg-navy-deep/60 text-slateText-primary dark:text-cream text-sm focus:outline-none focus:ring-2 focus:ring-navy-primary dark:focus:ring-navy-light transition-all"
                  />
                </div>

                {/* Pesan */}
                <div>
                  <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-navy-dark dark:text-cream mb-1.5 font-space">
                    Pesan
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tuliskan pesan, pertanyaan, atau tawaran kolaborasi..."
                    className="w-full px-4 py-2.5 rounded-xl border border-navy-primary/20 dark:border-navy-light/20 bg-cream/30 dark:bg-navy-deep/60 text-slateText-primary dark:text-cream text-sm focus:outline-none focus:ring-2 focus:ring-navy-primary dark:focus:ring-navy-light transition-all resize-none"
                  ></textarea>
                </div>

                {/* Feedback Status Alert */}
                {status.submitted && (
                  <div className="p-3.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-700 text-emerald-800 dark:text-emerald-300 text-xs flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                    <span>Pesan berhasil dikirim! Saya akan segera merespons.</span>
                  </div>
                )}

                {status.error && (
                  <div className="p-3.5 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-700 text-amber-800 dark:text-amber-300 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    <span>{status.error}</span>
                  </div>
                )}

                {/* Tombol: "Kirim ke email saya" */}
                <button
                  type="submit"
                  disabled={status.submitting}
                  className="w-full py-3 px-6 rounded-xl font-space text-sm font-semibold bg-navy-primary text-white hover:bg-navy-primary/90 dark:bg-navy-light dark:text-navy-dark dark:hover:bg-navy-light/90 shadow-sm transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  {status.submitting ? 'Mengirim pesan...' : 'Kirim ke email saya'}
                </button>
              </form>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-100 dark:border-navy-primary/20 text-xs text-slateText-secondary dark:text-navy-textSubtle text-center">
              Pesan terenkripsi dan langsung diteruskan via Formspree.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
