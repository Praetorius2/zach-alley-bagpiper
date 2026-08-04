import { Link } from 'react-router-dom'
import { Breadcrumbs } from '../components/Breadcrumbs'
import { Inquire } from '../components/Inquire'
import { InquireCta } from '../components/InquireCta'
import { PageMeta } from '../components/PageMeta'
import { ServiceCardList } from '../components/ServiceCardList'
import { SERVICES } from '../config/services'

export function ServicesIndexPage() {
  return (
    <>
      <PageMeta
        title="Professional Bagpiper Services in Colorado | Zach Alley"
        description="Explore Highland bagpipe services for funerals, weddings, ceremonies, private events, cultural celebrations, concerts, and recordings across Colorado."
        path="/services"
        ogImage="flatirons"
      />

      <Breadcrumbs
        items={[
          { label: 'Home', to: '/' },
          { label: 'Services' },
        ]}
      />

      <section className="px-6 pb-16 pt-10 md:px-12 md:pb-24 md:pt-14" aria-labelledby="services-index-title">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-medium tracking-[0.22em] text-ink-muted uppercase">
            Zach Alley Bagpiper
          </p>
          <h1
            id="services-index-title"
            className="mt-5 font-display text-4xl leading-tight text-ink md:text-5xl"
          >
            Professional bagpiper services in Colorado
          </h1>
          <p className="mt-6 text-base leading-relaxed font-light text-ink-muted md:text-lg">
            Highland bagpipes for funerals and memorials, weddings, ceremonial occasions, private
            and corporate events, Scottish and Irish cultural celebrations, holiday gatherings,
            orchestral programs, concerts, and recordings — serving Denver, Boulder, and
            communities throughout Colorado’s Front Range, with select mountain destinations when
            scheduling allows.
          </p>
          <div className="mt-8">
            <InquireCta location="services_index" />
          </div>
        </div>
      </section>

      <section
        className="border-t border-ink/10 px-6 py-24 md:px-12 md:py-32"
        aria-labelledby="services-list-heading"
      >
        <ServiceCardList
          services={SERVICES}
          heading="Choose a service"
          headingId="services-list-heading"
        />
        <p className="mx-auto mt-10 max-w-5xl text-sm leading-relaxed font-light text-ink-muted">
          Prefer to start a conversation first?{' '}
          <Link to="/#inquire" className="underline decoration-ink/35 underline-offset-4 hover:decoration-ink">
            Send an inquiry
          </Link>{' '}
          with your date, location, and event type.
        </p>
      </section>

      <Inquire
        heading="Tell me about your event."
        body="Share the date, location, event type, and the role you have in mind for the bagpipes. Serving Denver, Boulder, and the Colorado Front Range — with travel for select mountain destinations."
        sourcePage="/services"
      />
    </>
  )
}
