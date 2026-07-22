const expectations = [
  {
    number: '01',
    title: 'Punctual & professional',
    description: 'I arrive early, prepared, and ready to perform.',
  },
  {
    number: '02',
    title: 'Authentic appearance',
    description: 'Performing in high-quality, traditional Highland attire.',
  },
  {
    number: '03',
    title: 'Seamless planning',
    description:
      'I work closely with you, your event coordinator, or director to ensure perfect timing.',
  },
  {
    number: '04',
    title: 'Rates & booking',
    description:
      'Rates vary depending on location and timing. Reach out with your event date and location to discuss how bagpipes could make your event special.',
  },
]

export function Expect() {
  return (
    <section
      id="expect"
      className="border-t border-ink/10 px-6 py-24 md:px-12 md:py-32"
      aria-labelledby="expect-heading"
    >
      <div className="mx-auto max-w-5xl">
        <p
          id="expect-heading"
          className="text-xs font-medium tracking-[0.22em] text-ink-muted uppercase"
        >
          What to expect when you book
        </p>

        <ol className="mt-12 space-y-12 md:space-y-14">
          {expectations.map((item) => (
            <li
              key={item.number}
              className="grid gap-3 md:grid-cols-[4rem_minmax(0,1fr)_minmax(0,1.4fr)] md:items-start md:gap-10"
            >
              <span className="text-sm tracking-[0.12em] text-ink-faint">{item.number}</span>
              <h3 className="font-display text-2xl italic text-ink md:text-3xl">{item.title}</h3>
              <p className="text-base leading-relaxed font-light text-ink-muted md:pt-2">
                {item.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
