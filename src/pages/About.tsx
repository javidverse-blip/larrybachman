import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Clock, Compass, Heart, RefreshCw, ShieldCheck, Sparkles } from 'lucide-react';

const journeyMoments = [
  { icon: ShieldCheck, title: 'Doors that closed.' },
  { icon: RefreshCw, title: 'Dreams that changed.' },
  { icon: Clock, title: 'Seasons of waiting.' },
  { icon: Sparkles, title: 'Moments of endings' },
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
        className="relative overflow-hidden border-b border-gold/10 bg-cover bg-[68%_center] pb-16 pt-28 sm:pb-20 sm:pt-32 lg:bg-center"
        style={{ backgroundImage: "url('/About-larry.webp')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#251908]/95 via-[#251908]/82 to-[#251908]/55" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(178,143,62,0.14),transparent_60%)]" />
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-gold">About Larry</p>
          <h1 className="mb-6 font-serif text-4xl font-bold text-warm-white sm:text-6xl">About Larry</h1>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-warm-white/60 sm:text-lg">
            Author, speaker, musician, and storyteller sharing stories of faith, hope, and God’s redeeming grace.
          </p>
        </div>
      </section>

      <section className="bg-navy px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="container-wide grid grid-cols-1 items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          <div className="relative mx-auto w-full max-w-[480px]">
            <div className="absolute -left-3 -top-3 h-20 w-20 border-l-2 border-t-2 border-gold/55" />
            <img src="/larry-office.webp" alt="Larry Bachman in his office" width="1080" height="1080" loading="lazy" decoding="async" className="relative aspect-[4/5] w-full rounded-lg object-cover shadow-xl shadow-black/25" />
            <div className="absolute -bottom-3 -right-3 h-20 w-20 border-b-2 border-r-2 border-gold/55" />
          </div>
          <div>
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
          </div>
        </div>
      </section>

      <section id="journey" className="scroll-mt-20 bg-[#b8b6b1] px-4 py-16 text-navy sm:px-6 sm:py-20 lg:px-8">
        <div className="container-wide">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-navy/65">A Life of Many Callings</p>
            <h2 className="mb-5 font-serif text-3xl font-bold">The Journey</h2>
            <div className="space-y-3 leading-relaxed text-navy/75">
              <p>Larry&apos;s life has been shaped by many callings—music, publishing, filmmaking, business leadership, and writing books that inspire readers of every age.</p>
              <p>His experiences have taken him across the country, but life&apos;s greatest lessons were never learned on a stage or in a boardroom.</p>
              <p>They were discovered in unexpected places:</p>
            </div>
          </div>
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {journeyMoments.map(({ icon: Icon, title }) => (
              <article key={title} className="group rounded-lg border border-navy/20 bg-navy-card/90 p-4 shadow-md shadow-navy/10 transition-all duration-300 hover:-translate-y-1 hover:border-warm-white/30 hover:shadow-lg">
                <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full border border-gold/35 bg-gold/10">
                  <Icon size={18} className="text-gold" />
                </div>
                <h3 className="font-serif text-lg font-bold text-warm-white">{title}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="container-wide grid grid-cols-1 items-center gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
          <div className="mx-auto aspect-square w-full max-w-md overflow-hidden rounded-lg border border-gold/20 bg-[#251908] p-6 shadow-xl shadow-black/20" />
          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-gold">Why Larry Writes</p>
            <h2 className="mb-6 font-serif text-3xl font-bold leading-tight text-warm-white sm:text-4xl">Stories That Point Beyond Themselves</h2>
            <div className="space-y-4 leading-relaxed text-warm-white/70">
              <p>Larry doesn&apos;t write simply to entertain.</p>
              <p className="font-serif text-xl font-semibold text-gold-light">He writes to encourage.</p>
              <p>Whether through children&apos;s books, novels, devotionals, songs, or films, every project is created with one purpose:</p>
              <p className="font-semibold text-warm-white">To point readers toward timeless biblical truth and the hope found in Jesus Christ.</p>
            </div>
            <blockquote className="mt-7 rounded-lg border border-gold/25 bg-navy-card/75 p-6 font-serif text-lg italic leading-relaxed text-warm-white shadow-lg [font-variant:small-caps]">
              “Every story is an opportunity to remind someone that God&apos;s grace is still writing beautiful endings.”
            </blockquote>
          </div>
        </div>
      </section>

      <section className="bg-[#b8b6b1] px-4 py-16 text-navy sm:px-6 sm:py-20 lg:px-8">
        <div className="container-wide">
          <div className="mb-10 text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-navy/65">Ministry Values</p>
            <h2 className="font-serif text-3xl font-bold">Creativity Rooted in Christ</h2>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ icon: Icon, title, desc }) => (
              <article key={title} className="group rounded-lg border border-navy/20 bg-navy-card/90 p-5 text-center shadow-md shadow-navy/10 transition-all duration-300 hover:-translate-y-1 hover:border-warm-white/30 hover:shadow-lg">
                <div className="mx-auto mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-gold/35 bg-gold/10">
                  <Icon size={18} className="text-gold" />
                </div>
                <h3 className="mb-2 font-serif text-xl font-bold text-warm-white">{title}</h3>
                <p className="text-sm leading-relaxed text-warm-white/65">{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-cover bg-center px-4 py-16 sm:px-6 sm:py-20 lg:px-8" style={{ backgroundImage: "url('/road.webp')" }}>
        <div className="absolute inset-0 bg-[#251908]/85" />
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-gold">The Story Continues</p>
          <h2 className="mb-5 font-serif text-3xl font-bold text-warm-white sm:text-4xl">Continue the Journey</h2>
          <p className="mx-auto mb-8 max-w-2xl leading-relaxed text-warm-white/70">Discover stories that encourage faith, strengthen hope, and remind every reader that God is never finished writing their story.</p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link to="/books" className="btn-primary">Browse the Books <ArrowRight size={18} /></Link>
            <Link to="/contact" className="btn-outline">Contact Larry</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
