import { Link } from 'react-router-dom'
import type { ServiceDefinition } from '../config/services'

type ServiceCardListProps = {
  services: Pick<ServiceDefinition, 'path' | 'cardTitle' | 'cardDescription'>[]
  headingId?: string
  heading?: string
}

export function ServiceCardList({
  services,
  headingId = 'services-heading',
  heading = 'Services',
}: ServiceCardListProps) {
  return (
    <div className="mx-auto max-w-5xl">
      <h2
        id={headingId}
        className="text-xs font-medium tracking-[0.22em] text-ink-muted uppercase"
      >
        {heading}
      </h2>

      <ul className="mt-10 divide-y divide-ink/10 border-y border-ink/10">
        {services.map((service) => (
          <li key={service.path}>
            <Link
              to={service.path}
              className="grid gap-3 py-8 transition-opacity hover:opacity-90 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.4fr)_auto] md:items-start md:gap-12 md:py-10"
            >
              <h3 className="font-display text-2xl italic text-ink md:text-3xl">
                {service.cardTitle}
              </h3>
              <p className="text-base leading-relaxed font-light text-ink-muted md:pt-1">
                {service.cardDescription}
              </p>
              <span className="text-xs font-medium tracking-[0.16em] text-ink uppercase underline decoration-ink/35 underline-offset-8 md:pt-3">
                Learn more
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
