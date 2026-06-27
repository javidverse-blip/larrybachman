import { useState } from 'react';
import { ArrowRight, X, ChevronLeft, ChevronRight, Sun, Leaf, Heart } from 'lucide-react';

type Tab = 'articles' | 'ranch' | 'gallery';

// ─── Articles data ───────────────────────────────────────────────
const articles = [
  {
    id: 1,
    title: 'Living a Prosperous Life: Walking in the Light of Grace',
    excerpt: "Centered on The Lord's Prayer, this reflection explores how we can live a joy-filled life here on earth through faith and grace.",
    image: 'https://images.pexels.com/photos/208271/pexels-photo-208271.jpeg?auto=compress&cs=tinysrgb&w=800',
    date: 'March 2025',
    category: 'Faith & Spirituality',
    featured: true,
  },
  {
    id: 2,
    title: "Now Available: Where Are You Going? It's About Choice",
    excerpt: "Join Larry on his newest journey as he grapples with adolescence, peer pressure, and the profound impact of decisions grounded in biblical guidance.",
    image: 'https://images.pexels.com/photos/1261180/pexels-photo-1261180.jpeg?auto=compress&cs=tinysrgb&w=800',
    date: 'February 2025',
    category: 'Books & Publishing',
    featured: true,
  },
  {
    id: 3,
    title: "Larry Bachman's Inspirational Journey — Snyder County Times",
    excerpt: "Discover how a farm boy from Pennsylvania became a published author, musician, and man of deep faith living on a Texas ranch.",
    image: 'https://images.pexels.com/photos/159866/books-book-pages-read-literature-159866.jpeg?auto=compress&cs=tinysrgb&w=800',
    date: 'January 2025',
    category: 'Press & Media',
    featured: false,
  },
  {
    id: 4,
    title: "Hollywood Premiere: The Promise Featured in Sparrows Nesting",
    excerpt: "Larry and his daughter Sheinny attended the premiere at Grauman's Theatre. His gospel song 'The Promise' promoted the film worldwide.",
    image: 'https://images.pexels.com/photos/436413/pexels-photo-436413.jpeg?auto=compress&cs=tinysrgb&w=800',
    date: 'December 2024',
    category: 'Events & Music',
    featured: false,
  },
  {
    id: 5,
    title: "Tourniquet: A New Story of Heartache, Faith, and Redemption",
    excerpt: "Follow G.T.O. — a young man filled with promise whose life takes unexpected turns, leading to a story of faith, forgiveness, and second chances.",
    image: 'https://images.pexels.com/photos/2228559/pexels-photo-2228559.jpeg?auto=compress&cs=tinysrgb&w=800',
    date: 'November 2024',
    category: 'Books & Publishing',
    featured: false,
  },
  {
    id: 6,
    title: 'Everyone Has a Story Worth Telling',
    excerpt: "Larry reflects on publishing weekly 'chicken soup' stories: 'I found great joy in capturing the struggles, triumphs, and the ever-present need for love, faith, and hope in ordinary communities.'",
    image: 'https://images.pexels.com/photos/3760514/pexels-photo-3760514.jpeg?auto=compress&cs=tinysrgb&w=800',
    date: 'October 2024',
    category: 'Reflections',
    featured: false,
  },
];

// ─── Ranch data ───────────────────────────────────────────────────
const ranchStories = [
  {
    title: 'Where the Sky Meets the Land',
    date: 'Spring 2025',
    excerpt: "There's a particular stillness on a Texas morning that I've never found anywhere else. Before the sun crests the horizon, the world holds its breath — and in that quiet, God seems closer than anywhere else I've ever stood.",
    image: 'https://images.pexels.com/photos/2356045/pexels-photo-2356045.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Lessons from the Animals',
    date: 'Winter 2024',
    excerpt: "Ranch animals have a way of teaching you things no classroom can. Patience, presence, the acceptance of what is. They ask for nothing except care and consistency — and in return they give you a kind of peace that is genuinely hard to describe.",
    image: 'https://images.pexels.com/photos/1145434/pexels-photo-1145434.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'From Pennsylvania Fields to Texas Plains',
    date: 'Fall 2024',
    excerpt: "I grew up on a farm in rural Pennsylvania. I thought I knew what land meant. Texas showed me that I'd only seen one chapter. The scale here — the open horizon, the enormous sky — makes you feel both very small and very free.",
    image: 'https://images.pexels.com/photos/325807/pexels-photo-325807.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

const ranchValues = [
  { icon: Sun, title: 'Simplicity', desc: 'Ranch life strips away the unnecessary and returns you to what is real, true, and lasting.' },
  { icon: Leaf, title: 'Stewardship', desc: 'Taking care of the land and the animals is itself a form of prayer — a daily act of gratitude.' },
  { icon: Heart, title: 'Rootedness', desc: "The ranch has given Larry the same grounding his Pennsylvania farm gave him as a boy." },
];

// ─── Gallery data ─────────────────────────────────────────────────
const galleryImages = [
  { src: 'https://images.pexels.com/photos/2356045/pexels-photo-2356045.jpeg?auto=compress&cs=tinysrgb&w=1200', thumb: 'https://images.pexels.com/photos/2356045/pexels-photo-2356045.jpeg?auto=compress&cs=tinysrgb&w=600', caption: 'Texas Sunrise', category: 'Ranch Life' },
  { src: 'https://images.pexels.com/photos/1145434/pexels-photo-1145434.jpeg?auto=compress&cs=tinysrgb&w=1200', thumb: 'https://images.pexels.com/photos/1145434/pexels-photo-1145434.jpeg?auto=compress&cs=tinysrgb&w=600', caption: 'Ranch Morning', category: 'Ranch Life' },
  { src: 'https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?auto=compress&cs=tinysrgb&w=1200', thumb: 'https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?auto=compress&cs=tinysrgb&w=600', caption: 'Open Plains', category: 'Ranch Life' },
  { src: 'https://images.pexels.com/photos/325807/pexels-photo-325807.jpeg?auto=compress&cs=tinysrgb&w=1200', thumb: 'https://images.pexels.com/photos/325807/pexels-photo-325807.jpeg?auto=compress&cs=tinysrgb&w=600', caption: 'Golden Horizon', category: 'Ranch Life' },
  { src: 'https://images.pexels.com/photos/1021876/pexels-photo-1021876.jpeg?auto=compress&cs=tinysrgb&w=1200', thumb: 'https://images.pexels.com/photos/1021876/pexels-photo-1021876.jpeg?auto=compress&cs=tinysrgb&w=600', caption: 'Music — A Lifelong Passion', category: 'Music' },
  { src: 'https://images.pexels.com/photos/208271/pexels-photo-208271.jpeg?auto=compress&cs=tinysrgb&w=1200', thumb: 'https://images.pexels.com/photos/208271/pexels-photo-208271.jpeg?auto=compress&cs=tinysrgb&w=600', caption: 'The Church of His Childhood', category: 'Faith' },
  { src: 'https://images.pexels.com/photos/1261180/pexels-photo-1261180.jpeg?auto=compress&cs=tinysrgb&w=1200', thumb: 'https://images.pexels.com/photos/1261180/pexels-photo-1261180.jpeg?auto=compress&cs=tinysrgb&w=600', caption: 'Stories Worth Telling', category: 'Books' },
  { src: 'https://images.pexels.com/photos/436413/pexels-photo-436413.jpeg?auto=compress&cs=tinysrgb&w=1200', thumb: 'https://images.pexels.com/photos/436413/pexels-photo-436413.jpeg?auto=compress&cs=tinysrgb&w=600', caption: 'Hollywood Premiere Night', category: 'Events' },
  { src: 'https://images.pexels.com/photos/235725/pexels-photo-235725.jpeg?auto=compress&cs=tinysrgb&w=1200', thumb: 'https://images.pexels.com/photos/235725/pexels-photo-235725.jpeg?auto=compress&cs=tinysrgb&w=600', caption: 'Pennsylvania Farmland — Where It All Began', category: 'Heritage' },
  { src: 'https://images.pexels.com/photos/3760514/pexels-photo-3760514.jpeg?auto=compress&cs=tinysrgb&w=1200', thumb: 'https://images.pexels.com/photos/3760514/pexels-photo-3760514.jpeg?auto=compress&cs=tinysrgb&w=600', caption: 'The Writing Life', category: 'Books' },
  { src: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=1200', thumb: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=600', caption: 'A Library of Faith', category: 'Books' },
  { src: 'https://images.pexels.com/photos/159866/books-book-pages-read-literature-159866.jpeg?auto=compress&cs=tinysrgb&w=1200', thumb: 'https://images.pexels.com/photos/159866/books-book-pages-read-literature-159866.jpeg?auto=compress&cs=tinysrgb&w=600', caption: 'Words That Endure', category: 'Books' },
];

const tabs: { id: Tab; label: string }[] = [
  { id: 'articles', label: 'Articles' },
  { id: 'ranch', label: 'Ranch Life' },
  { id: 'gallery', label: 'Gallery' },
];

// ─── Component ────────────────────────────────────────────────────
export default function LifeAndStories() {
  const [activeTab, setActiveTab] = useState<Tab>('articles');
  const [lightbox, setLightbox] = useState<number | null>(null);

  const prev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLightbox((i) => (i !== null ? (i - 1 + galleryImages.length) % galleryImages.length : null));
  };
  const next = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLightbox((i) => (i !== null ? (i + 1) % galleryImages.length : null));
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section
        className="relative pt-28 pb-16 sm:pt-32 sm:pb-20 bg-cover bg-center border-b border-gold/10"
        style={{ backgroundImage: 'url(https://images.pexels.com/photos/2356045/pexels-photo-2356045.jpeg?auto=compress&cs=tinysrgb&w=1600)' }}
      >
        <div className="absolute inset-0 bg-navy/85" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold font-medium tracking-widest uppercase text-xs mb-3">Stories · Land · Life</p>
          <h1 className="text-4xl sm:text-6xl font-serif font-bold text-warm-white mb-6">Life &amp; Stories</h1>
          <p className="text-warm-white/60 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Articles, ranch reflections, and photographs from Larry's life on the land and beyond.
          </p>
        </div>
      </section>

      {/* Sticky Tab Bar */}
      <div className="bg-navy-card/90 border-b border-gold/20 sticky top-16 md:top-20 z-30 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-0">
            {tabs.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`px-6 py-4 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
                  activeTab === id
                    ? 'border-gold text-gold'
                    : 'border-transparent text-warm-white/50 hover:text-gold hover:border-gold/30'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── ARTICLES TAB ── */}
      {activeTab === 'articles' && (
        <div className="bg-gold">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
          {/* Featured */}
          <p className="text-navy/70 font-medium tracking-widest uppercase text-xs mb-2">Featured</p>
          <h2 className="text-3xl font-serif font-bold text-navy mb-8">Latest Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
            {articles.filter((a) => a.featured).map((a) => (
              <div key={a.id} className="group bg-navy-card/60 border border-gold/20 hover:border-gold/40 transition-all duration-300 hover:-translate-y-0.5 flex flex-col rounded-lg overflow-hidden">
                <div className="overflow-hidden">
                  <img src={a.image} alt={a.title} className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-medium text-gold bg-gold/10 border border-gold/20 px-2 py-0.5 rounded-sm">{a.category}</span>
                    <span className="text-xs text-warm-white/40">{a.date}</span>
                  </div>
                  <h3 className="font-serif font-bold text-warm-white text-xl mb-3 leading-snug">{a.title}</h3>
                  <p className="text-warm-white/60 text-sm leading-relaxed flex-1">{a.excerpt}</p>
                  <div className="mt-5 pt-4 border-t border-gold/10">
                    <span className="inline-flex items-center gap-1 text-gold hover:text-gold-light text-sm font-medium cursor-pointer group/link">
                      Read More <ArrowRight size={13} className="transition-transform group-hover/link:translate-x-1" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-gold/20 pt-12">
            <h2 className="text-2xl font-serif font-bold text-navy mb-8">More Articles</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.filter((a) => !a.featured).map((a) => (
                <div key={a.id} className="group bg-navy-card/60 border border-gold/20 hover:border-gold/40 transition-all duration-300 hover:-translate-y-0.5 flex flex-col rounded-lg overflow-hidden">
                  <div className="overflow-hidden">
                    <img src={a.image} alt={a.title} className="w-full h-44 object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-medium text-gold bg-gold/10 border border-gold/20 px-2 py-0.5 rounded-sm">{a.category}</span>
                      <span className="text-xs text-warm-white/40">{a.date}</span>
                    </div>
                    <h3 className="font-serif font-bold text-warm-white text-base mb-2 leading-snug">{a.title}</h3>
                    <p className="text-warm-white/60 text-sm leading-relaxed flex-1 line-clamp-3">{a.excerpt}</p>
                    <div className="mt-4 pt-3 border-t border-gold/10">
                      <span className="inline-flex items-center gap-1 text-gold hover:text-gold-light text-sm font-medium cursor-pointer group/link">
                        Read More <ArrowRight size={12} className="transition-transform group-hover/link:translate-x-1" />
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        </div>
      )}

      {/* ── RANCH LIFE TAB ── */}
      {activeTab === 'ranch' && (
        <div>
          <div className="bg-navy py-14 sm:py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <p className="text-gold font-medium tracking-widest uppercase text-xs mb-3">Life on the Land</p>
              <h2 className="text-3xl font-serif font-bold text-warm-white mb-6">The Texas Ranch</h2>
              <p className="text-warm-white/60 leading-relaxed mb-4">
                After decades of music tours, city stages, and the bustle of the publishing world, Larry Bachman found his deepest peace on a ranch in Texas. It's where he writes, reflects, and reconnects with the values that have always guided him.
              </p>
              <p className="text-warm-white/60 leading-relaxed">
                The land demands honesty. Animals require presence. Every sunrise is a reminder that life is both fragile and generous, and that gratitude is the most honest response to all of it.
              </p>
            </div>
          </div>

          <div className="bg-gold py-14 sm:py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {ranchValues.map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-navy/10 border border-navy/20 mb-4">
                      <Icon size={20} className="text-navy" />
                    </div>
                    <h3 className="font-serif font-bold text-navy text-xl mb-3">{title}</h3>
                    <p className="text-navy/75 text-sm leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 bg-navy">
            <p className="text-gold font-medium tracking-widest uppercase text-xs mb-2">Stories from the Ranch</p>
            <h2 className="text-3xl font-serif font-bold text-warm-white mb-12">Life on the Land</h2>
            <div className="space-y-16">
              {ranchStories.map((story, i) => (
                <div key={story.title} className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                  <div className={`relative ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <img src={story.image} alt={story.title} className="w-full h-72 object-cover shadow-lg" />
                    <div className="absolute -bottom-3 -right-3 w-20 h-20 border-2 border-gold hidden md:block" />
                  </div>
                  <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                    <p className="text-gold text-xs font-medium uppercase tracking-wide mb-2">{story.date}</p>
                    <h3 className="font-serif font-bold text-warm-white text-2xl mb-4">{story.title}</h3>
                    <p className="text-warm-white/60 leading-relaxed italic text-lg">"{story.excerpt}"</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative py-20">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: 'url(https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?auto=compress&cs=tinysrgb&w=1600)' }}
            />
            <div className="absolute inset-0 bg-navy/75" />
            <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
              <p className="font-serif text-2xl sm:text-3xl text-warm-white italic leading-relaxed mb-6">
                "The ranch has taught me that a man who tends the land and cares for animals is not far from understanding what God asks of all of us."
              </p>
              <p className="text-gold font-medium">— Larry Bachman</p>
            </div>
          </div>
        </div>
      )}

      {/* ── GALLERY TAB ── */}
      {activeTab === 'gallery' && (
        <div className="bg-gold">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {galleryImages.map((img, idx) => (
              <div
                key={img.src + idx}
                className="break-inside-avoid group cursor-pointer relative overflow-hidden bg-navy-card border border-gold/10 rounded-lg"
                onClick={() => setLightbox(idx)}
              >
                <img
                  src={img.thumb}
                  alt={img.caption}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/60 transition-all duration-300 flex items-end p-4">
                  <div className="translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="text-xs font-medium text-gold uppercase tracking-wide block mb-0.5">{img.category}</span>
                    <p className="text-warm-white font-serif font-semibold text-sm">{img.caption}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        </div>
      )}

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-navy/95 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button className="absolute top-4 right-4 text-warm-white/70 hover:text-gold transition-colors z-10 p-2" onClick={() => setLightbox(null)} aria-label="Close">
            <X size={28} />
          </button>
          <button className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 text-warm-white/70 hover:text-gold transition-colors z-10 p-2" onClick={prev} aria-label="Previous">
            <ChevronLeft size={36} />
          </button>
          <button className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 text-warm-white/70 hover:text-gold transition-colors z-10 p-2" onClick={next} aria-label="Next">
            <ChevronRight size={36} />
          </button>
          <div className="max-w-4xl w-full mx-auto" onClick={(e) => e.stopPropagation()}>
            <img src={galleryImages[lightbox].src} alt={galleryImages[lightbox].caption} className="w-full max-h-[80vh] object-contain" />
            <div className="text-center mt-4">
              <span className="text-gold text-xs uppercase tracking-widest font-medium block mb-1">{galleryImages[lightbox].category}</span>
              <p className="text-warm-white font-serif text-lg">{galleryImages[lightbox].caption}</p>
              <p className="text-warm-white/40 text-xs mt-2">{lightbox + 1} / {galleryImages.length}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
