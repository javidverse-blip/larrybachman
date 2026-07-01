import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, Music2, Youtube } from 'lucide-react';

const featuredBooks = [
  {
    title: 'Lady and Jesse',
    description: 'A heartfelt story of love, faith, and commitment—showing how trust, sacrifice, and hope can shape a life of purpose.',
    href: 'https://a.co/d/04w5pDKN',
    cover: '/6-lady-and-jesse-removebg-preview.webp',
  },
  {
    title: 'Tourniquet',
    description: 'A faith-centered story about pain, healing, forgiveness, and God’s power to bring hope through life’s deepest wounds.',
    href: 'https://a.co/d/0gqRW2th',
    cover: '/5-tourniquet-removebg-preview.webp',
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="home-hero">
        <div className="home-hero__glow" />
        <div className="home-hero__shelf" />

        <div className="home-hero__stage">
          <div className="home-hero__copy">
            <h1>
              YOUR STORY<br />
              <span>ISN'T OVER</span>
            </h1>
            <p>
              Falling down is not the end of your story. Your story isn't over.<br className="hidden sm:block" />
              The fall may be part of your story, but it does not have to<br className="hidden sm:block" />
              define your future.
            </p>
            <Link to="/about" className="btn-primary">
              Meet Larry <ArrowRight size={18} />
            </Link>
          </div>

          <div className="home-hero__portrait">
            <img src="/larry-b.png" alt="Larry Bachman" />
          </div>

          <img
            src="/all-books.png"
            alt="Larry B. Bachman's complete book collection"
            className="home-hero__books"
          />
        </div>
      </section>

      {/* About Larry preview */}
      <section className="section-padding bg-navy">
        <div className="container-wide grid grid-cols-1 items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          <div className="relative mx-auto w-full max-w-[480px]">
            <div className="absolute -left-3 -top-3 h-20 w-20 border-l-2 border-t-2 border-gold/55" />
            <img src="/larry-office.webp" alt="Larry Bachman in his office" width="1080" height="1080" loading="lazy" decoding="async" className="relative aspect-[4/5] w-full rounded-lg object-cover shadow-xl shadow-black/25" />
            <div className="absolute -bottom-3 -right-3 h-20 w-20 border-b-2 border-r-2 border-gold/55" />
          </div>
          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-gold">Meet Larry</p>
            <h2 className="mb-6 font-serif text-3xl font-bold leading-tight text-warm-white sm:text-4xl">Author | Speaker</h2>
            <div className="space-y-4 leading-relaxed text-warm-white/70">
              <p>Some people write stories.</p>
              <p className="font-serif text-xl font-semibold text-gold-light">Larry B. Bachman has lived them.</p>
              <p>From a quiet Pennsylvania farm to concert stages, from publishing to filmmaking, from seasons of success to moments of heartbreak, every chapter has revealed one unchanging truth:</p>
              <div className="my-5 border-l-4 border-gold bg-gold/10 p-5 font-serif text-xl font-semibold leading-snug text-warm-white">
                God is never finished writing your story.
              </div>
              <p>For decades, Larry has used his gifts to encourage others through books, music, films, and speaking ministry—always pointing people toward the hope found in Jesus Christ.</p>
            </div>
            <Link to="/about" className="btn-primary mt-8">Read More About Larry <ArrowRight size={18} /></Link>
          </div>
        </div>
      </section>

      {/* Featured Books */}
      <section className="section-padding border-y border-navy/15 bg-[#b8b6b1]">
        <div className="container-wide">
          <div className="mb-10 text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-navy/65">Selected Works</p>
            <h2 className="font-serif text-3xl font-bold text-navy sm:text-4xl">Featured Books</h2>
          </div>
          <div className="mx-auto grid w-full max-w-[860px] grid-cols-1 gap-7 md:grid-cols-2">
            {featuredBooks.map((book) => (
              <article key={book.title} className="group flex h-full flex-col rounded-xl border border-gold/25 bg-navy-card/55 p-5 shadow-xl shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 sm:p-6">
                <div className="flex h-[320px] items-center justify-center rounded-lg bg-[#1b1207] p-5">
                  <img src={book.cover} alt={`${book.title} book cover`} loading="lazy" decoding="async" className="h-full w-full object-contain drop-shadow-[0_12px_12px_rgba(0,0,0,0.35)] transition-transform duration-500 group-hover:scale-[1.02]" />
                </div>
                <div className="flex flex-1 flex-col pt-5">
                  <h3 className="mb-3 font-serif text-2xl font-bold leading-snug text-warm-white">{book.title}</h3>
                  <p className="mb-6 flex-1 text-base leading-relaxed text-warm-white/70">{book.description}</p>
                  <a href={book.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 self-start rounded-sm bg-gold px-5 py-3 text-base font-semibold text-navy transition-colors hover:bg-gold-light">
                    Get a Copy <ExternalLink size={16} />
                  </a>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/books" className="inline-flex items-center gap-2 font-semibold text-navy transition-colors hover:text-[#6b451b]">Browse All Books <ArrowRight size={17} /></Link>
          </div>
        </div>
      </section>

      {/* Music Spotlight */}
      <section className="section-padding bg-navy">
        <div className="container-wide">
          <div className="mb-12 max-w-2xl">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-gold">Listen</p>
            <h2 className="font-serif text-4xl font-bold text-warm-white">Music Spotlight</h2>
          </div>
          <article className="grid grid-cols-1 overflow-hidden rounded-2xl border border-gold/20 bg-navy-card/55 shadow-xl shadow-black/20 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
              <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-full border border-gold/30 bg-gold/10"><Music2 size={20} className="text-gold" /></div>
              <h3 className="mb-4 font-serif text-3xl font-bold text-warm-white">The Promise</h3>
              <p className="mb-7 leading-relaxed text-warm-white/65">“The Promise” is one of Larry B. Bachman’s signature songs. Written from a deeply personal journey of friendship, loss, and unwavering faith, it stands as a testimony to God’s promises and His faithfulness through every season of life.</p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link to="/music" className="btn-primary">Explore the Music <ArrowRight size={18} /></Link>
                <a href="https://www.youtube.com/@Larrybbachman" target="_blank" rel="noopener noreferrer" className="btn-outline"><Youtube size={18} /> YouTube</a>
              </div>
            </div>
            <div className="min-h-[240px] bg-navy-card/70 p-4 sm:p-6">
              <div className="relative aspect-video h-full min-h-[220px] w-full overflow-hidden rounded-xl border border-gold/20">
                <iframe
                  src="https://www.youtube.com/embed/9bLcky2KZYQ"
                  title="The Promise by Larry B. Bachman"
                  loading="lazy"
                  className="absolute inset-0 h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Media Preview */}
      <section className="section-padding bg-[#b8b6b1]">
        <div className="container-wide">
          <article className="grid grid-cols-1 overflow-hidden rounded-2xl border border-gold/20 bg-navy-card/55 shadow-xl shadow-black/20 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
              <h3 className="mb-4 font-serif text-3xl font-bold text-warm-white">Nationally Syndicated Television Appearance</h3>
              <p className="mb-7 leading-relaxed text-warm-white/65">Explore television appearances, Hollywood moments, interviews, and media recognition from Larry B. Bachman’s journey.</p>
              <Link to="/media" className="btn-primary self-start">Explore Media <ArrowRight size={18} /></Link>
            </div>
            <div className="min-h-[240px] bg-navy-card/70 p-4 sm:p-6">
              <div className="relative aspect-video h-full min-h-[220px] w-full overflow-hidden rounded-xl border border-gold/20">
                <img src="/tc-bradley-larry.webp" alt="TC Bradley with Larry Bachman" width="702" height="603" loading="lazy" decoding="async" className="h-full w-full object-cover" />
              </div>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}
