import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Larry' },
  { to: '/books', label: 'Books' },
  { to: '/media', label: 'Media' },
  { to: '/devotionals', label: 'Devotionals' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const isHome = location.pathname === '/';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b border-white/30 transition-all duration-500 ${
        scrolled || !isHome || open
          ? 'bg-navy/95 backdrop-blur-md shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center overflow-hidden group-hover:bg-gold/20 transition-colors">
              <img
                src="/logo.png"
                alt="Larry B. Bachman logo"
                className="w-9 h-9 object-contain"
              />
            </div>
            <div className="hidden sm:block">
              <span className="text-gold font-serif font-semibold text-lg leading-tight block">Larry B. Bachman</span>
              <span className="text-warm-white/40 text-xs tracking-[0.2em] uppercase">Author | Speaker</span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {links.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={`px-4 py-2 text-sm font-medium tracking-wide rounded-sm transition-all duration-300 ${
                  location.pathname === to
                    ? 'text-gold'
                    : 'text-warm-white/60 hover:text-gold'
                }`}
              >
                {label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="ml-2 inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-navy font-medium px-5 py-2 rounded-sm transition-all duration-300 text-sm"
            >
              Contact
            </Link>
          </nav>

          <button
            className="md:hidden text-warm-white/70 hover:text-gold transition-colors p-2"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-navy/98 backdrop-blur-md border-t border-gold/10 px-4 pb-6 pt-2">
          <nav className="flex flex-col gap-1">
            {links.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={`px-3 py-3 text-sm font-medium border-b border-gold/10 transition-colors ${
                  location.pathname === to
                    ? 'text-gold'
                    : 'text-warm-white/60 hover:text-gold'
                }`}
              >
                {label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="mt-3 inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-light text-navy font-medium px-5 py-3 rounded-sm transition-all duration-300 text-sm"
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
