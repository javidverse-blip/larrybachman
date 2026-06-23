import { Link } from 'react-router-dom';
import { BookOpen, Music, Heart, Mail } from 'lucide-react';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Larry' },
  { to: '/books', label: 'Books' },
  { to: '/media', label: 'Media' },
  { to: '/devotionals', label: 'Devotionals' },
  { to: '/contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="bg-navy border-t border-gold/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center">
                <span className="font-serif text-gold text-lg font-bold">LB</span>
              </div>
              <div>
                <p className="font-serif text-gold text-lg font-semibold">Larry Bachman</p>
                <p className="text-xs text-warm-white/30 tracking-[0.2em] uppercase">Author · Musician · Speaker</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-warm-white/40">
              Born in Pennsylvania. Shaped by faith, music, and the open land. Sharing stories that matter.
            </p>
          </div>

          <div>
            <h4 className="text-gold font-semibold text-sm uppercase tracking-[0.2em] mb-5">Explore</h4>
            <ul className="space-y-3">
              {navLinks.map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className="text-sm text-warm-white/40 hover:text-gold transition-colors duration-300">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-gold font-semibold text-sm uppercase tracking-[0.2em] mb-5">A Life Well Lived</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-sm text-warm-white/40">
                <BookOpen size={15} className="text-gold/60 shrink-0" />
                Author of faith-based books and stories
              </li>
              <li className="flex items-center gap-3 text-sm text-warm-white/40">
                <Music size={15} className="text-gold/60 shrink-0" />
                Professional musician for 20+ years
              </li>
              <li className="flex items-center gap-3 text-sm text-warm-white/40">
                <Heart size={15} className="text-gold/60 shrink-0" />
                All proceeds support ministry and service
              </li>
              <li className="flex items-center gap-3 text-sm text-warm-white/40">
                <Mail size={15} className="text-gold/60 shrink-0" />
                <a href="mailto:info@larrybachman.com" className="hover:text-gold transition-colors">info@larrybachman.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gold/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-warm-white/25">&copy; {new Date().getFullYear()} Larry Bachman. All rights reserved.</p>
          <p className="text-xs text-warm-white/25">Leaving a legacy of value.</p>
        </div>
      </div>
    </footer>
  );
}
