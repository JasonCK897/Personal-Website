import React, { useState } from 'react';
import { blogPostsData } from '../data/portfolio';
import { Clock, Calendar, ArrowRight, X } from 'lucide-react';

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Firmware & Embedded', 'Blockchain & Web3', 'IoT & Fullstack'];

  const filteredPosts = activeCategory === 'All' 
    ? blogPostsData 
    : blogPostsData.filter(p => p.category === activeCategory);

  return (
    <section id="blog" className="py-20 bg-slate-900/30 dark:bg-cyber-surface/30 transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="text-xs font-mono font-semibold text-cyan-500 uppercase tracking-widest mb-1">
              // LOGBOOK
            </div>
            <h2 className="section-title">
              Engineering Notes
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-space font-medium transition-all ${
                  activeCategory === cat
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                    : 'bg-white dark:bg-cyber-card text-slate-600 dark:text-cyber-textMuted border border-slate-200 dark:border-cyber-border hover:border-cyan-400/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Post Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white dark:bg-cyber-card rounded-2xl border border-slate-200 dark:border-cyber-border p-6 flex flex-col justify-between hover:border-cyan-400 dark:hover:border-cyan-400/80 hover:shadow-lg transition-all duration-200 group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 text-[11px] font-mono text-slate-500 dark:text-cyber-textMuted mb-3">
                  <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-cyber-surface text-cyan-600 dark:text-cyan-400 border border-slate-200 dark:border-cyber-border/80 font-medium">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-cyan-500" />
                    {post.readTime}
                  </span>
                </div>

                <h3 className="font-space font-bold text-base sm:text-lg text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors mb-2 leading-snug">
                  {post.title}
                </h3>

                <p className="text-xs text-slate-600 dark:text-cyber-textMuted leading-relaxed mb-6">
                  {post.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-cyber-border flex items-center justify-between">
                <span className="flex items-center gap-1 text-[11px] text-slate-400 font-mono">
                  <Calendar className="w-3 h-3" />
                  {post.date}
                </span>

                <button
                  onClick={() => setSelectedPost(post)}
                  className="inline-flex items-center gap-1 text-xs font-space font-semibold text-cyan-600 dark:text-cyan-400 hover:underline group-hover:translate-x-0.5 transition-transform"
                >
                  <span>Baca Catatan</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* Modal Reader */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white dark:bg-cyber-card border border-slate-200 dark:border-cyber-border rounded-2xl max-w-3xl w-full max-h-[88vh] overflow-y-auto shadow-2xl p-6 sm:p-8 relative">
            
            <button
              onClick={() => setSelectedPost(null)}
              className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-cyber-surface transition-colors"
              aria-label="Tutup modal artikel"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="pr-10 mb-6 pb-4 border-b border-slate-100 dark:border-cyber-border">
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-500 mb-2">
                <span>{selectedPost.category}</span>
                <span>&bull;</span>
                <span>{selectedPost.date}</span>
                <span>&bull;</span>
                <span>{selectedPost.readTime}</span>
              </div>
              <h2 className="font-space font-bold text-xl sm:text-2xl text-slate-900 dark:text-white leading-tight">
                {selectedPost.title}
              </h2>
            </div>

            <div className="text-xs sm:text-sm leading-relaxed space-y-4 text-slate-700 dark:text-cyber-textMuted">
              {selectedPost.content.split('\n\n').map((paragraph, idx) => {
                if (paragraph.startsWith('### ')) {
                  return (
                    <h4 key={idx} className="font-space font-bold text-base text-cyan-600 dark:text-cyan-400 mt-4 mb-2">
                      {paragraph.replace('### ', '')}
                    </h4>
                  );
                }
                if (paragraph.startsWith('```')) {
                  const cleanedCode = paragraph.replace(/```[a-z]*\n?/g, '');
                  return (
                    <pre key={idx} className="p-4 rounded-xl bg-slate-950 text-cyan-300 font-mono text-xs overflow-x-auto border border-slate-800 my-3">
                      <code>{cleanedCode}</code>
                    </pre>
                  );
                }
                return (
                  <p key={idx}>
                    {paragraph}
                  </p>
                );
              })}
            </div>

            <div className="mt-8 pt-4 border-t border-slate-100 dark:border-cyber-border flex justify-end">
              <button
                onClick={() => setSelectedPost(null)}
                className="px-5 py-2 rounded-xl font-space text-xs font-semibold bg-cyan-500 text-slate-950 hover:bg-cyan-400 transition-colors"
              >
                Tutup
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
