import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PortfolioItemDetails {
  title: string;
  description: string;
  result?: string;
  images?: string[];
  tags?: string[];
  duration?: string;
  process?: string[];
}

interface PortfolioDetailsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  item: PortfolioItemDetails | null;
}

export function PortfolioDetailsDialog({
  open,
  onOpenChange,
  item,
}: PortfolioDetailsDialogProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!item) return null;

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? (item.images?.slice(1, 7).length || 1) - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === (item.images?.slice(1, 7).length || 1) - 1 ? 0 : prev + 1
    );
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="
          w-[95vw] max-w-[380px] sm:max-w-[600px] md:max-w-3xl lg:max-w-5xl 
          max-h-[90vh] 
          overflow-hidden 
          p-0 
          bg-background 
          rounded-xl
        "
      >
        <div className="flex flex-col md:grid md:grid-cols-12 h-full">
          {/* Hero + Gallery */}
          <div className="md:col-span-7 bg-muted overflow-y-auto">
            {item.images?.length ? (
              <>
                <img
                  src={item.images[0]}
                  alt={`${item.title} hero`}
                  className="w-full object-cover max-h-[30vh] sm:max-h-[40vh] md:max-h-[50vh]"
                  loading="eager"
                />
                {item.images.length > 1 && (
                  <>
                    {/* Carousel for mobile (<sm) */}
                    <div className="sm:hidden relative p-3">
                      <div className="relative w-full h-48 overflow-hidden">
                        <img
                          src={item.images.slice(1, 7)[currentImageIndex]}
                          alt={`${item.title} gallery image ${currentImageIndex + 2}`}
                          className="w-full h-full object-cover rounded"
                          loading="lazy"
                        />
                        <button
                          onClick={handlePrevImage}
                          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
                          aria-label="Previous image"
                        >
                          <ChevronLeft size={20} />
                        </button>
                        <button
                          onClick={handleNextImage}
                          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
                          aria-label="Next image"
                        >
                          <ChevronRight size={20} />
                        </button>
                      </div>
                      <div className="flex justify-center gap-1 mt-2">
                        {item.images.slice(1, 7).map((_, idx) => (
                          <div
                            key={idx}
                            className={`h-2 w-2 rounded-full ${
                              idx === currentImageIndex ? "bg-primary" : "bg-muted"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    {/* Grid for larger screens (>=sm) */}
                    <div className="hidden sm:grid sm:grid-cols-2 md:grid-cols-3 gap-2 p-3 sm:p-4">
                      {item.images.slice(1, 7).map((src, idx) => (
                        <img
                          key={idx}
                          src={src}
                          alt={`${item.title} gallery image ${idx + 2}`}
                          className="w-full h-20 sm:h-24 md:h-28 object-cover rounded"
                          loading="lazy"
                        />
                      ))}
                    </div>
                  </>
                )}
              </>
            ) : (
              <div className="w-full h-[25vh] sm:h-[30vh] md:h-[50vh] bg-accent" />
            )}
          </div>

          {/* Case Study */}
          <div className="md:col-span-5 p-4 sm:p-5 md:p-6 flex flex-col overflow-y-auto max-h-[90vh]">
            <DialogHeader>
              <DialogTitle className="text-xl sm:text-2xl md:text-3xl font-serif mb-2">
                {item.title}
              </DialogTitle>
              <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                {item.tags?.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs sm:text-sm">
                    {tag}
                  </Badge>
                ))}
                {item.duration && (
                  <Badge className="bg-primary text-primary-foreground text-xs sm:text-sm">
                    {item.duration}
                  </Badge>
                )}
              </div>
              <DialogDescription className="text-sm sm:text-base md:text-lg leading-relaxed text-foreground">
                {item.description}
              </DialogDescription>
            </DialogHeader>

            {item.process?.length > 0 && (
              <section className="mt-4 sm:mt-5 md:mt-6">
                <h4 className="text-sm sm:text-base md:text-lg font-semibold mb-2 sm:mb-3">Approach</h4>
                <ol className="list-decimal pl-4 sm:pl-5 space-y-1.5 sm:space-y-2 text-muted-foreground text-xs sm:text-sm md:text-base">
                  {item.process.map((step, idx) => (
                    <li key={idx}>{step}</li>
                  ))}
                </ol>
              </section>
            )}

            {item.result && (
              <section className="mt-4 sm:mt-5 md:mt-6">
                <h4 className="text-sm sm:text-base md:text-lg font-semibold mb-2 sm:mb-3">Outcome</h4>
                <p className="text-muted-foreground leading-relaxed text-xs sm:text-sm md:text-base">
                  {item.result}
                </p>
              </section>
            )}

            <div className="mt-auto pt-4 sm:pt-5 md:pt-6 border-t border-border text-xs sm:text-sm text-muted-foreground">
              © {new Date().getFullYear()} — Project by You
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}