import { Video } from 'lucide-react';

interface VideoPlaceholderProps {
  label?: string;
  aspect?: string;
  className?: string;
}

export default function VideoPlaceholder({ label = 'Video Placeholder', aspect = 'aspect-video', className = '' }: VideoPlaceholderProps) {
  return (
    <div className={`relative flex items-center justify-center bg-navy-card/60 border border-gold/20 rounded-lg overflow-hidden ${aspect} ${className}`}>
      <div className="flex flex-col items-center gap-3">
        <Video size={32} className="text-gold/30" />
        <span className="text-gold/40 text-xs font-medium tracking-wider uppercase">{label}</span>
      </div>
    </div>
  );
}
