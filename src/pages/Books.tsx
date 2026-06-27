import { useState } from 'react';
import { ArrowRight, Star, ExternalLink } from 'lucide-react';
import PhotoPlaceholder from '../components/PhotoPlaceholder';

const books = [
  {
    title: 'Where Are You?',
    subtitle: 'Your Guide to a Faith Filled Journey',
    description: 'Did you know that "Where Are You?" is the most significant question in the Bible? If God asked you that question, what would you say? When God asked Adam that question, He was also wondering where Adam was in his faith. This book invites you on a profound journey of self-examination and spiritual discovery.',
    tag: 'Faith & Spirituality',
    featured: true,
    reviews: [
      { author: 'Sarah M.', text: 'A powerful reminder to pause and examine where we truly are in our walk with God.' },
    ],
  },
  {
    title: 'Where Are You Going?',
    subtitle: "It's About Choice",
    description: "Larry's newest journey grapples with the challenges of adolescence, peer pressure, and the profound impact of decisions. This compelling narrative weaves together the experiences of young people navigating friendship, relationships, and choices grounded in biblical guidance.",
    tag: 'Faith & Coming of Age',
    featured: true,
    reviews: [
      { author: 'James T.', text: 'A must-read for anyone navigating life\'s crossroads. Larry\'s wisdom shines through.' },
    ],
  },
  {
    title: "Tourniquet: Visions From 'Tarin Row'",
    subtitle: 'A Story of Heartache, Redemption & Faith',
    description: "G.T.O. — George Taylor Owens — was a bright aspiring athlete with strong family ties and a spiritual upbringing. Life seemed to have no end for a young man filled with promise. But life has twists and turns, and the next breath is never guaranteed.",
    tag: 'Fiction & Inspiration',
    featured: true,
    reviews: [
      { author: 'Rebecca L.', text: 'Heartbreaking and hopeful in equal measure. A story that stays with you.' },
    ],
  },
  {
    title: 'Living a Prosperous Life',
    subtitle: 'Walking in the Light of Grace',
    description: "Centered on The Lord's Prayer stanzas and the great controversy between good and evil, this book helps readers learn about the history of Christianity and the hope found in Jesus — and how to live a prosperous, joy-filled life on earth.",
    tag: 'Christian Living',
    featured: false,
    reviews: [],
  },
  {
    title: 'Reuben versus Meyer',
    subtitle: 'Real-Life Lessons',
    description: "As life spins around us we can never know what lay just around the bend. We plan, we predict, we live in the here and now. Suddenly everything changes. Read these real-life lessons. Place yourself into the story. Where would you stand?",
    tag: 'Life & Wisdom',
    featured: false,
    reviews: [],
  },
  {
    title: 'Lady and Jesse Make a Promise',
    subtitle: 'Love, Faith, Lost and Found',
    description: "A heartfelt story of love, faith, and redemption. It follows Lady, a spirited young musician, and Jesse, a boy scarred by family struggles, as their unlikely friendship blossoms under an old oak tree. Through shared dreams they discover hope, forgiveness, and grace.",
    tag: 'Inspirational Fiction',
    featured: false,
    reviews: [],
  },
  {
    title: '¿Dónde estás?',
    subtitle: 'Edición en Español',
    description: 'The Spanish-language edition of "Where Are You?" — bringing the message of faith to a wider audience.',
    tag: 'Faith & Spirituality',
    featured: false,
    reviews: [],
  },
];

export default function Books() {
  const [expandedBook, setExpandedBook] = useState<string | null>(null);
  const featured = books.filter((b) => b.featured);
  const rest = books.filter((b) => !b.featured);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative pt-28 pb-16 sm:pt-32 sm:pb-20 bg-gradient-to-br from-navy via-navy-light to-navy border-b border-gold/10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,168,67,0.08),transparent_60%)]" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold font-medium tracking-[0.2em] uppercase text-xs mb-3">Published Works</p>
          <h1 className="text-4xl sm:text-6xl font-serif font-bold text-warm-white mb-6">Books</h1>
          <p className="text-warm-white/60 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Stories of faith, choice, redemption, and the quiet grace woven through everyday life.
          </p>
        </div>
      </section>

      {/* Proceeds Banner */}
      <div className="bg-gold text-navy py-3 px-4 text-center">
        <p className="text-sm font-medium">All proceeds from Larry's books go directly to ministry and service.</p>
      </div>

      {/* Featured Books */}
      <section className="section-padding bg-gold">
        <div className="container-wide">
          <p className="text-navy/70 font-medium tracking-[0.2em] uppercase text-xs mb-2">Featured Releases</p>
          <h2 className="text-3xl font-serif font-bold text-navy mb-10">Latest &amp; Most Popular</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16 sm:mb-20">
            {featured.map((book) => (
              <div key={book.title} className="group bg-navy-card/60 border border-gold/20 hover:border-gold/40 rounded-lg overflow-hidden transition-all duration-500 hover:-translate-y-1">
                <div className="aspect-[3/4] overflow-hidden bg-navy-card/60">
                  <PhotoPlaceholder label={`${book.title} Book Cover`} aspect="aspect-[3/4]" className="w-full h-full rounded-none border-0" />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <span className="inline-block text-xs font-medium text-gold bg-gold/10 border border-gold/20 px-2 py-0.5 rounded-sm mb-3 self-start">
                    {book.tag}
                  </span>
                  <h3 className="font-serif font-bold text-warm-white text-lg mb-1 leading-snug">{book.title}</h3>
                  <p className="text-gold text-xs font-medium uppercase tracking-wide mb-3">{book.subtitle}</p>
                  <p className="text-warm-white/60 text-sm leading-relaxed flex-1">{book.description}</p>
                  {book.reviews.length > 0 && (
                    <div className="mt-4 pt-4 border-t border-gold/10">
                      <div className="flex items-center gap-1 mb-1">
                        <Star size={12} className="text-gold" />
                        <p className="text-warm-white/50 text-xs italic">"{book.reviews[0].text}"</p>
                      </div>
                      <p className="text-warm-white/30 text-xs">— {book.reviews[0].author}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* More Books */}
          <div className="border-t border-navy/20 pt-16">
            <p className="text-navy/70 font-medium tracking-[0.2em] uppercase text-xs mb-2">More Titles</p>
            <h2 className="text-3xl font-serif font-bold text-navy mb-10">Complete Collection</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {rest.map((book) => (
                <div
                  key={book.title}
                  className="group bg-navy-card/60 border border-gold/20 hover:border-gold/40 rounded-lg overflow-hidden transition-all duration-500 hover:-translate-y-1 cursor-pointer"
                  onClick={() => setExpandedBook(expandedBook === book.title ? null : book.title)}
                >
                  <div className="aspect-[3/4] overflow-hidden bg-navy-card/60">
                    <PhotoPlaceholder label={`${book.title} Book Cover`} aspect="aspect-[3/4]" className="w-full h-full rounded-none border-0" />
                  </div>
                  <div className="p-5">
                    <span className="inline-block text-xs font-medium text-gold bg-gold/10 border border-gold/20 px-2 py-0.5 rounded-sm mb-3">
                      {book.tag}
                    </span>
                    <h3 className="font-serif font-bold text-warm-white text-base mb-1 leading-snug">{book.title}</h3>
                    <p className="text-gold text-xs font-medium uppercase tracking-wide mb-3">{book.subtitle}</p>
                    <p className={`text-warm-white/60 text-sm leading-relaxed transition-all ${expandedBook === book.title ? '' : 'line-clamp-3'}`}>
                      {book.description}
                    </p>
                    <div className="mt-4 pt-4 border-t border-gold/10">
                      <span className="inline-flex items-center gap-1 text-gold hover:text-gold-light text-sm font-medium transition-colors">
                        {expandedBook === book.title ? 'Show Less' : 'Learn More'} <ArrowRight size={13} />
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Music Section */}
      <section className="section-padding bg-navy-light border-y border-gold/10">
        <div className="container-wide text-center">
          <p className="text-gold font-medium tracking-[0.2em] uppercase text-xs mb-3">Beyond the Page</p>
          <h2 className="text-3xl font-serif font-bold text-warm-white mb-4">Gospel Music by Larry</h2>
          <p className="text-warm-white/60 leading-relaxed max-w-2xl mx-auto mb-8">
            Alongside his books, Larry has written and released gospel music including "The Gift" and "The Promise." "The Promise" was featured in the film <em>Sparrows Nesting</em>, premiered at Hollywood's Grauman's Theatre.
          </p>
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            Listen on YouTube <ExternalLink size={14} />
          </a>
        </div>
      </section>
    </div>
  );
}
