import { ExternalLink, Newspaper } from 'lucide-react';

export default function Blog() {
  return (
    <div className="min-h-screen bg-navy">
      <section
        className="relative overflow-hidden border-b border-gold/10 bg-cover bg-center pb-16 pt-28 sm:pb-20 sm:pt-32"
        style={{ backgroundImage: "url('/blog-hero-bg.png')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#251908]/95 via-[#251908]/82 to-[#251908]/60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(178,143,62,0.14),transparent_60%)]" />
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-gold">News and Stories</p>
          <h1 className="mb-6 font-serif text-4xl font-bold text-warm-white sm:text-6xl">Blog</h1>
          <p className="mx-auto max-w-3xl text-base leading-relaxed text-warm-white/75 sm:text-lg">
            This blog is your exclusive gateway into the world of Larry Bachman, where creativity, inspiration, and storytelling converge. Whether you’re a dedicated fan who’s followed Larry’s journey from the beginning, or a new reader just discovering his works, this space is designed to connect with you on a deeper level.
          </p>
        </div>
      </section>

      <section className="section-padding bg-gold">
        <div className="container-wide">
          <article className="overflow-hidden rounded-2xl border border-[#9f712c]/40 bg-[#251908] shadow-2xl shadow-[#251908]/20">
            <div className="border-b border-gold/20 px-6 py-5 sm:px-10">
              <div className="flex items-center justify-between gap-4 text-gold">
                <div className="flex items-center gap-3">
                  <Newspaper size={20} />
                  <span className="text-xs font-semibold uppercase tracking-[0.22em]">Publisher Spotlight</span>
                </div>
                <span className="hidden text-xs uppercase tracking-[0.18em] text-warm-white/40 sm:block">Citi of Books</span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[1.25fr_0.75fr]">
              <div className="p-7 sm:p-10 lg:p-14">
                <h2 className="mb-6 font-serif text-4xl font-bold leading-tight text-warm-white sm:text-5xl">Featured by Citi of Books</h2>
                <p className="max-w-3xl text-lg leading-relaxed text-warm-white/70">
                  Larry B. Bachman&apos;s work has been recognized by Citi of Books, where readers can discover featured releases, author highlights, and additional information about his publications. Explore the latest feature and browse available titles.
                </p>

                <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                  <a
                    href="https://citiofbooks.com/blog/living-a-prosperous-life-walking-in-the-light-of-grace-by-larry-bachman-is-now-available-for-purchase/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-sm bg-gold px-6 py-3 font-semibold text-navy transition-colors hover:bg-gold-light"
                  >
                    Read the Feature <ExternalLink size={17} />
                  </a>
                  <a
                    href="https://citiofbooks.com/bookstore/nonfiction/where-are-you-going/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-sm border border-gold/60 px-6 py-3 font-semibold text-gold transition-colors hover:bg-gold/10 hover:text-gold-light"
                  >
                    Browse the Book <ExternalLink size={17} />
                  </a>
                </div>
              </div>

              <aside className="flex items-center border-t border-gold/20 bg-gradient-to-br from-[#6b5646]/35 to-[#251908] p-7 sm:p-10 lg:border-l lg:border-t-0 lg:p-12">
                <div className="border-y border-gold/35 py-8">
                  <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-gold">Author Recognition</p>
                  <p className="font-serif text-2xl leading-relaxed text-warm-white">
                    Stories of faith, purpose, and meaningful choices—recognized beyond the page.
                  </p>
                  <div className="mt-7 h-px w-20 bg-gold/60" />
                </div>
              </aside>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}
