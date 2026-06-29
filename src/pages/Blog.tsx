import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const posts = [
  {
    title: '“Living a Prosperous Life: Walking in the Light of Grace” by Larry Bachman Is Now Available for Purchase',
    image: '/3-living-prosp-life-removebg-preview.png',
    imageAlt: 'Living a Prosperous Life book cover',
    paragraphs: [
      'This enlightening book, “Living a Prosperous Life,” is centered on The Lord’s Prayer stanzas and the great controversy between good and evil which aims for readers to learn about the history of Christianity and the hope found in Jesus. This book also suggests how we can live a prosperous, joy-filled life here, now, on earth. However, He does not want us to wait until then to experience His kingdom in our hearts. Extend your hand, seize it, and hold onto it.',
      'An inspiring book “Living a Prosperous Life: Walking in the Light of Grace” by Larry Bachman was proudly published by the Citi of Books. This insightful masterpiece is now available through Amazon, Barnes and Noble, and other retail sites.',
    ],
  },
  {
    title: 'Now Available “Where Are You Going? It’s About Choice” by Larry Bachman',
    image: '/whereareyougoing.png',
    imageAlt: 'Where Are You Going? It’s About Choice book cover',
    paragraphs: [
      'Welcome to the unveiling of Larry Bachman’s highly anticipated book release, “Where Are You Going? ... It’s About Choice.” Join Larry on his newest journey as he grapples with the challenges of adolescence, confronts peer pressure, and discovers the profound impact of his decisions. In this latest book, Larry’s story continues to inspire readers of all ages, offering invaluable lessons in resilience, integrity, and the power of faith. Dive into the pages of “Where Are You Going? It’s About Choice” and embark on an unforgettable adventure filled with heart, courage, and the enduring strength found in choosing the right path.',
    ],
  },
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-navy">
      <section className="relative overflow-hidden border-b border-gold/20 bg-gradient-to-br from-navy via-navy-light to-navy px-4 pb-20 pt-32 sm:px-6 sm:pb-24 sm:pt-36 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(178,143,62,0.18),transparent_64%)]" />
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-gold">News and Stories</p>
          <h1 className="mb-6 font-serif text-5xl font-bold text-gold-light sm:text-6xl">Blog</h1>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-warm-white/75">
            This blog is your exclusive gateway into the world of Larry Bachman, where creativity, inspiration, and storytelling converge. Whether you’re a dedicated fan who’s followed Larry’s journey from the beginning, or a new reader just discovering his works, this space is designed to connect with you on a deeper level.
          </p>
        </div>
      </section>

      <section className="section-padding bg-gold">
        <div className="container-wide">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {posts.map((post) => (
              <article key={post.title} className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#9f712c]/35 bg-[#251908] shadow-xl shadow-[#251908]/15 transition-transform duration-300 hover:-translate-y-1">
                <div className="flex min-h-[300px] items-center justify-center bg-gradient-to-br from-[#6b5646]/55 to-[#251908] p-8 sm:min-h-[360px]">
                  <img src={post.image} alt={post.imageAlt} className="max-h-[310px] w-full max-w-[440px] object-contain transition-transform duration-500 group-hover:scale-[1.03]" />
                </div>
                <div className="flex flex-1 flex-col p-6 text-center sm:p-8">
                  <h2 className="mb-6 font-serif text-2xl font-bold leading-snug text-warm-white sm:text-3xl">{post.title}</h2>
                  <div className="space-y-5 text-base leading-relaxed text-warm-white/70">
                    {post.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  </div>
                  <div className="mt-auto pt-8">
                    <Link to="/books" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-sm bg-gold px-6 py-3 font-semibold text-navy transition-colors hover:bg-gold-light">
                      Learn More <ArrowRight size={17} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
