export function Header() {
  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 flex items-center justify-between px-6 py-5 md:px-12">
      <a
        href="#top"
        className="pointer-events-auto font-display text-lg tracking-wide text-ink transition-opacity hover:opacity-80"
      >
        Zach Alley
      </a>
      <a
        href="#inquire"
        className="pointer-events-auto text-sm font-medium tracking-[0.14em] text-ink uppercase transition-opacity hover:opacity-80"
      >
        Inquire
      </a>
    </header>
  )
}
