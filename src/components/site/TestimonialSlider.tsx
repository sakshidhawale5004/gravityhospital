import React, { useState, useEffect } from "react";
import { TESTIMONIALS } from "@/lib/site-data";
import { ChevronLeft, ChevronRight, Star, Quote, CheckCircle2 } from "lucide-react";

export function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const totalTestimonials = TESTIMONIALS.length;

  // Auto-slide every 5 seconds unless paused
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalTestimonials);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused, totalTestimonials]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalTestimonials) % totalTestimonials);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalTestimonials);
  };

  // Helper to get 3 consecutive testimonials for responsive grid view
  const getVisibleTestimonials = () => {
    const items = [];
    for (let i = 0; i < 3; i++) {
      const idx = (currentIndex + i) % totalTestimonials;
      items.push({ item: TESTIMONIALS[idx], originalIdx: idx, pos: i });
    }
    return items;
  };

  const visibleItems = getVisibleTestimonials();

  return (
    <div
      className="relative mt-10"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Controls & Header Counter */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-emerald-600">
            <CheckCircle2 className="h-3.5 w-3.5" /> 100% Verified Google Reviews
          </span>
          <span className="text-xs font-semibold text-muted-foreground hidden sm:inline">
            Showing {currentIndex + 1} of {totalTestimonials} patient stories
          </span>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handlePrev}
            aria-label="Previous Testimonial"
            className="h-10 w-10 rounded-full border border-border/80 bg-card hover:bg-primary hover:text-white transition-all shadow-sm flex items-center justify-center text-foreground font-bold"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={handleNext}
            aria-label="Next Testimonial"
            className="h-10 w-10 rounded-full border border-border/80 bg-card hover:bg-primary hover:text-white transition-all shadow-sm flex items-center justify-center text-foreground font-bold"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Responsive Slider Grid: Shows 1 on mobile, 2 on tablet, 3 on desktop */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visibleItems.map(({ item, originalIdx, pos }) => (
          <div
            key={`${item.name}-${originalIdx}`}
            className={`card-3d rounded-3xl border border-border/80 bg-card p-7 shadow-soft hover:shadow-3d hover:border-primary/40 transition-all duration-300 flex flex-col justify-between ${
              pos === 1 ? "hidden sm:flex" : ""
            } ${pos === 2 ? "hidden lg:flex" : ""}`}
          >
            <div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-500 text-amber-500" />
                  ))}
                </div>
                <Quote className="h-6 w-6 text-primary/20" />
              </div>
              <p className="mt-4 text-base leading-relaxed text-foreground/90 font-medium">
                "{item.text}"
              </p>
            </div>

            <div className="mt-6 pt-5 border-t border-border/60 flex items-center justify-between">
              <div>
                <div className="font-display font-bold text-foreground">{item.name}</div>
                <div className="text-xs font-semibold text-primary">{item.location}</div>
              </div>
              <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xs font-bold">
                {item.name[0]}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Dots */}
      <div className="mt-8 flex items-center justify-center gap-2">
        {TESTIMONIALS.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              currentIndex === idx ? "w-8 bg-primary" : "w-2 bg-border/80 hover:bg-primary/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
