"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/lib/site";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-3xl items-center justify-between gap-6 px-6 py-4">
        <Link
          href="/"
          className="text-sm font-medium tracking-tight transition-colors hover:text-accent"
        >
          {site.name}
        </Link>

        <nav aria-label="Primary">
          <ul className="flex gap-1">
            {site.nav.map((item) => {
              const active =
                pathname === item.href || pathname.startsWith(`${item.href}/`);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`rounded-md px-2.5 py-1.5 text-sm transition-colors ${
                      active
                        ? "bg-accent-soft text-accent"
                        : "text-muted hover:text-foreground"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
