import { useState } from 'react';
import { ExternalLink, Play, Music, Video, Newspaper, Calendar, Image } from 'lucide-react';
import PhotoPlaceholder from '../components/PhotoPlaceholder';
import VideoPlaceholder from '../components/VideoPlaceholder';

const tabs = [
  { id: 'videos', label: 'Videos', icon: Video },
  { id: 'interviews', label: 'Interviews', icon: Play },
  { id: 'music', label: 'Music', icon: Music },
  { id: 'press', label: 'Press', icon: Newspaper },
  { id: 'events', label: 'Events', icon: Calendar },
  { id: 'gallery', label: 'Gallery', icon: Image },
];

const videos = [
  { title: 'Where Are You Going?', desc: 'A transformative journey exploring choice, faith, and purposeful life.' },
  { title: 'The Promise - Gospel Song', desc: 'Soul-stirring lyrics and uplifting rhythm for spiritual reflection.' },
  { title: 'Larry Bachman Interview', desc: 'An in-depth conversation about faith, music, and storytelling.' },
];

const interviews = [
  { title: 'TC Bradley Show', desc: 'Larry shares his journey from Pennsylvania farm to published author.', date: '2024' },
  { title: 'Faith & Story Podcast', desc: 'A deep dive into the stories behind "Where Are You?" and more.', date: '2024' },
  { title: 'Ministry Radio Hour', desc: 'Discussing the power of gospel music and faith-based storytelling.', date: '2025' },
];

const music = [
  { title: 'The Promise', desc: 'Featured in the movie Sparrows Nesting. Premiered at Grauman\'s Theatre.' },
  { title: 'The Gift', desc: 'A testament to faith and the power of grace.' },
  { title: 'Where Are You Going?', desc: 'An uplifting anthem about choice and faith.' },
];

const press = [
  { title: 'Snyder County Times', desc: 'How a farm boy became a man of deep faith living on a Texas ranch.', date: 'January 2025' },
  { title: 'Hollywood Premiere Feature', desc: 'The Promise promoted Sparrows Nesting worldwide at Grauman\'s Theatre.', date: 'December 2024' },
  { title: 'Author Spotlight', desc: 'Larry reflects on publishing and leaving a legacy of value.', date: 'November 2024' },
];

const events = [
  { title: 'Book Signing Tour', desc: 'Meet Larry in person and get your copy signed.', date: 'Coming Soon' },
  { title: 'Ministry Conference', desc: 'Speaking engagement at faith and leadership conference.', date: 'Coming Soon' },
  { title: 'Music & Story Night', desc: 'An evening of live music and storytelling.', date: 'Coming Soon' },
];

const galleryImages = [
  { label: 'Larry Bachman Portrait', category: 'Portrait' },
  { label: 'Texas Ranch', category: 'Ranch Life' },
  { label: 'Book Signing Event', category: 'Events' },
  { label: 'Music Performance', category: 'Music' },
  { label: 'Hollywood Premiere', category: 'Events' },
  { label: 'Pennsylvania Farm', category: 'Heritage' },
];

export default function Media() {
  const [activeTab, setActiveTab] = useState('videos');

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-navy via-navy-light to-navy">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,168,67,0.08),transparent_60%)]" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold font-medium tracking-[0.2em] uppercase text-xs mb-3">Videos · Music · Press · Events</p>
          <h1 className="text-5xl sm:text-6xl font-serif font-bold text-warm-white mb-6">Media</h1>
          <p className="text-warm-white/50 text-lg leading-relaxed max-w-2xl mx-auto">
            Videos, interviews, music, press features, and appearances from Larry Bachman's journey.
          </p>
        </div>
      </section>

      {/* Tabs */}
      <div className="bg-navy-card/60 border-b border-gold/10 sticky top-16 md:top-20 z-30 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-0 overflow-x-auto">
            {tabs.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`flex items-center gap-2 px-5 py-4 text-sm font-medium border-b-2 transition-all whitespace-nowrap ${
                  activeTab === id
                    ? 'border-gold text-gold'
                    : 'border-transparent text-warm-white/40 hover:text-gold hover:bg-gold/5'
                }`}
              >
                <Icon size={15} />
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="section-padding bg-navy">
        <div className="container-wide">
          {/* Videos */}
          {activeTab === 'videos' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {videos.map((v) => (
                <div key={v.title} className="group">
                  <VideoPlaceholder label={v.title} className="w-full" />
                  <div className="mt-4">
                    <h3 className="font-serif font-bold text-warm-white text-lg mb-1">{v.title}</h3>
                    <p className="text-warm-white/40 text-sm">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Interviews */}
          {activeTab === 'interviews' && (
            <div className="space-y-8">
              {interviews.map((i) => (
                <div key={i.title} className="flex flex-col sm:flex-row gap-6 p-6 bg-navy-card/40 border border-gold/10 rounded-lg">
                  <div className="sm:w-48 shrink-0">
                    <PhotoPlaceholder label={i.title} aspect="aspect-video" className="w-full" />
                  </div>
                  <div className="flex-1">
                    <span className="text-gold text-xs font-medium uppercase tracking-wide">{i.date}</span>
                    <h3 className="font-serif font-bold text-warm-white text-lg mt-1 mb-2">{i.title}</h3>
                    <p className="text-warm-white/40 text-sm mb-4">{i.desc}</p>
                    <a href="#" className="inline-flex items-center gap-2 text-gold hover:text-gold-light text-sm font-medium transition-colors">
                      Watch Interview <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Music */}
          {activeTab === 'music' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {music.map((m) => (
                <div key={m.title} className="group">
                  <VideoPlaceholder label={m.title} className="w-full" />
                  <div className="mt-4">
                    <h3 className="font-serif font-bold text-warm-white text-lg mb-1">{m.title}</h3>
                    <p className="text-warm-white/40 text-sm">{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Press */}
          {activeTab === 'press' && (
            <div className="space-y-8">
              {press.map((p) => (
                <div key={p.title} className="p-6 bg-navy-card/40 border border-gold/10 rounded-lg">
                  <span className="text-gold text-xs font-medium uppercase tracking-wide">{p.date}</span>
                  <h3 className="font-serif font-bold text-warm-white text-lg mt-1 mb-2">{p.title}</h3>
                  <p className="text-warm-white/40 text-sm mb-4">{p.desc}</p>
                  <a href="#" className="inline-flex items-center gap-2 text-gold hover:text-gold-light text-sm font-medium transition-colors">
                    Read Article <ExternalLink size={14} />
                  </a>
                </div>
              ))}
            </div>
          )}

          {/* Events */}
          {activeTab === 'events' && (
            <div className="space-y-8">
              {events.map((e) => (
                <div key={e.title} className="flex flex-col sm:flex-row gap-6 p-6 bg-navy-card/40 border border-gold/10 rounded-lg">
                  <div className="sm:w-48 shrink-0">
                    <PhotoPlaceholder label={e.title} aspect="aspect-video" className="w-full" />
                  </div>
                  <div className="flex-1">
                    <span className="text-gold text-xs font-medium uppercase tracking-wide">{e.date}</span>
                    <h3 className="font-serif font-bold text-warm-white text-lg mt-1 mb-2">{e.title}</h3>
                    <p className="text-warm-white/40 text-sm mb-4">{e.desc}</p>
                    <a href="#" className="inline-flex items-center gap-2 text-gold hover:text-gold-light text-sm font-medium transition-colors">
                      Learn More <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Gallery */}
          {activeTab === 'gallery' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages.map((img) => (
                <div key={img.label} className="group">
                  <PhotoPlaceholder label={img.label} aspect="aspect-[4/3]" className="w-full" />
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-warm-white/40 text-sm">{img.label}</span>
                    <span className="text-gold/60 text-xs uppercase tracking-wide">{img.category}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
