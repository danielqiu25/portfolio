import type { TraceLine } from "@/lib/projects";

export function TraceBlock({
  caption,
  lines,
}: {
  caption: string;
  lines: readonly TraceLine[];
}) {
  return (
    <figure className="mt-7 overflow-hidden rounded-xl border border-line bg-panel">
      <div className="flex items-center gap-1.5 border-b border-line px-4 py-2.5">
        <span
          aria-hidden="true"
          className="size-2.5 rounded-full bg-line-strong"
        />
        <span
          aria-hidden="true"
          className="size-2.5 rounded-full bg-line-strong"
        />
        <span
          aria-hidden="true"
          className="size-2.5 rounded-full bg-line-strong"
        />
        <figcaption className="ml-2 font-mono text-[11px] text-subtle">
          {caption}
        </figcaption>
      </div>

      <div className="overflow-x-auto px-4 py-4 font-mono text-[12.5px] leading-relaxed sm:text-[13px]">
        {lines.map((line, i) => {
          if (line.tone === "head") {
            return (
              <p key={i} className="text-foreground">
                {line.text}
              </p>
            );
          }
          if (line.tone === "note") {
            return (
              <p key={i} className="mt-3 border-t border-line pt-3 text-accent">
                {line.text}
              </p>
            );
          }
          return (
            <p
              key={i}
              className="flex items-baseline justify-between gap-6 whitespace-nowrap text-muted"
            >
              <span className="pl-4">{line.text}</span>
              {line.delta ? (
                <span className="shrink-0 text-subtle">{line.delta}</span>
              ) : null}
            </p>
          );
        })}
      </div>
    </figure>
  );
}
