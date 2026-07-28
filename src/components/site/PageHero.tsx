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
      {/* 3D floating orbs */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-gradient-brand opacity-30 blur-3xl float-slow" />
      <div className="pointer-events-none absolute top-20 right-10 h-56 w-56 rounded-full bg-gradient-orange opacity-30 blur-3xl float-medium" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-40 w-[70%] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-16 lg:py-24 grid gap-10 lg:grid-cols-2 items-center">
        <div className="animate-fade-in-up">
          {eyebrow && (
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
              {eyebrow}
            </div>
          )}
          <h1 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05]">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-5 text-lg text-muted-foreground max-w-xl">{subtitle}</p>
          )}
          {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
        </div>

        {image && (
          <div className="relative animate-fade-in-up">
            <div className="relative rounded-3xl overflow-hidden shadow-3d ring-brand tilt">
              <img src={image} alt="" className="h-[380px] w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-2xl bg-gradient-orange shadow-3d float-medium" />
            <div className="absolute -top-6 -right-6 h-20 w-20 rounded-full bg-gradient-brand shadow-3d float-slow" />
          </div>
        )}
      </div>
    </section>
  );
}
