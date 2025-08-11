import { ArrowUpRight } from "lucide-react";

interface PortfolioCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  onClick?: () => void;
}

export function PortfolioCard({ title, description, image, tags, onClick }: PortfolioCardProps) {
  return (
    <div
      className="group cursor-pointer hover-lift animate-fade-in"
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onClick?.(); }}
    >
      <div className="bg-card rounded-[var(--radius-xl)] overflow-hidden border border-border 
                      shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-medium)]
                      transition-all duration-[var(--transition-normal)]">
        <div className="aspect-[4/3] overflow-hidden bg-surface">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 
                       transition-transform duration-[var(--transition-slow)]"
          />
        </div>
        <div className="p-6">
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-xl font-semibold text-foreground group-hover:text-primary 
                           transition-colors duration-[var(--transition-normal)]">
              {title}
            </h3>
            <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary 
                                   group-hover:translate-x-1 group-hover:-translate-y-1
                                   transition-all duration-[var(--transition-normal)]" />
          </div>
          <p className="text-muted-foreground mb-4 leading-relaxed">{description}</p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span 
                key={index}
                className="px-3 py-1 text-sm font-medium bg-accent text-accent-foreground 
                           rounded-full border border-border"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}