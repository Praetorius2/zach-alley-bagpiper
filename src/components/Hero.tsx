export function Hero() {
  return (
    <section
      id="top"
      className="relative h-[100svh] min-h-[640px] w-full overflow-hidden"
      aria-label="Introduction"
    >
      <img
        src="/images/flatirons.png"
        alt="Zach Alley playing Highland bagpipes with the Flatirons in the background"
        className="absolute inset-0 h-full w-full object-cover object-[center_top]"
        fetchPriority="high"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-night via-night/55 to-night/20"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-night/50 via-transparent to-transparent" aria-hidden="true" />

      <div className="relative z-10 flex h-full flex-col justify-end px-6 pb-16 md:px-12 md:pb-24">
        <div className="reveal is-visible max-w-3xl">
          <h1 className="font-display text-[2.75rem] leading-[1.05] text-ink sm:text-5xl md:text-6xl lg:text-7xl">
            Highland bagpipes
            <span className="mt-1 block italic">for the moments that matter.</span>
          </h1>
          <p className="mt-6 max-w-xl text-sm leading-relaxed font-light text-ink/90 md:text-base">
            Weddings, funerals, and ceremonies. Based in the Denver–Boulder area, available across
            Colorado and beyond.
          </p>
          <a
            href="#inquire"
            className="mt-8 inline-flex text-sm font-medium tracking-[0.16em] text-ink uppercase underline decoration-ink/35 underline-offset-8 transition hover:decoration-ink"
          >
            Inquire
          </a>
        </div>
      </div>
    </section>
  )
}
