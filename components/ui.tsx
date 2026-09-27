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
      <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.19em] text-muted/80">{eyebrow}</p>
      <h2 className="text-[2rem] leading-tight text-ink sm:text-[2.45rem]">{title}</h2>
      {description ? <p className="mt-4 text-base leading-relaxed text-muted">{description}</p> : null}
    </div>
  );
}

type CardProps = HTMLAttributes<HTMLDivElement>;

export function SurfaceCard({ className, children, ...props }: CardProps) {
  return (
    <div className={cn("rounded-[1.7rem] bg-[#f8f1e5]/80 p-6 shadow-soft", className)} {...props}>
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
        "inline-flex items-center rounded-full bg-[#f1e6d7] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#75654f]",
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
        "inline-flex items-center justify-center rounded-xl bg-ink px-5 py-3 text-sm font-semibold text-[#fffdf9] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#2a241e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/35",
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
        "inline-flex items-center justify-center rounded-xl bg-[#efe5d7] px-5 py-3 text-sm font-semibold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#e7d9c7] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/20",
        className
      )}
    >
      {children}
    </Link>
  );
}