export default function Media() {
  return (
    <div className="min-h-screen bg-navy">
      <section
        className="relative overflow-hidden border-b border-gold/10 bg-cover bg-center pb-16 pt-28 sm:pb-20 sm:pt-32"
        style={{ backgroundImage: "url('/media-bg.png')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#251908]/95 via-[#251908]/82 to-[#251908]/60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(178,143,62,0.14),transparent_60%)]" />
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-gold">Film · Television · Ministry</p>
          <h1 className="mb-6 font-serif text-4xl font-bold text-warm-white sm:text-6xl">Media</h1>
          <p className="mx-auto max-w-3xl text-base leading-relaxed text-warm-white/70 sm:text-lg">
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
          <div className="space-y-10">
            <article className="grid grid-cols-1 overflow-hidden rounded-2xl border border-gold/20 bg-navy-card/55 shadow-xl shadow-black/20 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
                <h3 className="mb-4 font-serif text-3xl font-bold text-warm-white">Nationally Syndicated Television Appearance</h3>
                <p className="leading-relaxed text-warm-white/65">Larry Bachman steps into the spotlight with a legacy message that inspires audiences through faith, storytelling, and a lifetime of experience.</p>
              </div>
              <div className="min-h-[240px] bg-navy-card/70 p-4 sm:p-6">
                <div className="relative aspect-video h-full min-h-[220px] w-full overflow-hidden rounded-xl border border-gold/20">
                <iframe
                  src="https://player.vimeo.com/video/1106840720?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                  title="Nationally Syndicated Television Appearance"
                  className="absolute inset-0 h-full w-full"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                  allowFullScreen
                />
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section-padding bg-navy">
        <div className="container-wide">
          <div className="mb-12 text-center">
            <h2 className="font-serif text-4xl font-bold text-warm-white">Featured Moments - Larry B. Bachman Appearances</h2>
          </div>
          <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div className="mx-auto aspect-square w-full max-w-sm overflow-hidden rounded-2xl border border-gold/20 bg-navy-card/55">
              <img src="/Hollywood’s-Grauman’s-Theatre.jpg" alt="Larry Bachman at Hollywood’s Grauman’s Theatre" className="h-full w-full object-cover" />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="mb-6 font-serif text-4xl font-bold text-warm-white">Hollywood’s Grauman’s Theatre</h2>
              <p className="leading-relaxed text-warm-white/70">My beautiful daughter, Sheinny, and I attended the premiere of The Sparrows Nesting at Hollywood’s Grauman’s Theatre. The film featured my song The Promise, performed by Shana Saint and promoted worldwide as part of the movie’s soundtrack.</p>
            </div>
          </div>

        </div>
      </section>

      <section className="section-padding bg-gold">
        <div className="container-wide">
          <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
            <div>
              <div className="relative aspect-video w-full overflow-hidden rounded-3xl border border-gold/20 bg-navy-card/60">
                <img src="/tc-bradley-larry.png" alt="TC Bradley with Larry Bachman" className="h-full w-full object-cover" />
              </div>
            </div>
            <div className="text-right lg:text-left">
              <h2 className="mb-6 font-serif text-4xl font-bold text-[#251908]">TC Bradley - Nationally Syndicated Host</h2>
              <blockquote className="mb-6 text-lg font-normal leading-relaxed text-[#251908] sm:text-xl">
                "Larry Bachman is a man who understands the power of a story. His life experiences, from the music industry to publishing, have given him a rare perspective that few possess. His ability to capture the essence of real-life struggles and triumphs is a gift that brings hope and inspiration."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-navy">
        <div className="container-wide">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="overflow-hidden rounded-2xl border border-gold/20 bg-navy-card/55">
              <img src="/Larry-snyder.png" alt="Larry Bachman featured in the Snyder County Times" className="aspect-[2/1] h-full w-full object-contain" />
            </div>
            <div>
              <h2 className="mb-6 font-serif text-4xl font-bold text-warm-white">Discover Larry Bachman’s Inspirational Journey in the Snyder County Times</h2>
              <p className="leading-relaxed text-warm-white/70">We are thrilled to feature a captivating profile of local author and storyteller, Larry Bachman, in the latest edition of the Snyder County Times! In this special feature, learn about Larry’s impactful books that blend narrative with valuable life lessons. Explore his latest release, “Where Are You Going: It’s About Choice,” and discover how Larry’s experiences growing up in Pennsylvania shaped his perspective on faith and decision-making.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
