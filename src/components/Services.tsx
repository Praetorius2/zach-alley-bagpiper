import { SERVICES } from '../config/services'
import { ServiceCardList } from './ServiceCardList'

export function Services() {
  return (
    <section
      id="services"
      className="border-t border-ink/10 px-6 py-24 md:px-12 md:py-32"
      aria-labelledby="services-heading"
    >
      <ServiceCardList
        services={SERVICES}
        heading="What I play for"
        headingId="services-heading"
      />
    </section>
  )
}
