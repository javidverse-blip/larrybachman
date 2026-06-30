import { ArrowRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

type BookCategory = 'featured' | 'with-video' | 'other';

type Book = {
  title: string;
  description: string;
  image: string;
  amazonUrl: string;
  videoUrl?: string;
  category: BookCategory;
  featured: boolean;
};

const books: Book[] = [
  {
    title: 'Lady and Jesse',
    description:
      'A heartfelt story of love, faith, and commitment. Lady and Jesse Make a Promise follows a dream to build a Bible-based home for disadvantaged children, showing how trust, sacrifice, and hope can shape a life of purpose.',
    image: '/6-lady-and-jesse-removebg-preview.png',
    amazonUrl: 'https://a.co/d/04w5pDKN',
    videoUrl: 'https://www.youtube.com/embed/_RlRGPx7rAA',
    category: 'featured',
    featured: true,
  },
  {
    title: 'Tourniquet',
    description:
      'A faith-centered story about pain, healing, and redemption. Tourniquet points readers toward forgiveness, restoration, and God’s power to bring hope even through life’s deepest wounds.',
    image: '/5-tourniquet-removebg-preview.png',
    amazonUrl: 'https://a.co/d/0gqRW2th',
    videoUrl: 'https://www.youtube.com/embed/_-gz2G9L4g8',
    category: 'featured',
    featured: true,
  },
  {
    title: 'Where Are You?',
    description:
      'A children’s faith-based book built around the question God asked Adam: “Where are you?” Through simple storytelling, it teaches children about faith, trust, obedience, and God’s loving call to His people.',
    image: '/4-where-are-are_you-removebg-preview.png',
    amazonUrl: 'https://a.co/d/00u8BRoM',
    videoUrl: 'https://www.youtube.com/embed/g51oxxTjM-8',
    category: 'with-video',
    featured: false,
  },
  {
    title: 'Where Are You? Spanish Edition',
    description:
      'The Spanish edition of Where Are You? introduces children and families to one of the Bible’s most meaningful questions. It encourages readers to reflect on faith, obedience, accountability, and where they stand with God.',
    image: '/where-are-you-spanish.png',
    // New Amazon URL matched to the Spanish cover; swap here if the listing order differs.
    amazonUrl: 'https://a.co/d/0bTw3yAL',
    category: 'with-video',
    featured: false,
  },
  {
    title: 'Where Are You Going?',
    description:
      'A faith-based story about Larry facing peer pressure, conflict, friendship, and difficult choices while learning more about God and the Bible. The book helps young readers understand choice, accountability, and biblical guidance.',
    image: '/where-are-you-going.png',
    // New Amazon URL matched to the Where Are You Going? cover; swap here if needed.
    amazonUrl: 'https://a.co/d/0fUqg4gT',
    videoUrl: 'https://www.youtube.com/embed/les4leIlBN8',
    category: 'with-video',
    featured: false,
  },
  {
    title: 'Lady and the Carpenter',
    description:
      'Out of an unfortunate chain of events comes a renewed message of faith, family, and grace. This story reminds readers that God can restore what feels broken.',
    image: '/1-lady-and-carpenter-removebg-preview.png',
    amazonUrl: 'https://a.co/d/0akINls7',
    category: 'other',
    featured: false,
  },
  {
    title: 'Reuben versus Meyer',
    description:
      'A story of choices, consequences, and spiritual lessons. Reuben versus Meyer invites readers to reflect on character, responsibility, and where they stand when life takes an unexpected turn.',
    image: '/2-reuben-versus-meyer-removebg-preview.png',
    amazonUrl: 'https://a.co/d/0bpVYBWx',
    category: 'other',
    featured: false,
  },
  {
    title: 'Living a Prosperous Life',
    description:
      'Living a Prosperous Life explores the battle between good and evil, the hope found in Jesus, and the possibility of living with joy, purpose, and spiritual prosperity.',
    image: '/3-living-prosp-life-removebg-preview.png',
    amazonUrl: 'https://a.co/d/0iDQEZ8g',
    category: 'other',
    featured: false,
  },
];

function AmazonButton({ book }: { book: Book }) {
  return (
    <a
      href={book.amazonUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center gap-2 rounded-sm bg-gold px-5 py-3 text-base font-semibold text-navy transition-colors duration-300 hover:bg-gold-light"
    >
      Get a Copy <ExternalLink size={16} />
    </a>
  );
}

function VideoEmbed({ book }: { book: Book }) {
  if (!book.videoUrl) return null;

  return (
    <div className="mt-6 border-t border-gold/15 pt-6">
      <div className="aspect-video overflow-hidden rounded-lg border border-gold/20 bg-[#120c04] shadow-inner">
        <iframe
          className="h-full w-full"
          src={book.videoUrl}
          title={`${book.title} video`}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    </div>
  );
}

function BookCard({ book, featured = false }: { book: Book; featured?: boolean }) {
  return (
    <article className="group flex h-full flex-col rounded-xl border border-gold/25 bg-navy-card/55 p-5 shadow-xl shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 sm:p-6">
      <div className={featured ? 'grid gap-6 sm:grid-cols-[180px_1fr]' : ''}>
        <div className={`${featured ? 'h-[270px]' : 'h-[320px]'} flex items-center justify-center rounded-lg bg-[#1b1207] p-5`}>
          <img
            src={book.image}
            alt={`${book.title} book cover`}
            className="h-full w-full object-contain drop-shadow-[0_12px_12px_rgba(0,0,0,0.35)] transition-transform duration-500 group-hover:scale-[1.02]"
          />
        </div>
        <div className={`flex flex-col ${featured ? '' : 'pt-5'}`}>
          {featured && <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold">Featured Book</p>}
          <h3 className="mb-3 font-serif text-2xl font-bold leading-snug text-warm-white">{book.title}</h3>
          <p className="mb-6 flex-1 text-base leading-relaxed text-warm-white/70">{book.description}</p>
          <div className="self-start"><AmazonButton book={book} /></div>
        </div>
      </div>
      <VideoEmbed book={book} />
    </article>
  );
}

export default function Books() {
  const featuredBooks = books.filter((book) => book.featured);
  const videoBooks = books.filter((book) => book.category === 'with-video');
  const otherBooks = books.filter((book) => book.category === 'other');

  return (
    <div className="min-h-screen bg-navy">
      <section
        className="relative overflow-hidden border-b border-gold/10 bg-cover bg-center pb-16 pt-28 sm:pb-20 sm:pt-32"
        style={{ backgroundImage: "url('/books-bg.png')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#251908]/95 via-[#251908]/82 to-[#251908]/60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(178,143,62,0.14),transparent_60%)]" />
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-gold">Published Works</p>
          <h1 className="mb-6 font-serif text-4xl font-bold text-warm-white sm:text-6xl">Books</h1>
          <p className="mx-auto max-w-3xl text-base leading-relaxed text-warm-white/75 sm:text-lg">
Every story has a beginning. Every life has another chapter. Whether through fiction, devotionals, or stories of redemption, Larry B. Bachman's books remind us that no matter where life has taken us, <span className="font-semibold text-gold-light">your story isn't over.</span>
          </p>
        </div>
      </section>

      <BookSection eyebrow="Selected Works" title="Featured Books" className="bg-navy">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {featuredBooks.map((book) => <BookCard key={book.title} book={book} featured />)}
        </div>
      </BookSection>

      <BookSection eyebrow="Watch & Read" title="Where Are You Series" className="border-y border-navy/15 bg-gold" light>
        <div className="grid grid-cols-1 gap-7 lg:grid-cols-3">
          {videoBooks.map((book) => <BookCard key={book.title} book={book} />)}
        </div>
      </BookSection>

      <BookSection eyebrow="The Collection" title="Other Books" className="bg-navy">
        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
          {otherBooks.map((book) => <BookCard key={book.title} book={book} />)}
        </div>
      </BookSection>

      <section className="border-y border-navy/15 bg-gold px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="container-wide grid grid-cols-1 items-center gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
          <div className="mx-auto aspect-square w-full max-w-md overflow-hidden rounded-xl border border-gold/25 bg-navy-card/50 shadow-xl shadow-black/25">
            <img src="/larry-office.png" alt="Larry B. Bachman" className="h-full w-full object-cover" />
          </div>
          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-navy/65">Behind the Stories</p>
            <h2 className="mb-6 font-serif text-3xl font-bold text-navy sm:text-4xl">Meet the Author</h2>
            <div className="space-y-4 leading-relaxed text-navy/75">
              <p>Larry B. Bachman is an author whose stories are shaped by a lifetime of faith, creativity, and real-life experiences. From children&apos;s books and inspiring novels to faith-based devotionals and Christian fiction, his writing encourages readers to discover hope, purpose, and the enduring promises of God.</p>
              <p>Drawing from experiences in music, publishing, filmmaking, and ministry, Larry creates stories that entertain, inspire, and point readers toward timeless biblical truths. Whether writing for children or adults, his desire is to remind every reader that no matter where life leads, God is never finished writing their story.</p>
            </div>
            <Link to="/about" className="mt-7 inline-flex items-center gap-2 font-semibold text-navy transition-colors hover:text-[#6b451b]">
              Read Larry&apos;s Story <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function BookSection({ eyebrow, title, className, children, light = false }: { eyebrow: string; title: string; className: string; children: React.ReactNode; light?: boolean }) {
  return (
    <section className={`${className} px-4 py-16 sm:px-6 sm:py-20 lg:px-8`}>
      <div className="container-wide">
        <div className="mb-10 text-center">
          <p className={`mb-3 text-xs font-semibold uppercase tracking-[0.22em] ${light ? 'text-navy/65' : 'text-gold'}`}>{eyebrow}</p>
          <h2 className={`font-serif text-3xl font-bold sm:text-4xl ${light ? 'text-navy' : 'text-warm-white'}`}>{title}</h2>
        </div>
        {children}
      </div>
    </section>
  );
}
