import { Link } from 'react-router-dom';
import { ArrowRight, Music, BookOpen, Heart, Leaf } from 'lucide-react';
import PhotoPlaceholder from '../components/PhotoPlaceholder';

const sections = [
  {
    id: 'biography',
    label: 'Biography',
    heading: 'Roots in Rural Pennsylvania',
    content: [
      'Born in 1950 and raised on a humble farm in the heart of Pennsylvania, Larry Bachman\'s journey has been one of faith, music, storytelling, and a deep desire to leave a meaningful legacy.',
      'His roots were grounded in a small white-clapboard village church where he and his brother were taught the Golden Rules of Charity. Faith was not merely a Sunday tradition; it was woven into the fabric of everyday life.',
      'While the country life provided a strong foundation, Larry was drawn to the broader world. A restless curiosity and love of music beckoned him beyond the fields of his childhood, setting the stage for a remarkable journey.',
    ],
  },
  {
    id: 'music',
    label: 'Music Career',
    heading: 'Twenty Years on the Stage',
    content: [
      "Music was Larry's first love — a passion that took him far beyond his rural upbringing. By 1964, his union card marked the start of a professional music career that would span over 20 years.",
      'Traveling across the United States and Canada, performing in major cities like Los Angeles and New York, Larry experienced the full spectrum of the music industry — the bright lights, the road, the camaraderie, and the pitfalls.',
      "His gospel songs 'The Gift' and 'The Promise' stand as testaments to how deeply faith and music became intertwined in his life. 'The Promise' was even featured in the movie Sparrows Nesting, premiered at Hollywood's iconic Grauman's Theatre.",
    ],
  },
  {
    id: 'publishing',
    label: 'Publishing Journey',
    heading: 'A New Calling in Publishing',
    content: [
      'As time passed in the music world, Larry realized he may have followed the wrong crowd. A turning point came in 1984 when he found a new calling in publishing, thanks to the mentorship of attorney Irvin Graybill.',
      "This opportunity pulled him back to his hometown roots, where he discovered the power of storytelling — particularly the simple yet profound narratives of everyday people. He found great joy in publishing weekly 'chicken soup' stories about life in rural communities.",
      'With decades of experience in music, newspapers, and book publishing, Larry built a platform dedicated to uplifting others. He believes everyone has a story to tell, and his work has given voice to countless lives that might otherwise have gone untold.',
    ],
  },
  {
    id: 'ministry',
    label: 'Ministry & Faith',
    heading: 'Stories of Hope and Grace',
    content: [
      "For Larry, writing has always been an act of faith. His books — from 'Where Are You?' to 'Living a Prosperous Life' — are not just narratives; they are invitations to reflect on one's own relationship with God.",
      '"Where Are You?" explores the most significant question in the Bible. "Where Are You Going? It\'s About Choice" follows young people navigating faith and decision-making. Each book carries the same heartbeat: a deep belief in God\'s charity woven into every life.',
      "Larry's greatest hope is that his experiences resonate with readers, revealing the quiet yet powerful presence of grace in life's journey. All proceeds from his books go directly to ministry and service.",
    ],
  },
  {
    id: 'legacy',
    label: 'Legacy',
    heading: 'Leaving a Legacy of Value',
    content: [
      'Larry currently resides in Texas, where wide-open skies and ranch life provide both a sanctuary and an endless source of inspiration. The land has a way of quieting the noise of the world and bringing a man back to what matters most.',
      "Ranch life has reinforced the values Larry carried from his Pennsylvania childhood — hard work, simplicity, and gratitude. Whether tending to animals, watching a sunset over the plains, or simply sitting with his thoughts, Texas has become home in the fullest sense.",
      "Larry's mission is simple: to leave a legacy of value and to help make the world a better place than he found it. Through his books, music, and ministry, he continues to touch lives and inspire faith.",
    ],
  },
];

const timeline = [
  { year: '1950', title: 'Born in Pennsylvania', desc: 'Raised on a humble farm in the heart of rural Pennsylvania.' },
  { year: '1964', title: 'Music Career Begins', desc: 'Union card marks the start of a 20+ year professional music career.' },
  { year: '1984', title: 'Publishing Journey', desc: 'Found a new calling in publishing, thanks to mentor Irvin Graybill.' },
  { year: '2024', title: 'Published Author', desc: 'Released "Where Are You?" — the first of several faith-based books.' },
  { year: '2025', title: 'Texas Ranch Life', desc: 'Resides in Texas, writing and sharing stories from the open land.' },
];

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-navy via-navy-light to-navy">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,168,67,0.08),transparent_60%)]" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold font-medium tracking-[0.2em] uppercase text-xs mb-3">The Man Behind the Story</p>
          <h1 className="text-5xl sm:text-6xl font-serif font-bold text-warm-white mb-6">About Larry</h1>
          <p className="text-warm-white/50 text-lg leading-relaxed max-w-2xl mx-auto">
            A Pennsylvania farm boy who became a professional musician, publisher, author, and rancher — shaped at every turn by faith.
          </p>
        </div>
      </section>

      {/* Section Nav */}
      <nav className="bg-navy-card/60 border-b border-gold/10 sticky top-16 md:top-20 z-30 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-1 overflow-x-auto py-3">
            {sections.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                className="shrink-0 px-4 py-1.5 text-sm font-medium text-warm-white/40 hover:text-gold hover:bg-gold/5 rounded-sm transition-colors whitespace-nowrap"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {sections.map((section, i) => (
          <section
            key={section.id}
            id={section.id}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24 scroll-mt-32"
          >
            <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
              <p className="text-gold font-medium tracking-[0.2em] uppercase text-xs mb-3">{section.label}</p>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-warm-white mb-6 leading-tight">
                {section.heading}
              </h2>
              {section.content.map((para, idx) => (
                <p key={idx} className="text-warm-white/40 leading-relaxed mb-4">{para}</p>
              ))}
              {section.id === 'biography' && (
                <Link to="/books" className="inline-flex items-center gap-2 text-gold font-medium hover:text-gold-light transition-colors group mt-2">
                  Explore His Books <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                </Link>
              )}
            </div>
            <div className={`relative ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
              <PhotoPlaceholder label={`${section.label} Photo`} aspect="aspect-[4/3]" className="w-full" />
            </div>
          </section>
        ))}
      </div>

      {/* Timeline */}
      <section className="section-padding bg-gradient-to-b from-navy to-navy-light">
        <div className="container-wide">
          <div className="text-center mb-14">
            <p className="text-gold font-medium tracking-[0.2em] uppercase text-xs mb-3">Personal Journey</p>
            <h2 className="text-4xl font-serif font-bold text-warm-white">Timeline of a Life Well Lived</h2>
          </div>
          <div className="max-w-3xl mx-auto">
            {timeline.map((item, i) => (
              <div key={item.year} className="relative flex gap-8 pb-12 last:pb-0">
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-gold" />
                  {i < timeline.length - 1 && <div className="w-px flex-1 bg-gold/20 mt-2" />}
                </div>
                <div className="pb-2">
                  <span className="text-gold font-serif font-bold text-lg">{item.year}</span>
                  <h4 className="text-warm-white font-semibold mt-1 mb-1">{item.title}</h4>
                  <p className="text-warm-white/40 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Quote */}
      <section className="py-20 bg-navy">
        <div className="container-narrow text-center">
          <div className="w-12 h-px bg-gold/40 mx-auto mb-8" />
          <p className="font-serif text-2xl sm:text-3xl text-warm-white italic leading-relaxed mb-8">
            "My mission is simple: to leave a legacy of value and to help make the world a better place than I found it."
          </p>
          <p className="text-gold font-medium">— Larry Bachman</p>
          <div className="w-12 h-px bg-gold/40 mx-auto mt-8" />
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-gradient-to-b from-navy-light to-navy">
        <div className="container-wide">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Heart, title: 'Faith', desc: 'Grounded in a deep belief in God\'s charity woven into every life.' },
              { icon: Music, title: 'Music', desc: 'Over 20 years performing across the U.S. and Canada.' },
              { icon: BookOpen, title: 'Storytelling', desc: 'Publishing weekly stories that capture the heart of community life.' },
              { icon: Leaf, title: 'Ranch Life', desc: 'Finding peace and inspiration on a Texas ranch.' },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="text-center p-6 rounded-lg bg-navy-card/40 border border-gold/10">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gold/10 mb-4">
                  <Icon size={20} className="text-gold" />
                </div>
                <h3 className="font-serif font-bold text-warm-white text-xl mb-2">{title}</h3>
                <p className="text-warm-white/40 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
