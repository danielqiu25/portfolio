import Link from "next/link";
import { site } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="border-b border-line">
      <div className="mx-auto flex w-full max-w-2xl items-center justify-between gap-4 px-6 py-5">
        <Link href="/" className="text-sm font-medium tracking-tight">
          {site.name}
        </Link>
        <nav aria-label="Primary">
          <ul className="flex gap-5">
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-muted transition-colors hover:text-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
