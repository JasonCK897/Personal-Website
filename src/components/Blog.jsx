import React, { useState } from 'react';
import { blogPostsData } from '../data/portfolio';
import { BookOpen, Clock, Calendar, ArrowRight, X, Sparkles, Terminal } from 'lucide-react';

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Firmware & Embedded', 'Blockchain & Web3', 'IoT & Fullstack'];

  const filteredPosts = activeCategory === 'All' 
    ? blogPostsData 
    : blogPostsData.filter(p => p.category === activeCategory);

  return (
    <section id="blog" className="py-20 bg-cream-alt/40 dark:bg-navy-dark/40 transition-colors duration-200 border-t border-navy-primary/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Consistent Section Heading: Space Grotesk 500 */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="section-title">
              Engineering Notes &amp; Insights
            </h2>
            <p className="text-sm text-slateText-secondary dark:text-navy-textMuted mt-2 max-w-xl">
              Catatan riset, dokumentasi teknis firmware, dan arsitektur smart contract yang saya pelajari dan tulis secara berkala.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-space font-medium transition-all ${
                  activeCategory === cat
                    ? 'bg-navy-primary text-white dark:bg-navy-light dark:text-navy-dark shadow-sm'
                    : 'bg-white dark:bg-navy-dark text-slateText-secondary dark:text-navy-textMuted border border-navy-primary/15 dark:border-navy-light/15 hover:border-navy-primary/40'
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
              className="bg-white dark:bg-navy-dark rounded-2xl border border-navy-primary/15 dark:border-navy-light/20 p-6 flex flex-col justify-between hover:border-navy-primary dark:hover:border-navy-light hover:shadow-md transition-all duration-200 group"
            >
              <div>
                {/* Meta Header */}
                <div className="flex items-center justify-between gap-2 text-xs font-mono text-slateText-secondary dark:text-navy-textMuted mb-3">
                  <span className="px-2.5 py-0.5 rounded-md bg-cream-alt dark:bg-navy-deep text-navy-primary dark:text-navy-light border border-navy-primary/10 dark:border-navy-light/10 font-medium">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-navy-light" />
                    {post.readTime}
                  </span>
                </div>

                {/* Post Title */}
                <h3 className="font-space font-semibold text-lg text-navy-dark dark:text-cream group-hover:text-navy-primary dark:group-hover:text-navy-light transition-colors mb-3 leading-snug">
                  {post.title}
                </h3>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-slateText-secondary dark:text-navy-textMuted leading-relaxed mb-6">
                  {post.summary}
                </p>
              </div>

              {/* Bottom Meta & Read Button */}
              <div className="pt-4 border-t border-gray-100 dark:border-navy-primary/20 flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-xs text-gray-400 dark:text-gray-500 font-mono">
                  <Calendar className="w-3.5 h-3.5" />
                  {post.date}
                </span>

                <button
                  onClick={() => setSelectedPost(post)}
                  className="inline-flex items-center gap-1 text-xs font-space font-semibold text-navy-primary dark:text-navy-light hover:underline group-hover:translate-x-0.5 transition-transform"
                >
                  <span>Baca Catatan</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* Modal Reader for Full Blog Post */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-navy-dark/70 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white dark:bg-navy-dark border border-navy-primary/30 dark:border-navy-light/30 rounded-2xl max-w-3xl w-full max-h-[88vh] overflow-y-auto shadow-2xl p-6 sm:p-8 relative">
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedPost(null)}
              className="absolute top-5 right-5 p-2 rounded-xl text-gray-400 hover:text-navy-dark dark:hover:text-cream bg-cream/80 dark:bg-navy-deep transition-colors"
              aria-label="Tutup modal artikel"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Content Header */}
            <div className="pr-10 mb-6 pb-6 border-b border-gray-100 dark:border-navy-primary/20">
              <div className="flex items-center gap-3 text-xs font-mono text-slateText-secondary dark:text-navy-textMuted mb-2">
                <span className="px-2.5 py-0.5 rounded bg-navy-light/20 text-navy-primary dark:text-navy-light font-semibold">
                  {selectedPost.category}
                </span>
                <span>&bull;</span>
                <span>{selectedPost.date}</span>
                <span>&bull;</span>
                <span>{selectedPost.readTime}</span>
              </div>
              <h2 className="font-space font-bold text-2xl sm:text-3xl text-navy-dark dark:text-cream leading-tight">
                {selectedPost.title}
              </h2>
            </div>

            {/* Modal Body Article Content */}
            <div className="prose prose-slate dark:prose-invert max-w-none text-sm sm:text-base leading-relaxed space-y-4">
              {selectedPost.content.split('\n\n').map((paragraph, idx) => {
                if (paragraph.startsWith('### ')) {
                  return (
                    <h4 key={idx} className="font-space font-semibold text-lg text-navy-primary dark:text-navy-light mt-4 mb-2">
                      {paragraph.replace('### ', '')}
                    </h4>
                  );
                }
                if (paragraph.startsWith('```')) {
                  const cleanedCode = paragraph.replace(/```[a-z]*\n?/g, '');
                  return (
                    <pre key={idx} className="p-4 rounded-xl bg-navy-deep text-[#8FB8E0] font-mono text-xs overflow-x-auto border border-navy-light/20 my-3">
                      <code>{cleanedCode}</code>
                    </pre>
                  );
                }
                return (
                  <p key={idx} className="text-slateText-secondary dark:text-navy-textMuted">
                    {paragraph}
                  </p>
                );
              })}
            </div>

            {/* Modal Footer */}
            <div className="mt-8 pt-6 border-t border-gray-100 dark:border-navy-primary/20 flex justify-end">
              <button
                onClick={() => setSelectedPost(null)}
                className="px-5 py-2.5 rounded-xl font-space text-sm font-semibold bg-navy-primary text-white dark:bg-navy-light dark:text-navy-dark hover:opacity-90 transition-opacity"
              >
                Tutup Catatan
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
