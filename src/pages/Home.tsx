import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Mic, Quote, ChevronDown } from 'lucide-react';

const featuredBooks = [
  {
    title: 'Where Are You?',
    subtitle: 'About the Book',
    description: 'Did you know that "Where Are You?" is the most significant question in the Bible? If God asked you that question, what would you say? You of course would say, "Here Am I". Also, he would be asking about our faith. I have to wonder truly, "Where Are We?" As Christians, where do we stand in our faith? When God asked Adam that question, God was also wondering where Adam was in his faith.',
    href: 'https://a.co/d/0cWx1ip0',
    cover: '/whereareyou.png',
  },
  {
    title: 'Where Are You Going?',
    subtitle: "It's About Choice",
    description: 'Larry Bachman\'s latest release! Welcome to the unveiling of Larry Bachman\'s highly anticipated latest release, "Where Are You Going? ... It\'s About Choice." Join Larry on his newest journey as he grapples with the challenges of adolescence, confronts peer pressure, and discovers the profound impact of his decisions. In this latest book, Larry\'s story continues to inspire readers of all ages, offering invaluable lessons in resilience, integrity, and the power of faith. Dive into the pages of "Where Are You Going? It\'s About Choice" and embark on an unforgettable adventure filled with heart, courage, and the enduring strength found in choosing the right path.',
    href: 'https://a.co/d/0bwgMITp',
    cover: '/whereareyougoing.png',
  },
];

const pillars = [
  { icon: BookOpen, label: 'Author', desc: 'Faith-based books and stories that inspire reflection and growth.' },
  { icon: Mic, label: 'Speaker', desc: 'Messages of faith, redemption, and purpose that encourage audiences to share the good within them.' },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative min-h-screen overflow-hidden bg-[#251908]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,168,67,0.06),transparent_65%)]" />

        <div className="relative z-10 max-w-7xl min-h-screen mx-auto px-4 sm:px-6 lg:px-8 pt-20 w-full flex">
          <div className="grid w-full grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center lg:items-stretch">
            <div className="relative z-10 max-w-2xl py-10 sm:py-14 lg:py-20 flex flex-col justify-center">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold text-warm-white leading-[1.08] mb-6">
                YOUR STORY<br />
                <span className="text-gold">ISN'T OVER</span>
              </h1>
              <p className="text-lg sm:text-xl text-warm-white/55 leading-relaxed mb-6 max-w-xl">
                Falling down is not the end of your story. Your story isn't over. The fall may be part of your story, but it does not have to define your future.
              </p>

              <div className="flex flex-col items-start">
                <Link
                  to="/about"
                  className="btn-primary mb-2"
                >
                  Meet Larry <ArrowRight size={16} />
                </Link>

                <div className="relative w-full max-w-[700px] -mx-2 sm:-mx-4">
                  <img
                    src="/books-prev.png"
                    alt="Books Stack"
                    className="block w-full h-auto"
                  />
                </div>
              </div>
            </div>

            <div className="relative flex min-h-[360px] sm:min-h-[480px] lg:min-h-0 items-end justify-center lg:justify-end">
              <img
                src="/larry-b.png"
                alt="Larry Bachman Portrait"
                className="block w-full max-w-[420px] sm:max-w-[500px] lg:absolute lg:bottom-0 lg:right-0 lg:max-w-[560px] h-auto"
              />
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 hidden lg:flex flex-col items-center gap-1 animate-bounce">
          <div className="w-px h-8 bg-warm-white/20" />
          <ChevronDown size={16} className="text-gold/50" />
        </div>
      </section>

      {/* About preview */}
     <section className="section-padding bg-[#d2a330]">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.4fr_0.8fr] gap-8 xl:gap-12 items-center">
            <div className="flex justify-center h-full">
              <div className="relative w-full max-w-[280px] aspect-square rounded-3xl overflow-hidden bg-navy-card/60 border border-gold/20">
                <img
                  src="/larry-office.png"
                  alt="Larry Bachman in his office"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="text-center max-w-2xl mx-auto px-2 sm:px-4 lg:px-0">
              <p className="text-[#251908] font-medium tracking-[0.2em] uppercase text-xs mb-3">Larry B. Bachman</p>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#251908] mb-6 leading-tight">
                A life shaped by hard lessons, second chances, and the conviction that no life is beyond redemption
              </h2>
              <p className="text-[#251908]/90 leading-relaxed mb-4 max-w-xl mx-auto">
                The message woven throughout his books, speaking, and ministry is simple:
              </p>
              <blockquote className="font-serif text-xl text-[#251908]/90 leading-relaxed mb-4 italic max-w-xl mx-auto">
                "You still have much to contribute to the world. There's a fountain of good in you. Share it with the world, even if they don't want to hear it. Plant the seeds of truth and let them grow."
              </blockquote>
              <p className="text-[#251908] font-semibold mb-6">Larry B. Bachman</p>
              <p className="text-[#251908]/90 leading-relaxed mb-8 max-w-xl mx-auto">
                That belief has guided Larry through successes, failures, personal struggles, and victories, becoming the foundation of the message he now shares with others.
              </p>
              <Link to="/about" className="inline-flex items-center justify-center gap-2 text-[#251908] font-medium hover:text-[#1d1507] transition-colors group">
                Read His Full Story <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
            <div className="flex justify-center h-full">
              <div className="relative w-full max-w-[280px] aspect-square rounded-3xl overflow-hidden bg-navy-card/60 border border-gold/20">
                <img
                  src="/road.png"
                  alt="Larry Bachman on the road"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-16 max-w-4xl mx-auto">
            {pillars.map(({ icon: Icon, label, desc }) => (
              <div key={label} className="text-center p-6 rounded-lg bg-navy-card/40 border border-gold/10">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gold/10 mb-4">
                  <Icon size={20} className="text-gold" />
                </div>
                <h3 className="font-serif font-semibold text-lg text-warm-white mb-2">{label}</h3>
                <p className="text-warm-white text-sm leading-relaxed">{desc}</p>
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
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {featuredBooks.map((book) => (
              <div key={book.title} className="group bg-navy-card/40 border border-gold/10 hover:border-gold/30 rounded-lg overflow-hidden transition-all duration-500 hover:-translate-y-1">
                <div className="aspect-[3/4] overflow-hidden bg-navy-card/60">
                  <img
                    src={book.cover}
                    alt={`${book.title} book cover`}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif font-bold text-warm-white text-lg mb-1">{book.title}</h3>
                  <p className="text-gold text-xs font-medium uppercase tracking-wide mb-3">{book.subtitle}</p>
                  <p className="text-warm-white/40 text-sm leading-relaxed mb-4">{book.description}</p>
                  <a href={book.href} className="inline-flex items-center gap-2 rounded-full bg-warm-white px-5 py-2.5 text-sm font-medium text-[#d2a330] transition-all duration-300 hover:bg-gold-light hover:text-[#251908]" target="_blank" rel="noreferrer">
                    View on Amazon <ArrowRight size={13} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Television Feature */}
      <section className="section-padding bg-[#d2a330]">
        <div className="container-wide">
          <div
            className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center [grid-template-areas:'video'_'tvText'_'quote'_'tcImage'] lg:[grid-template-areas:'video_tvText'_'quote_tcImage']"
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
            <div className="text-right lg:text-left [grid-area:quote]">
              <Quote size={40} className="text-[#251908]/40 ml-auto lg:ml-0 mb-8" />
              <blockquote className="font-serif text-xl sm:text-2xl text-[#251908] leading-relaxed mb-6 italic">
                "Larry Bachman is a man who understands the power of a story. His life experiences, from the music industry to publishing, have given him a rare perspective that few possess. His ability to capture the essence of real-life struggles and triumphs is a gift that brings hope and inspiration."
              </blockquote>
              <p className="text-[#251908] font-semibold">TC Bradley</p>
              <p className="text-[#251908]/70 text-sm">Nationally Syndicated Host</p>
            </div>
            <div className="[grid-area:tcImage]">
              <div className="relative w-full aspect-video rounded-3xl overflow-hidden bg-navy-card/60 border border-gold/20">
                <img
                  src="/tc-bradley-larry.png"
                  alt="TC Bradley with Larry Bachman"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
