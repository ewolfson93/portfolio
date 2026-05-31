import { cn } from "@/lib/utils";

export function Badge({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-border bg-surface-2 px-3 py-1 font-mono text-xs tracking-wide text-muted-strong",
        className,
      )}
    >
      {children}
    </span>
  );
}
