import Link from "next/link";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-line">
      <div className="mx-auto w-full max-w-3xl px-6 py-10">
        <div className="flex flex-wrap items-start justify-between gap-8">
          <div>
            <p className="font-medium">{site.name}</p>
            <p className="mt-1 text-sm text-muted">{site.availability}</p>
          </div>

          <div className="flex gap-12">
            <nav aria-label="Footer">
              <p className="eyebrow">Pages</p>
              <ul className="mt-3 space-y-1.5">
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

            <div>
              <p className="eyebrow">Elsewhere</p>
              <ul className="mt-3 space-y-1.5">
                <li>
                  <a
                    href={`mailto:${site.email}`}
                    className="text-sm text-muted transition-colors hover:text-foreground"
                  >
                    Email
                  </a>
                </li>
                <li>
                  <a
                    href={site.links.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-muted transition-colors hover:text-foreground"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href={site.links.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-muted transition-colors hover:text-foreground"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <p className="mt-10 text-xs text-subtle">
          © {new Date().getFullYear()} {site.name}. Built with Next.js.
        </p>
      </div>
    </footer>
  );
}
