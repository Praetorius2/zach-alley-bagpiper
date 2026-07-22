export function MidImage() {
  return (
    <section className="relative h-[80svh] min-h-[520px] w-full overflow-hidden" aria-label="Featured performance">
      <picture>
        <source srcSet="/images/cathedral.webp" type="image/webp" />
        <img
          src="/images/cathedral.png"
          alt="Zach Alley playing bagpipes inside a gothic cathedral"
          width={1122}
          height={1402}
          className="absolute inset-0 h-full w-full object-cover object-center"
          loading="lazy"
        />
      </picture>
      <div
        className="absolute inset-0 bg-gradient-to-t from-night via-night/40 to-transparent"
        aria-hidden="true"
      />
      <div className="relative z-10 flex h-full items-end px-6 pb-16 md:px-12 md:pb-24">
        <blockquote className="max-w-2xl font-display text-2xl leading-snug text-ink italic md:text-3xl">
          Two to four traditional tunes, placed at the key moments — to maximize the emotional
          impact of your event.
        </blockquote>
      </div>
    </section>
  )
}
