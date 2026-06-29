import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Clock, Compass, Heart, RefreshCw, ShieldCheck, Sparkles } from 'lucide-react';

const journeyMoments = [
  { icon: ShieldCheck, title: 'Doors that closed.' },
  { icon: RefreshCw, title: 'Dreams that changed.' },
  { icon: Clock, title: 'Seasons of waiting.' },
  { icon: Sparkles, title: 'Moments that looked like endings…', desc: '…only to become new beginnings through God’s faithfulness.' },
];

const values = [
  { icon: BookOpen, title: 'Faith', desc: 'Every project begins with Scripture.' },
  { icon: Heart, title: 'Hope', desc: 'Stories that encourage people to keep trusting God.' },
  { icon: ShieldCheck, title: 'Truth', desc: 'Biblical principles remain the foundation.' },
  { icon: Compass, title: 'Purpose', desc: 'Using creativity to glorify Christ.' },
];

export default function About() {
  return (
    <div className="min-h-screen bg-navy">
      <section
        className="relative overflow-hidden bg-cover bg-[68%_center] px-4 pb-20 pt-32 sm:px-6 sm:pb-24 sm:pt-36 lg:bg-center lg:px-8"
        style={{ backgroundImage: "url('/About-larry.png')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#160e05]/95 via-[#251908]/80 to-[#251908]/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#251908]/70 via-transparent to-black/15" />
        <div className="relative z-10 mx-auto w-full max-w-7xl">
          <div className="max-w-3xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-gold">About Larry</p>
            <h1 className="mb-7 font-serif text-4xl font-semibold leading-[1.12] text-warm-white sm:text-5xl lg:text-6xl xl:text-7xl">
              Every Story Has a Purpose.<br />
              <span className="text-gold-light">Every Chapter Reveals God&apos;s Grace.</span>
            </h1>
            <p className="mb-9 max-w-2xl text-lg leading-relaxed text-warm-white/80">
              Author, speaker, musician, and storyteller, Larry B. Bachman has spent a lifetime discovering that God can transform every season of life into a testimony of hope. His journey continues to inspire readers to trust the Author who is still writing every story.
            </p>
            <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <a href="#journey" className="btn-primary">Explore Larry&apos;s Journey <ArrowRight size={18} /></a>
              <Link to="/books" className="btn-outline">View the Books</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-navy">
        <div className="container-wide grid grid-cols-1 items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div className="relative mx-auto w-full max-w-[560px]">
            <div className="absolute -left-4 -top-4 h-28 w-28 border-l-2 border-t-2 border-gold/55" />
            <img src="/larry-office.png" alt="Larry Bachman in his office" className="relative aspect-[4/5] w-full rounded-3xl object-cover shadow-2xl shadow-black/30" />
            <div className="absolute -bottom-4 -right-4 h-28 w-28 border-b-2 border-r-2 border-gold/55" />
          </div>
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-gold">Meet Larry</p>
            <h2 className="mb-7 font-serif text-4xl font-bold leading-tight text-warm-white sm:text-5xl">Author. Speaker. Storyteller.</h2>
            <div className="space-y-5 leading-relaxed text-warm-white/70">
              <p>Some people write stories.</p>
              <p className="font-serif text-2xl font-semibold text-gold-light">Larry B. Bachman has lived them.</p>
              <p>From a quiet Pennsylvania farm to concert stages, from publishing to filmmaking, from seasons of success to moments of heartbreak, every chapter has revealed one unchanging truth:</p>
              <div className="my-7 border-l-4 border-gold bg-gold/10 px-6 py-5 font-serif text-2xl font-semibold leading-snug text-warm-white">
                God is never finished writing your story.
              </div>
              <p>For decades, Larry has used his gifts to encourage others through books, music, films, and speaking ministry—always pointing people toward the hope found in Jesus Christ.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="journey" className="scroll-mt-20 bg-gold px-4 py-20 text-navy sm:px-6 sm:py-24 lg:px-8">
        <div className="container-wide">
          <div className="mx-auto mb-14 max-w-4xl text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-navy/65">A Life of Many Callings</p>
            <h2 className="mb-7 font-serif text-4xl font-bold sm:text-5xl">The Journey</h2>
            <div className="space-y-4 text-lg leading-relaxed text-navy/75">
              <p>Larry&apos;s life has been shaped by many callings—music, publishing, filmmaking, business leadership, and writing books that inspire readers of every age.</p>
              <p>His experiences have taken him across the country, but life&apos;s greatest lessons were never learned on a stage or in a boardroom.</p>
              <p>They were discovered in unexpected places:</p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {journeyMoments.map(({ icon: Icon, title, desc }) => (
              <article key={title} className="group rounded-2xl border border-navy/20 bg-navy-card/90 p-7 shadow-lg shadow-navy/10 transition-all duration-300 hover:-translate-y-1 hover:border-warm-white/30 hover:shadow-xl">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full border border-gold/35 bg-gold/10">
                  <Icon size={21} className="text-gold" />
                </div>
                <h3 className="font-serif text-xl font-bold text-warm-white">{title}</h3>
                {desc && <p className="mt-3 text-sm leading-relaxed text-warm-white/65">{desc}</p>}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding relative overflow-hidden bg-navy">
        <div className="absolute inset-y-0 right-0 hidden w-1/2 opacity-20 lg:block" style={{ backgroundImage: "url('/guitar-about.jpeg')", backgroundPosition: 'center', backgroundSize: 'cover' }} />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/95 to-navy/60" />
        <div className="container-wide relative z-10 grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-gold">Why Larry Writes</p>
            <h2 className="mb-7 font-serif text-4xl font-bold leading-tight text-warm-white sm:text-5xl">Stories That Point Beyond Themselves</h2>
            <div className="space-y-4 leading-relaxed text-warm-white/70">
              <p>Larry doesn&apos;t write simply to entertain.</p>
              <p className="font-serif text-2xl font-semibold text-gold-light">He writes to encourage.</p>
              <p>Whether through children&apos;s books, novels, devotionals, songs, or films, every project is created with one purpose:</p>
              <p className="font-semibold text-warm-white">To point readers toward timeless biblical truth and the hope found in Jesus Christ.</p>
            </div>
            <blockquote className="mt-9 rounded-2xl border border-gold/25 bg-navy-card/75 p-7 font-serif text-xl italic leading-relaxed text-warm-white shadow-xl">
              “Every story is an opportunity to remind someone that God&apos;s grace is still writing beautiful endings.”
            </blockquote>
          </div>
          <img src="/guitar-about.jpeg" alt="Guitar representing Larry Bachman’s musical journey" className="w-full rounded-3xl border border-gold/20 object-cover shadow-2xl lg:hidden" />
        </div>
      </section>

      <section className="bg-gold px-4 py-20 text-navy sm:px-6 sm:py-24 lg:px-8">
        <div className="container-wide">
          <div className="mb-14 text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-navy/65">Ministry Values</p>
            <h2 className="font-serif text-4xl font-bold sm:text-5xl">Creativity Rooted in Christ</h2>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ icon: Icon, title, desc }) => (
              <article key={title} className="group rounded-2xl border border-navy/20 bg-navy-card/90 p-7 text-center shadow-lg shadow-navy/10 transition-all duration-300 hover:-translate-y-1 hover:border-warm-white/30 hover:shadow-xl">
                <div className="mx-auto mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full border border-gold/35 bg-gold/10">
                  <Icon size={21} className="text-gold" />
                </div>
                <h3 className="mb-3 font-serif text-2xl font-bold text-warm-white">{title}</h3>
                <p className="leading-relaxed text-warm-white/65">{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-cover bg-center px-4 py-24 sm:px-6 sm:py-28 lg:px-8" style={{ backgroundImage: "url('/road.png')" }}>
        <div className="absolute inset-0 bg-[#251908]/85" />
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-gold">The Story Continues</p>
          <h2 className="mb-6 font-serif text-4xl font-bold text-warm-white sm:text-5xl">Continue the Journey</h2>
          <p className="mx-auto mb-9 max-w-2xl text-lg leading-relaxed text-warm-white/75">Discover stories that encourage faith, strengthen hope, and remind every reader that God is never finished writing their story.</p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link to="/books" className="btn-primary">Browse the Books <ArrowRight size={18} /></Link>
            <Link to="/contact" className="btn-outline">Contact Larry</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
