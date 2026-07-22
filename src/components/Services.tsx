const services = [
  {
    title: 'Weddings',
    description:
      'Processionals, recessionals, or a surprise performance to greet guests as they arrive at the venue.',
  },
  {
    title: 'Funerals & Memorials',
    description:
      'Graveside honors, opening or closing tributes, or a final lament such as Amazing Grace.',
  },
  {
    title: 'Special Events',
    description:
      'Retirement parties, corporate gatherings, golf tournaments, and cultural celebrations.',
  },
]

export function Services() {
  return (
    <section
      id="services"
      className="border-t border-ink/10 px-6 py-24 md:px-12 md:py-32"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-5xl">
        <h2
          id="services-heading"
          className="text-xs font-medium tracking-[0.22em] text-ink-muted uppercase"
        >
          What I play for
        </h2>

        <ul className="mt-10 divide-y divide-ink/10 border-y border-ink/10">
          {services.map((service) => (
            <li
              key={service.title}
              className="grid gap-3 py-8 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.4fr)] md:gap-12 md:py-10"
            >
              <h3 className="font-display text-2xl italic text-ink md:text-3xl">{service.title}</h3>
              <p className="text-base leading-relaxed font-light text-ink-muted md:pt-1">
                {service.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
