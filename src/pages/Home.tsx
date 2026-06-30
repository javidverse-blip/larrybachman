import { Link } from 'react-router-dom';
import { ArrowRight, Quote } from 'lucide-react';

const featuredBooks = [
  {
    title: 'Where Are You?',
    subtitle: 'About the Book',
    description: 'Did you know that "Where Are You?" is the most significant question in the Bible? If God asked you that question, what would you say? You of course would say, "Here Am I". Also, he would be asking about our faith. I have to wonder truly, "Where Are We?" As Christians, where do we stand in our faith? When God asked Adam that question, God was also wondering where Adam was in his faith.',
    href: 'https://a.co/d/0cWx1ip0',
    cover: '/whereareyou.webp',
  },
  {
    title: 'Where Are You Going?',
    subtitle: "It's About Choice",
    description: 'Larry Bachman\'s latest release! Welcome to the unveiling of Larry Bachman\'s highly anticipated latest release, "Where Are You Going? ... It\'s About Choice." Join Larry on his newest journey as he grapples with the challenges of adolescence, confronts peer pressure, and discovers the profound impact of his decisions. In this latest book, Larry\'s story continues to inspire readers of all ages, offering invaluable lessons in resilience, integrity, and the power of faith. Dive into the pages of "Where Are You Going? It\'s About Choice" and embark on an unforgettable adventure filled with heart, courage, and the enduring strength found in choosing the right path.',
    href: 'https://a.co/d/0bwgMITp',
    cover: '/whereareyougoing.webp',
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

      {/* About preview */}
      <section className="section-padding bg-navy border-b border-white/20">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="max-w-2xl">
              <p className="text-gold font-medium tracking-[0.2em] uppercase text-xs mb-3">Meet the Author</p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-warm-white mb-6 leading-tight">
                About Larry Bachman
              </h2>
              <p className="text-warm-white/75 leading-relaxed mb-8">
                Larry B. Bachman is an author and speaker whose life message is shaped by hard lessons, second chances, faith, and the conviction that no story is beyond redemption. Through his books and speaking, Larry encourages people to rise after failure, recognize the good still within them, and share that good with the world.
              </p>
              <Link to="/about" className="btn-primary">
                Read About Larry <ArrowRight size={18} />
              </Link>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[560px] aspect-[4/3] rounded-3xl overflow-hidden bg-navy-card/60 border border-gold/20 shadow-2xl shadow-black/25">
                <img
                  src="/larry-office.webp"
                  alt="Larry Bachman in his office"
                  width="1080"
                  height="1080"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
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
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {featuredBooks.map((book) => (
              <div key={book.title} className="group bg-navy-card/40 border border-gold/10 hover:border-gold/30 rounded-lg overflow-hidden transition-all duration-500 hover:-translate-y-1">
                <div className="aspect-[3/4] overflow-hidden bg-navy-card/60">
                  <img
                    src={book.cover}
                    alt={`${book.title} book cover`}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif font-bold text-warm-white text-lg mb-1">{book.title}</h3>
                  <p className="text-gold text-xs font-medium uppercase tracking-wide mb-3">{book.subtitle}</p>
                  <p className="text-warm-white/40 text-sm leading-relaxed mb-4">{book.description}</p>
                  <a href={book.href} className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-medium text-navy transition-all duration-300 hover:bg-gold-light" target="_blank" rel="noreferrer">
                    View on Amazon <ArrowRight size={13} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Television Feature */}
      <section className="section-padding bg-gold">
        <div className="container-wide">
          <div
            className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center [grid-template-areas:'video'_'tvText'_'tcImage'_'quote'] lg:[grid-template-areas:'video_tvText'_'tcImage_quote']"
          >
            <div className="[grid-area:video]">
              <div className="relative w-full aspect-video rounded-3xl overflow-hidden bg-navy-card/60 border border-gold/20">
                <iframe
                  src="https://player.vimeo.com/video/1106840720?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  className="absolute inset-0 w-full h-full"
                  title="God Made Millionaire TV with TC Bradley | Featuring Larry Bachman"
                />
              </div>
            </div>
            <div className="text-right [grid-area:tvText]">
              <p className="text-[#251908] font-medium tracking-[0.2em] uppercase text-xs mb-3">TV Appearance</p>
              <p className="text-[#251908]/70 font-medium tracking-[0.2em] uppercase text-xs mb-3">In the Spotlight</p>
              <h2 className="text-4xl font-serif font-bold text-[#251908] mb-6 leading-tight">
                Nationally Syndicated<br />Television
              </h2>
              <p className="text-[#251908]/90 leading-relaxed">
                Larry Bachman has stepped into the national spotlight with a legacy message that continues to inspire and challenge audiences across the country.
              </p>
            </div>
            <div className="[grid-area:tcImage]">
              <div className="relative w-full aspect-video rounded-3xl overflow-hidden bg-navy-card/60 border border-gold/20">
                <img
                  src="/tc-bradley-larry.webp"
                  alt="TC Bradley with Larry Bachman"
                  width="702"
                  height="603"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="text-right lg:text-left [grid-area:quote]">
              <Quote size={40} className="text-[#251908]/40 ml-auto lg:ml-0 mb-8" />
              <blockquote className="text-lg sm:text-xl text-[#251908] leading-relaxed mb-6 font-normal">
                "Larry Bachman is a man who understands the power of a story. His life experiences, from the music industry to publishing, have given him a rare perspective that few possess. His ability to capture the essence of real-life struggles and triumphs is a gift that brings hope and inspiration."
              </blockquote>
              <p className="text-[#251908] font-semibold">TC Bradley</p>
              <p className="text-[#251908]/70 text-sm">Nationally Syndicated Host</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
