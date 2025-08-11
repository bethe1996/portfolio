import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
  return (
    <div className="group text-center hover-lift animate-fade-in">
      <div className="bg-card rounded-[var(--radius-xl)] p-8 border border-border 
                      shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-medium)]
                      transition-all duration-[var(--transition-normal)]">
        <div className="w-16 h-16 bg-accent rounded-[var(--radius-lg)] flex items-center justify-center 
                        mx-auto mb-6 group-hover:bg-primary group-hover:text-primary-foreground
                        transition-all duration-[var(--transition-normal)]">
          <Icon className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-semibold mb-4 text-foreground">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </div>
  );
}