import Link from "next/link";
import type { HTMLAttributes, ReactNode } from "react";

function cn(...classes: Array<string | undefined | false | null>) {
  return classes.filter(Boolean).join(" ");
}

type SectionTitleProps = {
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
};

export function SectionTitle({
  eyebrow,
  title,
  description,
  className
}: SectionTitleProps) {
  return (
    <div className={cn("max-w-2xl", className)}>
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-glow/90">{eyebrow}</p>
      <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-base leading-relaxed text-mist/90">{description}</p> : null}
    </div>
  );
}

type GlassCardProps = HTMLAttributes<HTMLDivElement>;

export function GlassCard({ className, children, ...props }: GlassCardProps) {
  return (
    <div
      className={cn(
        "glass surface-glow rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1 hover:border-white/20",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

type PillProps = {
  children: ReactNode;
  className?: string;
};

export function Pill({ children, className }: PillProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-white/20 bg-white/[0.03] px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-mist",
        className
      )}
    >
      {children}
    </span>
  );
}

type ButtonProps = {
  href: string;
  children: ReactNode;
  className?: string;
};

export function PrimaryButton({ href, children, className }: ButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-glow to-emerald-300 px-5 py-3 text-sm font-bold text-slate-900 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_35px_rgba(98,255,210,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-glow/70",
        className
      )}
    >
      {children}
    </Link>
  );
}

export function SecondaryButton({ href, children, className }: ButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/[0.02] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-white/35 hover:bg-white/[0.05] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30",
        className
      )}
    >
      {children}
    </Link>
  );
}
