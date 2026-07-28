import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  image?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-hero">
      {/* 3D floating background orbs */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-gradient-brand opacity-30 blur-3xl float-slow" />
      <div className="pointer-events-none absolute top-20 right-10 h-64 w-64 rounded-full bg-gradient-orange opacity-30 blur-3xl float-medium" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-40 w-[70%] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-16 lg:py-24 grid gap-12 lg:grid-cols-12 items-center">
        <div className="lg:col-span-6 animate-fade-in-up">
          {eyebrow && (
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary shadow-sm">
              {eyebrow}
            </div>
          )}
          <h1 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.08] text-foreground">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-5 text-lg text-muted-foreground max-w-xl leading-relaxed">{subtitle}</p>
          )}
          {children && <div className="mt-8 flex flex-wrap gap-4">{children}</div>}
        </div>

        {image && (
          <div className="lg:col-span-6 relative animate-fade-in-up">
            <div className="relative rounded-3xl overflow-hidden hero-3d-card border border-border/60 bg-card">
              <img src={image} alt="Gravity Hospital" className="min-h-[440px] sm:min-h-[520px] lg:min-h-[560px] w-full aspect-[4/3] object-cover object-center transition-transform duration-700 hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 via-transparent to-black/10" />

              {/* 3D Floating Glass Badge Overlay */}
              <div className="absolute bottom-6 left-6 right-6 sm:right-auto sm:max-w-xs glass rounded-2xl p-4 border border-white/20 shadow-3d float-slow">
                <div className="flex items-center gap-3">
                  <div className="h-3 w-3 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                  <div>
                    <div className="font-display text-sm font-bold text-foreground">24×7 Emergency & ICU</div>
                    <div className="text-xs text-muted-foreground">Always open for critical patient admissions</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative 3D floating shapes */}
            <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-2xl bg-gradient-orange shadow-3d float-medium -z-10" />
            <div className="absolute -top-6 -right-6 h-20 w-20 rounded-full bg-gradient-brand shadow-3d float-3d -z-10" />
          </div>
        )}
      </div>
    </section>
  );
}

