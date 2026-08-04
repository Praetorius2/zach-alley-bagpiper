import {
  ORG_ID,
  PERSON_ID,
  SITE_NAME,
  SITE_URL,
  WEBSITE_ID,
} from '../config/site'
import { SERVICES } from '../config/services'
import { JsonLd } from './JsonLd'

export function SitewideJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': PERSON_ID,
        name: 'Zach Alley',
        url: SITE_URL,
        jobTitle: 'Highland Bagpiper',
        description:
          'Professionally trained musician and Highland bagpiper for funerals, memorials, weddings, ceremonies, private events, cultural celebrations, concerts, and recordings. Based in the Denver–Boulder area, available across Colorado’s Front Range and beyond.',
        areaServed: [
          { '@type': 'City', name: 'Denver' },
          { '@type': 'City', name: 'Boulder' },
          { '@type': 'State', name: 'Colorado' },
        ],
        knowsAbout: [
          'Highland bagpipes',
          'Funeral and memorial bagpipe performance',
          'Wedding bagpipe performance',
          'Ceremonial bagpipe performance',
          'Private and corporate event performance',
          'Orchestral and recording collaboration',
        ],
      },
      {
        '@type': 'ProfessionalService',
        '@id': ORG_ID,
        name: SITE_NAME,
        url: SITE_URL,
        description:
          'Highland bagpipe performances for funerals, memorials, weddings, ceremonies, private and corporate events, cultural celebrations, concerts, and recordings across Colorado.',
        provider: { '@id': PERSON_ID },
        serviceType: SERVICES.map((service) => service.schemaName),
        areaServed: [
          { '@type': 'City', name: 'Denver' },
          { '@type': 'City', name: 'Boulder' },
          { '@type': 'State', name: 'Colorado' },
        ],
      },
      {
        '@type': 'WebSite',
        '@id': WEBSITE_ID,
        name: SITE_NAME,
        url: SITE_URL,
        publisher: { '@id': ORG_ID },
        inLanguage: 'en-US',
      },
    ],
  }

  return <JsonLd data={data} />
}
