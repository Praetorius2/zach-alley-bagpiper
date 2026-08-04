import { Breadcrumbs } from '../components/Breadcrumbs'
import { FaqSection } from '../components/FaqSection'
import { Inquire } from '../components/Inquire'
import { JsonLd } from '../components/JsonLd'
import { PageMeta } from '../components/PageMeta'
import { RelatedServices } from '../components/RelatedServices'
import { ServiceHero } from '../components/ServiceHero'
import type { ServiceDefinition } from '../config/services'
import { PERSON_ID, absoluteUrl } from '../config/site'

type ServicePageProps = {
  service: ServiceDefinition
}

function ProseBlocks({ paragraphs }: { paragraphs: string[] }) {
  return (
    <div className="mt-8 space-y-5 text-base leading-relaxed font-light text-ink-muted md:text-lg">
      {paragraphs.map((paragraph) => (
        <p key={paragraph.slice(0, 48)}>{paragraph}</p>
      ))}
    </div>
  )
}

function ExpectList({ items }: { items: string[] }) {
  return (
    <ul className="mt-8 space-y-4 text-base leading-relaxed font-light text-ink-muted md:text-lg">
      {items.map((item) => (
        <li key={item.slice(0, 48)} className="border-t border-ink/10 pt-4 first:border-t-0 first:pt-0">
          {item}
        </li>
      ))}
    </ul>
  )
}

export function ServicePage({ service }: ServicePageProps) {
  const pageUrl = absoluteUrl(service.path)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: absoluteUrl('/'),
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Services',
            item: absoluteUrl('/services'),
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: service.cardTitle,
            item: pageUrl,
          },
        ],
      },
      {
        '@type': 'Service',
        '@id': `${pageUrl}#service`,
        name: service.schemaName,
        description: service.schemaDescription,
        url: pageUrl,
        provider: { '@id': PERSON_ID },
        areaServed: {
          '@type': 'State',
          name: 'Colorado',
        },
        serviceType: service.schemaName,
      },
      {
        '@type': 'FAQPage',
        '@id': `${pageUrl}#faq`,
        mainEntity: service.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      },
    ],
  }

  return (
    <>
      <PageMeta
        title={service.title}
        description={service.description}
        path={service.path}
        ogImage={service.ogImage}
      />
      <JsonLd data={jsonLd} />

      <Breadcrumbs
        items={[
          { label: 'Home', to: '/' },
          { label: 'Services', to: '/services' },
          { label: service.navLabel },
        ]}
      />

      <ServiceHero title={service.h1} intro={service.intro} image={service.ogImage} />

      <section
        className="px-6 py-24 md:px-12 md:py-32"
        aria-labelledby={`${service.slug}-overview`}
      >
        <div className="mx-auto max-w-3xl">
          <h2
            id={`${service.slug}-overview`}
            className="text-xs font-medium tracking-[0.22em] text-ink-muted uppercase"
          >
            {service.overviewHeading}
          </h2>
          <ProseBlocks paragraphs={service.overview} />
        </div>
      </section>

      <section
        className="border-t border-ink/10 px-6 py-24 md:px-12 md:py-32"
        aria-labelledby={`${service.slug}-fit`}
      >
        <div className="mx-auto max-w-3xl">
          <h2
            id={`${service.slug}-fit`}
            className="text-xs font-medium tracking-[0.22em] text-ink-muted uppercase"
          >
            {service.fitHeading}
          </h2>
          <ProseBlocks paragraphs={service.fit} />
        </div>
      </section>

      <section
        className="border-t border-ink/10 px-6 py-24 md:px-12 md:py-32"
        aria-labelledby={`${service.slug}-background`}
      >
        <div className="mx-auto max-w-3xl">
          <h2
            id={`${service.slug}-background`}
            className="text-xs font-medium tracking-[0.22em] text-ink-muted uppercase"
          >
            {service.backgroundHeading}
          </h2>
          <ProseBlocks paragraphs={service.background} />
        </div>
      </section>

      <section
        className="border-t border-ink/10 px-6 py-24 md:px-12 md:py-32"
        aria-labelledby={`${service.slug}-expect`}
      >
        <div className="mx-auto max-w-3xl">
          <h2
            id={`${service.slug}-expect`}
            className="text-xs font-medium tracking-[0.22em] text-ink-muted uppercase"
          >
            {service.expectHeading}
          </h2>
          <ExpectList items={service.expect} />
        </div>
      </section>

      <section
        className="border-t border-ink/10 px-6 py-24 md:px-12 md:py-32"
        aria-labelledby={`${service.slug}-area`}
      >
        <div className="mx-auto max-w-3xl">
          <h2
            id={`${service.slug}-area`}
            className="text-xs font-medium tracking-[0.22em] text-ink-muted uppercase"
          >
            {service.areaHeading}
          </h2>
          <ProseBlocks paragraphs={service.area} />
        </div>
      </section>

      <FaqSection items={service.faqs} />
      <RelatedServices slugs={service.related} />

      <Inquire
        defaultEventType={service.eventType}
        heading={service.ctaHeading}
        body={service.ctaBody}
        sourcePage={service.path}
      />
    </>
  )
}
