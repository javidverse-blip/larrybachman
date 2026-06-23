import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Music, Star, Quote, ChevronDown } from 'lucide-react';
import PhotoPlaceholder from '../components/PhotoPlaceholder';
import VideoPlaceholder from '../components/VideoPlaceholder';

const featuredBooks = [
  {
    title: 'Where Are You?',
    subtitle: 'Your Guide to a Faith Filled Journey',
    description: '"Where Are You?" is the most significant question in the Bible. If God asked you that question today, what would you say?',
  },
  {
    title: 'Where Are You Going?',
    subtitle: "It's About Choice",
    description: 'A transformative journey exploring the profound impact of choice, faith, and the pursuit of a purposeful life.',
  },
  {
    title: 'Tourniquet',
    subtitle: "Visions From 'Tarin Row'",
    description: "G.T.O.'s life of promise meets heartache, redemption, faith, and forgiveness in this gripping story.",
  },
];

const pillars = [
  { icon: BookOpen, label: 'Author', desc: 'Faith-based books and stories that inspire reflection and growth.' },
  { icon: Music, label: 'Musician', desc: 'Over 20 years performing across the U.S. and Canada.' },
  { icon: Star, label: 'Publisher', desc: 'Weekly stories capturing the heart of rural community life.' },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-navy" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,168,67,0.08),transparent_60%)]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl">
              <p className="text-gold font-medium tracking-[0.25em] uppercase text-xs mb-6">
                Author · Musician · Businessman · Servant Leader
              </p>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold text-warm-white leading-[1.08] mb-6">
                Larry<br />
                <span className="text-gold">Bachman</span>
              </h1>
              <p className="text-lg sm:text-xl text-warm-white/55 leading-relaxed mb-8 max-w-xl">
                A life shaped by faith, music, and the open land. From the farms of Pennsylvania to the ranches of Texas — sharing stories that matter.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/about" className="btn-primary">
                  Discover His Story <ArrowRight size={16} />
                </Link>
                <Link to="/books" className="btn-outline">
                  Explore Books
                </Link>
              </div>
            </div>
            <div className="hidden lg:flex justify-center">
              <PhotoPlaceholder label="Larry Bachman Portrait" aspect="aspect-[3/4]" className="w-full max-w-md" />
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce">
          <div className="w-px h-8 bg-warm-white/20" />
          <ChevronDown size={16} className="text-gold/50" />
        </div>
      </section>

      {/* About preview */}
      <section className="section-padding bg-gradient-to-b from-navy to-navy-light">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div className="order-2 lg:order-1">
              <PhotoPlaceholder label="Larry Bachman" aspect="aspect-[4/3]" className="w-full" />
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-gold font-medium tracking-[0.2em] uppercase text-xs mb-3">About Larry</p>
              <h2 className="text-4xl font-serif font-bold text-warm-white mb-6 leading-tight">
                A Legacy Built on<br />Faith &amp; Story
              </h2>
              <p className="text-warm-white/50 leading-relaxed mb-4">
                Born in 1950 and raised on a humble farm in the heart of Pennsylvania, Larry Bachman's journey has been one of faith, music, storytelling, and a deep desire to leave a meaningful legacy.
              </p>
              <p className="text-warm-white/50 leading-relaxed mb-4">
                His union card in 1964 marked the start of a 20-year professional music career spanning the U.S. and Canada. A turning point in 1984 led him to publishing, where he discovered the power of storytelling.
              </p>
              <p className="text-warm-white/50 leading-relaxed mb-8">
                Today, Larry resides in Texas, writing books and sharing stories that uplift. All proceeds from his books go to ministry and service.
              </p>
              <Link to="/about" className="inline-flex items-center gap-2 text-gold font-medium hover:text-gold-light transition-colors group">
                Read His Full Story <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-24">
            {pillars.map(({ icon: Icon, label, desc }) => (
              <div key={label} className="text-center p-6 rounded-lg bg-navy-card/40 border border-gold/10">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gold/10 mb-4">
                  <Icon size={20} className="text-gold" />
                </div>
                <h3 className="font-serif font-semibold text-lg text-warm-white mb-2">{label}</h3>
                <p className="text-warm-white/40 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Books */}
      <section className="section-padding bg-navy">
        <div className="container-wide">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <p className="text-gold font-medium tracking-[0.2em] uppercase text-xs mb-2">Published Works</p>
              <h2 className="text-4xl font-serif font-bold text-warm-white">Featured Books</h2>
            </div>
            <Link to="/books" className="inline-flex items-center gap-2 text-gold font-medium hover:text-gold-light transition-colors group text-sm">
              View All Books <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {featuredBooks.map((book) => (
              <div key={book.title} className="group bg-navy-card/40 border border-gold/10 hover:border-gold/30 rounded-lg overflow-hidden transition-all duration-500 hover:-translate-y-1">
                <div className="aspect-[3/4] overflow-hidden bg-navy-card/60">
                  <PhotoPlaceholder label={`${book.title} Book Cover`} aspect="aspect-[3/4]" className="w-full h-full rounded-none border-0" />
                </div>
                <div className="p-6">
                  <h3 className="font-serif font-bold text-warm-white text-lg mb-1">{book.title}</h3>
                  <p className="text-gold text-xs font-medium uppercase tracking-wide mb-3">{book.subtitle}</p>
                  <p className="text-warm-white/40 text-sm leading-relaxed mb-4">{book.description}</p>
                  <Link to="/books" className="inline-flex items-center gap-1 text-gold hover:text-gold-light text-sm font-medium transition-colors group/link">
                    Learn More <ArrowRight size={13} className="transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Music Highlights */}
      <section className="section-padding bg-gradient-to-b from-navy-light to-navy">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="text-gold font-medium tracking-[0.2em] uppercase text-xs mb-3">Music</p>
              <h2 className="text-4xl font-serif font-bold text-warm-white mb-6 leading-tight">
                Songs of Faith<br />&amp; Promise
              </h2>
              <p className="text-warm-white/50 leading-relaxed mb-4">
                Larry's gospel songs "The Gift" and "The Promise" stand as testaments to how deeply faith and music became intertwined in his life. "The Promise" was featured in the movie <em>Sparrows Nesting</em>, premiered at Hollywood's iconic Grauman's Theatre.
              </p>
              <p className="text-warm-white/50 leading-relaxed mb-8">
                Let the soul-stirring lyrics and uplifting rhythm guide you to a place of spiritual reflection and connection.
              </p>
              <Link to="/media" className="btn-outline">
                Explore Music <ArrowRight size={16} />
              </Link>
            </div>
            <div>
              <VideoPlaceholder label="The Promise - Music Video" className="w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Television Feature */}
      <section className="section-padding bg-navy">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div className="order-2 lg:order-1">
              <VideoPlaceholder label="TV Appearance" className="w-full" />
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-gold font-medium tracking-[0.2em] uppercase text-xs mb-3">In the Spotlight</p>
              <h2 className="text-4xl font-serif font-bold text-warm-white mb-6 leading-tight">
                Nationally Syndicated<br />Television
              </h2>
              <p className="text-warm-white/50 leading-relaxed mb-8">
                Larry Bachman has stepped into the national spotlight with a legacy message that continues to inspire and challenge audiences across the country.
              </p>
              <Link to="/contact" className="btn-primary">
                Book Larry for Speaking <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-gradient-to-b from-navy to-navy-light">
        <div className="container-narrow text-center">
          <Quote size={40} className="text-gold/40 mx-auto mb-8" />
          <blockquote className="font-serif text-xl sm:text-2xl text-warm-white leading-relaxed mb-8 italic">
            "Larry Bachman is a man who understands the power of a story. His life experiences, from the music industry to publishing, have given him a rare perspective that few possess. His ability to capture the essence of real-life struggles and triumphs is a gift that brings hope and inspiration."
          </blockquote>
          <div className="flex flex-col items-center gap-1">
            <p className="text-gold font-semibold">TC Bradley</p>
            <p className="text-warm-white/40 text-sm">Nationally Syndicated Host</p>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative py-24 bg-navy overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,168,67,0.06),transparent_70%)]" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <p className="text-gold font-medium tracking-[0.2em] uppercase text-xs mb-4">Ranch Life · Faith · Music · Story</p>
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-warm-white mb-6 leading-tight">
            Explore Every Chapter<br />of Larry's Journey
          </h2>
          <p className="text-warm-white/40 leading-relaxed mb-8">
            From ranch sunsets in Texas to the stages of New York — every part of Larry's life holds a lesson worth discovering.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/about" className="btn-primary">
              Meet Larry <ArrowRight size={16} />
            </Link>
            <Link to="/contact" className="btn-outline">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
