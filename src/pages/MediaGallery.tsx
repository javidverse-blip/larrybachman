import { Quote } from 'lucide-react';
import PhotoPlaceholder from '../components/PhotoPlaceholder';
import VideoPlaceholder from '../components/VideoPlaceholder';

export default function MediaGallery() {
  return (
    <div className="min-h-screen bg-navy">
      <section className="relative overflow-hidden border-b border-gold/20 bg-gradient-to-br from-navy via-navy-light to-navy px-4 pb-20 pt-32 sm:px-6 sm:pb-24 sm:pt-36 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(178,143,62,0.16),transparent_62%)]" />
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-gold">Film · Television · Ministry</p>
          <h1 className="mb-6 font-serif text-5xl font-bold text-warm-white sm:text-6xl">Media Gallery</h1>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-warm-white/70">
            Explore memorable moments from Larry B. Bachman’s journey through music, publishing, filmmaking, television, and ministry.
          </p>
        </div>
      </section>

      <section className="section-padding bg-gold">
        <div className="container-wide">
          <div className="mb-12">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-navy/65">Watch</p>
            <h2 className="font-serif text-4xl font-bold text-navy">Featured Videos</h2>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <article className="overflow-hidden rounded-2xl border border-navy/15 bg-navy shadow-xl shadow-navy/10">
              <div className="relative aspect-video">
                <iframe
                  src="https://player.vimeo.com/video/1106840720?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                  title="Nationally Syndicated Television Appearance"
                  className="absolute inset-0 h-full w-full"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                  allowFullScreen
                />
              </div>
              <div className="p-6 sm:p-8">
                <h3 className="mb-3 font-serif text-2xl font-bold text-warm-white">Nationally Syndicated Television Appearance</h3>
                <p className="leading-relaxed text-warm-white/65">Larry Bachman steps into the spotlight with a legacy message that inspires audiences through faith, storytelling, and a lifetime of experience.</p>
              </div>
            </article>
            <article className="overflow-hidden rounded-2xl border border-navy/15 bg-navy shadow-xl shadow-navy/10">
              <div className="p-4 sm:p-6"><VideoPlaceholder label="Where Are You Going? YouTube Video" className="w-full rounded-xl" /></div>
              <div className="p-6 pt-2 sm:p-8 sm:pt-2">
                <h3 className="mb-3 font-serif text-2xl font-bold text-warm-white">Where Are You Going?</h3>
                <p className="leading-relaxed text-warm-white/65">In Where Are You Going?, Larry Bachman explores the power of choice, faith, and purposeful living through a compelling story grounded in biblical guidance.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section-padding bg-navy">
        <div className="container-wide">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <PhotoPlaceholder label="Hollywood’s Grauman’s Theatre" aspect="aspect-[4/3]" className="w-full rounded-2xl" />
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-gold">Featured Moment</p>
              <h2 className="mb-6 font-serif text-4xl font-bold text-warm-white">Hollywood’s Grauman’s Theatre</h2>
              <p className="leading-relaxed text-warm-white/70">My beautiful daughter, Sheinny, and I attended the premiere of The Sparrows Nesting at Hollywood’s Grauman’s Theatre. The film featured my song The Promise, performed by Shana Saint and promoted worldwide as part of the movie’s soundtrack.</p>
            </div>
          </div>

          <div className="mx-auto mt-20 max-w-4xl rounded-2xl border border-gold/25 bg-navy-card/70 p-7 text-center shadow-2xl sm:p-12">
            <Quote size={40} className="mx-auto mb-7 text-gold/70" />
            <blockquote className="mb-7 font-serif text-xl italic leading-relaxed text-warm-white sm:text-2xl">“Larry Bachman is a man who understands the power of a story. His life experiences, from the music industry to publishing, have given him a rare perspective that few possess. His ability to capture the essence of real-life struggles and triumphs is a gift that brings hope and inspiration to those who read his work. Larry’s legacy isn’t just about the words he writes—it’s about the lives he impacts along the way.”</blockquote>
            <p className="font-semibold text-gold">TC Bradley</p>
            <p className="text-sm text-warm-white/55">Nationally Syndicated Host</p>
          </div>
        </div>
      </section>
    </div>
  );
}
