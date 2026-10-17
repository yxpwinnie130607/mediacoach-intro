import { cn } from "@/lib/cn";

const links = [
  { href: "#product", label: "产品" },
  { href: "#how", label: "怎么用" },
  { href: "#why", label: "为什么" },
  { href: "#try", label: "体验" },
];

export function SiteHeader({ className }: { className?: string }) {
  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b border-line bg-background/90 backdrop-blur-sm",
        "pt-[env(safe-area-inset-top)]",
        className,
      )}
    >
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="text-sm font-semibold tracking-tight text-ink">
          MediaCoach <span className="text-ink-muted">/ 媒策</span>
        </a>
        <nav className="hidden items-center gap-6 text-sm text-ink-muted sm:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="transition-colors duration-150 hover:text-ink"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="https://mediacoach.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-accent px-3.5 py-1.5 text-sm font-medium text-white transition-opacity duration-150 hover:opacity-90"
        >
          打开产品
        </a>
      </div>
    </header>
  );
}
