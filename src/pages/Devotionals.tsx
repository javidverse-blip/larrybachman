import { useState, useEffect } from 'react';
import { Play, Calendar, ExternalLink, Loader2 } from 'lucide-react';
import { supabase } from '../lib/supabase';
import PhotoPlaceholder from '../components/PhotoPlaceholder';

interface Devotional {
  id: string;
  title: string;
  description: string | null;
  youtube_url: string | null;
  thumbnail_url: string | null;
  devotional_date: string | null;
  sort_order: number;
}

export default function Devotionals() {
  const [devotionals, setDevotionals] = useState<Devotional[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  useEffect(() => {
    async function fetchDevotionals() {
      const { data, error } = await supabase
        .from('devotionals')
        .select('*')
        .order('sort_order', { ascending: true });
      if (!error && data) {
        setDevotionals(data);
      }
      setLoading(false);
    }
    fetchDevotionals();
  }, []);

  const getEmbedUrl = (url: string | null) => {
    if (!url) return null;
    if (url.includes('youtube.com/embed/')) return url;
    const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]+)/);
    return match ? `https://www.youtube.com/embed/${match[1]}` : url;
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-navy via-navy-light to-navy">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,168,67,0.08),transparent_60%)]" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold font-medium tracking-[0.2em] uppercase text-xs mb-3">Daily Inspiration</p>
          <h1 className="text-5xl sm:text-6xl font-serif font-bold text-warm-white mb-6">Devotionals</h1>
          <p className="text-warm-white/50 text-lg leading-relaxed max-w-2xl mx-auto">
            Weekly reflections on faith, grace, and living a purposeful life. Watch, reflect, and grow.
          </p>
        </div>
      </section>

      {/* Devotionals Grid */}
      <section className="section-padding bg-navy">
        <div className="container-wide">
          {loading ? (
            <div className="flex items-center justify-center py-20">
              <Loader2 size={32} className="text-gold animate-spin" />
            </div>
          ) : devotionals.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-warm-white/40 text-lg">No devotionals available yet. Check back soon!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {devotionals.map((dev) => {
                const embedUrl = getEmbedUrl(dev.youtube_url);
                const isPlaying = activeVideo === dev.id;

                return (
                  <div
                    key={dev.id}
                    className="group bg-navy-card/40 border border-gold/10 hover:border-gold/30 rounded-lg overflow-hidden transition-all duration-500 hover:-translate-y-1"
                  >
                    {/* Thumbnail / Video */}
                    <div className="relative aspect-video bg-navy-card/60">
                      {isPlaying && embedUrl ? (
                        <iframe
                          src={embedUrl}
                          title={dev.title}
                          className="absolute inset-0 w-full h-full"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      ) : (
                        <>
                          <PhotoPlaceholder label={`${dev.title} Thumbnail`} aspect="aspect-video" className="w-full h-full rounded-none border-0" />
                          {embedUrl && (
                            <button
                              onClick={() => setActiveVideo(dev.id)}
                              className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/30 transition-colors"
                            >
                              <div className="w-14 h-14 rounded-full bg-gold/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                                <Play size={24} className="text-navy ml-1" />
                              </div>
                            </button>
                          )}
                        </>
                      )}
                    </div>

                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Calendar size={13} className="text-gold/60" />
                        <span className="text-gold/60 text-xs">
                          {dev.devotional_date
                            ? new Date(dev.devotional_date).toLocaleDateString('en-US', {
                                month: 'long',
                                day: 'numeric',
                                year: 'numeric',
                              })
                            : 'Coming Soon'}
                        </span>
                      </div>
                      <h3 className="font-serif font-bold text-warm-white text-lg mb-2 leading-snug">{dev.title}</h3>
                      {dev.description && (
                        <p className="text-warm-white/40 text-sm leading-relaxed mb-4">{dev.description}</p>
                      )}
                      {embedUrl && (
                        <a
                          href={embedUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-gold hover:text-gold-light text-sm font-medium transition-colors"
                        >
                          Watch on YouTube <ExternalLink size={13} />
                        </a>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
