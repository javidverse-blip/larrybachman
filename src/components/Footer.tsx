import { Link } from 'react-router-dom';
import { BookOpen, Facebook, Heart, Mail, Youtube } from 'lucide-react';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/books', label: 'Books' },
  { to: '/music', label: 'Music' },
  { to: '/media', label: 'Media' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="bg-navy border-t border-gold/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center overflow-hidden">
                <img
                  src="/logo.webp"
                  alt="Larry B. Bachman logo"
                  width="36"
                  height="36"
                  loading="lazy"
                  decoding="async"
                  className="w-9 h-9 object-contain"
                />
              </div>
              <div>
                <p className="font-serif text-gold text-lg font-semibold">Larry B. Bachman</p>
                <p className="text-xs text-[#ffffff] tracking-[0.2em] uppercase">Author | Speaker</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-[#ffffff]">
              Born in Pennsylvania. Shaped by faith, music, and the open land. Sharing stories that matter.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href="https://www.youtube.com/@Larrybbachman"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Larry B. Bachman on YouTube"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-gold/25 text-warm-white/40 transition-colors hover:border-gold/50 hover:bg-gold/10 hover:text-gold"
              >
                <Youtube size={18} />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100064048332341"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Larry B. Bachman on Facebook"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-gold/25 text-warm-white/40 transition-colors hover:border-gold/50 hover:bg-gold/10 hover:text-gold"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-gold font-semibold text-sm uppercase tracking-[0.2em] mb-5">Explore</h4>
            <ul className="space-y-3">
              {navLinks.map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className="text-sm text-[#ffffff] hover:text-gold transition-colors duration-300">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-gold font-semibold text-sm uppercase tracking-[0.2em] mb-5">A Life Well Lived</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-sm text-[#ffffff]">
                <BookOpen size={15} className="text-gold/60 shrink-0" />
                Author of faith-based books and stories
              </li>
              <li className="flex items-center gap-3 text-sm text-[#ffffff]">
                <Heart size={15} className="text-gold/60 shrink-0" />
                All proceeds support ministry and service
              </li>
              <li className="flex items-center gap-3 text-sm text-[#ffffff]">
                <Mail size={15} className="text-gold/60 shrink-0" />
                <a href="mailto:larbach98@gmail.com" className="hover:text-gold transition-colors">larbach98@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gold/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#ffffff]">&copy; {new Date().getFullYear()} Larry Bachman. All rights reserved.</p>
          <div className="text-center sm:text-right">
            <p className="text-xs text-[#ffffff]">Designed by JavidVerse – For All Creative Solutions</p>
            <p className="text-xs text-[#ffffff]">
              Email us at:{' '}
              <a href="mailto:javidverse@gmail.com" className="transition-colors hover:text-gold">javidverse@gmail.com</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
