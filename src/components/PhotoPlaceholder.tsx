import { Image } from 'lucide-react';

interface PhotoPlaceholderProps {
  label?: string;
  aspect?: string;
  className?: string;
}

export default function PhotoPlaceholder({ label = 'Photo Placeholder', aspect = 'aspect-video', className = '' }: PhotoPlaceholderProps) {
  return (
    <div className={`relative flex items-center justify-center bg-navy-card/60 border border-gold/20 rounded-lg overflow-hidden ${aspect} ${className}`}>
      <div className="flex flex-col items-center gap-3">
        <Image size={32} className="text-gold/30" />
        <span className="text-gold/40 text-xs font-medium tracking-wider uppercase">{label}</span>
      </div>
    </div>
  );
}
