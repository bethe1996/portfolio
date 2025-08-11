import { Quote } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
}

export function TestimonialCard({ quote, author, role }: TestimonialCardProps) {
  return (
    <div className="bg-card rounded-[var(--radius-xl)] p-8 border border-border 
                    shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-medium)]
                    hover-lift animate-fade-in">
      <Quote className="w-8 h-8 text-primary mb-6" />
      <blockquote className="text-lg text-foreground mb-6 leading-relaxed font-medium">
        "{quote}"
      </blockquote>
      <div className="border-t border-border pt-4">
        <cite className="not-italic">
          <div className="font-semibold text-foreground">{author}</div>
          <div className="text-muted-foreground text-sm">{role}</div>
        </cite>
      </div>
    </div>
  );
}