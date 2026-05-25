const HAZARD_STRIPE =
  "repeating-linear-gradient(-45deg, #0a0a0f 0, #0a0a0f 14px, #facc15 14px, #facc15 28px)";

export function ProblematticSolutionsFooter() {
  return (
    <footer className="relative border-t border-white/10 bg-[#0a0a0f]">
      <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col items-center gap-4">
        <p
          className="text-center text-sm text-white/50"
          style={{ fontWeight: 500, letterSpacing: "0.02em" }}
        >
          Another problematic production by:
        </p>

        <a
          href="https://problematticsolutions.com"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col items-center gap-3 text-center no-underline"
        >
          <div
            className="h-1.5 w-48 max-w-full rounded-full opacity-90 group-hover:opacity-100 transition-opacity"
            style={{ background: HAZARD_STRIPE }}
            aria-hidden
          />

          <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-0 gap-0.5">
            <span
              className="text-2xl sm:text-3xl tracking-tight text-white group-hover:text-[#facc15] transition-colors"
              style={{ fontWeight: 800, letterSpacing: "-0.02em" }}
            >
              Problemattic
            </span>
            <span
              className="text-2xl sm:text-3xl tracking-tight text-[#facc15] sm:ml-0"
              style={{ fontWeight: 800, letterSpacing: "-0.02em" }}
            >
              Solutions
            </span>
          </div>

          <span className="text-xs uppercase tracking-[0.25em] text-white/40 group-hover:text-white/60 transition-colors">
            problematticsolutions.com
          </span>
        </a>
      </div>
    </footer>
  );
}
