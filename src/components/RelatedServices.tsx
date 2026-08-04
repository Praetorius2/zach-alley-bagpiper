import { Link } from 'react-router-dom'
import { SERVICE_BY_SLUG, type ServiceSlug } from '../config/services'

type RelatedServicesProps = {
  slugs: ServiceSlug[]
  heading?: string
}

export function RelatedServices({
  slugs,
  heading = 'Related services',
}: RelatedServicesProps) {
  const related = slugs.map((slug) => SERVICE_BY_SLUG[slug])

  return (
    <section
      className="border-t border-ink/10 px-6 py-20 md:px-12 md:py-28"
      aria-labelledby="related-services-heading"
    >
      <div className="mx-auto max-w-5xl">
        <h2
          id="related-services-heading"
          className="text-xs font-medium tracking-[0.22em] text-ink-muted uppercase"
        >
          {heading}
        </h2>
        <ul className="mt-8 grid gap-6 md:grid-cols-2">
          {related.map((service) => (
            <li key={service.slug}>
              <Link
                to={service.path}
                className="group block border-t border-ink/10 pt-5 transition-opacity hover:opacity-90"
              >
                <h3 className="font-display text-2xl italic text-ink">
                  {service.cardTitle}
                </h3>
                <p className="mt-3 text-base leading-relaxed font-light text-ink-muted">
                  {service.cardDescription}
                </p>
                <span className="mt-4 inline-flex text-xs font-medium tracking-[0.16em] text-ink uppercase underline decoration-ink/35 underline-offset-8 group-hover:decoration-ink">
                  View service
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
