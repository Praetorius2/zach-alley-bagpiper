import type { HeroImage } from './site'

export type EventType =
  | 'Funeral or memorial'
  | 'Wedding'
  | 'Ceremonial event'
  | 'Private or corporate event'
  | 'Scottish, Irish, or holiday event'
  | 'Orchestral, concert, or recording'
  | 'Other'

export const EVENT_TYPES: readonly EventType[] = [
  'Funeral or memorial',
  'Wedding',
  'Ceremonial event',
  'Private or corporate event',
  'Scottish, Irish, or holiday event',
  'Orchestral, concert, or recording',
  'Other',
] as const

export type ServiceSlug =
  | 'funeral-memorial-bagpiper'
  | 'wedding-bagpiper'
  | 'ceremonial-bagpiper'
  | 'private-corporate-events'
  | 'scottish-irish-holiday-events'
  | 'orchestral-concert-recording'

export type FaqItem = { question: string; answer: string }

export type ServiceDefinition = {
  slug: ServiceSlug
  path: `/${ServiceSlug}`
  navLabel: string
  cardTitle: string
  cardDescription: string
  eventType: EventType
  title: string
  description: string
  ogImage: HeroImage
  h1: string
  intro: string
  overviewHeading: string
  overview: string[]
  fitHeading: string
  fit: string[]
  backgroundHeading: string
  background: string[]
  expectHeading: string
  expect: string[]
  areaHeading: string
  area: string[]
  faqs: FaqItem[]
  ctaHeading: string
  ctaBody: string
  related: ServiceSlug[]
  schemaName: string
  schemaDescription: string
}

export const SERVICES: ServiceDefinition[] = [
  {
    slug: 'funeral-memorial-bagpiper',
    path: '/funeral-memorial-bagpiper',
    navLabel: 'Funerals & Memorials',
    cardTitle: 'Funerals & Memorials',
    cardDescription:
      'Respectful Highland bagpipe music for funerals, memorials, graveside services, and celebrations of life.',
    eventType: 'Funeral or memorial',
    title: 'Funeral & Memorial Bagpiper in Colorado | Zach Alley',
    description:
      'Highland bagpiper for funerals, memorials, and graveside services across the Denver metro area, Boulder County, and Colorado’s Front Range.',
    ogImage: 'cathedral',
    h1: 'Funeral and memorial bagpiper',
    intro:
      'Highland bagpipes for funerals, memorials, graveside services, and celebrations of life — offered with care, clarity, and respect for the family and the moment.',
    overviewHeading: 'Bagpipes for remembrance',
    overview: [
      'Zach Alley provides Highland bagpipe performance for funeral services, memorial gatherings, graveside placements, celebrations of life, processions, and both intimate family gatherings and larger public memorials.',
      'Families and funeral directors can discuss the desired role for the bagpipes — whether a brief presence at a key moment or music woven through several parts of the service.',
    ],
    fitHeading: 'How bagpipes may fit the service',
    fit: [
      'Bagpipes may accompany arrival or entrance, processional moments, closing music, or graveside placement. In some settings, playing at a short distance can create a measured, dignified presence.',
      'Indoor and outdoor acoustics differ, and each service can be planned individually with you or the event coordinator so timing and placement feel appropriate. I have performed on stages with orchestras and from the roof of a house during a graduation party. We will discuss what is most appropriate for your event.',
    ],
    backgroundHeading: 'A measured musical presence',
    background: [
      'Zach’s experience includes performances ranging from a large university 9/11 parade and memorial to intimate memorial celebrations attended only by immediate family.',
      'That range matters for funeral and memorial work: the same instrument can serve a public remembrance or a quiet family gathering, with preparation matched to the setting. For the fuller musical background, see About on the homepage.',
    ],
    expectHeading: 'What families and directors can expect',
    expect: [
      'Clear communication about date, location, and the role you have in mind for the bagpipes — or a conversation to find that role together.',
      'Coordination with the funeral director, officiant, family representative, or event coordinator on timing and placement.',
      'A respectful, prepared musical presence suited to large public memorials or intimate immediate-family gatherings.',
    ],
    areaHeading: 'Service area',
    area: [
      'Zach serves the Denver metro area, Boulder County, and nearby Front Range communities, including Thornton, Northglenn, Westminster, Broomfield, Arvada, Golden, Louisville, Lafayette, Erie, and Longmont.',
      'Mountain and other destination events are considered when scheduling and travel allow. Please send an inquiry if you are unsure about your location.',
    ],
    faqs: [
      {
        question: 'Can bagpipes be part of a graveside service?',
        answer:
          'Yes. Graveside placement is a common request. Timing and position can be planned with the funeral director or family so the music supports the service without disrupting other elements.',
      },
      {
        question: 'Do you play indoors as well as outdoors?',
        answer:
          'Both are possible. Indoor volume and outdoor weather or acoustics are discussed during planning so the presentation fits the venue.',
      },
      {
        question: 'Can you coordinate with our event coordinator?',
        answer:
          'Yes. Zach works with funeral directors, officiants, family representatives, etc., on programming, timing, entrance or exit cues, and where to stand or process.',
      },
      {
        question: 'What if the gathering is very small?',
        answer:
          'Intimate memorials and immediate-family celebrations are part of Zach’s experience. The musical role can be kept brief and restrained when that is what the family wants.',
      },
      {
        question: 'How do we choose music for a funeral or memorial?',
        answer:
          'Musical selections can be discussed during planning. Share any preferences or traditions that matter to the family, and options can be considered together.',
      },
      {
        question: 'How should we begin an inquiry?',
        answer:
          'Feel free to reach out with or without details. Sometimes clarity comes through conversation. If you have it, share the date, location, type of service, and the role you envision for the bagpipes.',
      },
      {
        question: 'Will you tell me if bagpipes are not the right fit?',
        answer:
          'Yes. Bagpipes can be a meaningful part of many services, but not every gathering. If another direction would serve the moment better, I will say so plainly.',
      },
    ],
    ctaHeading: 'Inquire about a funeral or memorial',
    ctaBody:
      'Share the date, location, type of service, and how you would like the bagpipes to be part of it. Zach will follow up to discuss details.',
    related: ['ceremonial-bagpiper', 'wedding-bagpiper'],
    schemaName: 'Funeral and memorial bagpipe performance',
    schemaDescription:
      'Highland bagpipe performance for funerals, memorials, graveside services, and celebrations of life in Colorado.',
  },
  {
    slug: 'wedding-bagpiper',
    path: '/wedding-bagpiper',
    navLabel: 'Weddings',
    cardTitle: 'Weddings',
    cardDescription:
      'Bagpipes for ceremony moments, guest arrival, venue entrances, and Scottish or family traditions.',
    eventType: 'Wedding',
    title: 'Wedding Bagpiper in Colorado | Zach Alley',
    description:
      'Wedding bagpiper for Front Range and Rocky Mountain destination ceremonies — processionals, recessionals, guest arrival, and traditional moments.',
    ogImage: 'flatirons',
    h1: 'Wedding bagpiper',
    intro:
      'Highland bagpipes for wedding ceremonies and related moments — from guest arrival and processionals to recessionals, cocktail-hour appearances, and family traditions.',
    overviewHeading: 'Bagpipes for the wedding day',
    overview: [
      'Zach provides Highland bagpipe performance for wedding ceremonies, processionals, recessionals, guest arrival, venue entrances, cocktail-hour appearances, Scottish or family traditions, and surprise performances when the couple wants one.',
      'The musical role is planned around your ceremony and venue — not a one-size-fits-all package — so bagpipes support the day without competing with other musicians or the officiant’s cues.',
    ],
    fitHeading: 'How bagpipes may fit the wedding',
    fit: [
      'Couples often use bagpipes for guest arrival, a processional or recessional moment, a venue entrance, or a brief appearance during cocktail hour. Scottish or family traditions can be incorporated when they matter to you.',
      'Outdoor venue acoustics, timing with a wedding planner or officiant, and coordination with other musicians are discussed during planning. Each wedding can be arranged individually so the bagpipes have a clear, appropriate place in the order of events.',
    ],
    backgroundHeading: 'Prepared for ceremony settings',
    background: [
      'Zach performs in solo, chamber, and ceremonial settings — experience that supports reliable timing, clear cues, and a composed presence on a day with many moving parts.',
      'Whether the ceremony is on the Front Range or at a mountain destination, the focus is music that fits the couple’s vision for the role of the bagpipes.',
    ],
    expectHeading: 'What couples and planners can expect',
    expect: [
      'Straightforward conversation about date, venue, and the moments where bagpipes should appear — including brainstorming when the plan is still open.',
      'Coordination with your planner, officiant, or other musicians on cues and timing.',
      'Flexibility for outdoor venues, mountain locations, and both intimate and larger guest lists.',
    ],
    areaHeading: 'Service area',
    area: [
      'Zach is available for Front Range weddings and select Rocky Mountain destination weddings, including communities such as Denver, Boulder, Golden, and mountain destinations such as Vail, Keystone, and Aspen when scheduling and travel allow.',
      'Travel is arranged for the venue. If you are unsure whether your location works, send an inquiry.',
    ],
    faqs: [
      {
        question: 'When during the wedding are bagpipes typically used?',
        answer:
          'Common moments include guest arrival, processional or recessional music, a venue entrance, or a short cocktail-hour appearance. The right choice depends on your ceremony and can be planned together.',
      },
      {
        question: 'Can you work with our other musicians?',
        answer:
          'Yes. Timing and transitions can be coordinated with string players, organists, DJs, or other performers so the bagpipes have a defined role.',
      },
      {
        question: 'Do you play at outdoor and mountain venues?',
        answer:
          'Yes. Outdoor acoustics and mountain venues are discussed in advance so placement and timing fit the site.',
      },
      {
        question: 'Can bagpipes be a surprise for guests or the couple?',
        answer:
          'Surprise appearances are possible when logistics allow. Share the idea during planning so cues stay reliable for everyone who needs to know.',
      },
      {
        question: 'How do we choose wedding music?',
        answer:
          'Selections can be discussed during planning and/or I can make a tasteful selection for you. Share any traditions or preferences, and options can be considered in context of the ceremony.',
      },
      {
        question: 'Will you tell me if hiring a bagpiper is a bad idea for our wedding?',
        answer:
          'Absolutely. Bagpipes can make a memorable moment, but they are also famously loud, and bagpipers have a quirky reputation for a reason. If they would overpower the ceremony or feel out of place, I will be the first to say so.',
      },
    ],
    ctaHeading: 'Inquire about a wedding',
    ctaBody:
      'Share the date, venue, ceremony outline, and the role you want for the bagpipes. Zach will follow up to discuss how they can fit your day.',
    related: ['private-corporate-events', 'scottish-irish-holiday-events'],
    schemaName: 'Wedding bagpipe performance',
    schemaDescription:
      'Highland bagpipe performance for weddings across Colorado’s Front Range and select mountain destinations.',
  },
  {
    slug: 'ceremonial-bagpiper',
    path: '/ceremonial-bagpiper',
    navLabel: 'Ceremonial',
    cardTitle: 'Ceremonial Events',
    cardDescription:
      'Bagpipes for university, civic, remembrance, dedication, and formal community ceremonies.',
    eventType: 'Ceremonial event',
    title: 'Ceremonial Bagpiper for Colorado Events | Zach Alley',
    description:
      'Ceremonial bagpiper for Colorado universities, civic events, remembrance ceremonies, dedications, and formal community occasions.',
    ogImage: 'cathedral',
    h1: 'Ceremonial bagpiper',
    intro:
      'Highland bagpipes for university events, civic ceremonies, remembrance gatherings, dedications, and formal institutional or community occasions.',
    overviewHeading: 'Bagpipes for formal occasions',
    overview: [
      'Zach provides Highland bagpipe performance for university events, memorial ceremonies, civic ceremonies, remembrance events, dedications, formal entrances, and other institutional or community occasions.',
      'Organizers can define a clear ceremonial role — a formal entrance, a moment of remembrance, or another cue that fits the program.',
    ],
    fitHeading: 'How bagpipes may fit the ceremony',
    fit: [
      'Bagpipes often mark formal entrances, processional cues, moments of silence or remembrance, or dedications. The exact placement depends on the program and the host institution or organizer.',
      'Each event can be coordinated individually with event staff so timing, staging, and protocol are respected without treating any single format as a rigid rule.',
    ],
    backgroundHeading: 'Experience with public remembrance',
    background: [
      'Zach’s background includes a large university 9/11 parade and memorial, as well as other ceremonial and public settings.',
      'That experience supports reliable preparation for formal programs where timing, dignity, and clear communication with organizers matter.',
    ],
    expectHeading: 'What organizers can expect',
    expect: [
      'Clear communication with event staff about schedule, cues, and staging.',
      'Professional preparation appropriate to institutional and community settings.',
      'A composed presence for indoor ceremonies and outdoor remembrances.',
      'Respect for the tone of the occasion — formal without unnecessary flourish.',
    ],
    areaHeading: 'Service area',
    area: [
      'Zach serves Colorado universities, civic events, and community ceremonies along the Front Range, including the Denver metro area, Boulder, Fort Collins, Colorado Springs, and surrounding communities when scheduling allows.',
      'Select mountain and destination ceremonial events are considered case by case.',
    ],
    faqs: [
      {
        question: 'What kinds of ceremonies do you play for?',
        answer:
          'University events, civic ceremonies, remembrance gatherings, dedications, formal entrances, and similar institutional or community occasions.',
      },
      {
        question: 'Can you follow a detailed event run-of-show?',
        answer:
          'Yes. Share the schedule and cues in advance so placement and timing align with the rest of the program.',
      },
      {
        question: 'Have you performed in large public ceremonies?',
        answer:
          'Yes. Zach’s experience includes a large university 9/11 parade and memorial. That background informs ceremonial work; current inquiries focus on university, civic, remembrance, and formal community occasions.',
      },
      {
        question: 'Is this a military bagpipe service?',
        answer:
          'Zach provides civilian ceremonial bagpipe performance. He does not claim military credentials or affiliation. Organizers seeking a specific military protocol should state those requirements during planning.',
      },
      {
        question: 'How is music selected for a ceremony?',
        answer:
          'Selections can be discussed during planning in light of the occasion, any traditions involved, and the time available in the program.',
      },
      {
        question: 'Will you tell me if bagpipes are not appropriate for our ceremony?',
        answer:
          'Yes. I would rather help you choose the right musical presence than force a fit. If bagpipes are not the best match for the tone or program, I will tell you.',
      },
    ],
    ctaHeading: 'Inquire about a ceremonial event',
    ctaBody:
      'Share the date, location, host organization, and the ceremonial role you have in mind for the bagpipes.',
    related: ['funeral-memorial-bagpiper', 'orchestral-concert-recording'],
    schemaName: 'Ceremonial bagpipe performance',
    schemaDescription:
      'Highland bagpipe performance for university, civic, remembrance, and community ceremonies in Colorado.',
  },
  {
    slug: 'private-corporate-events',
    path: '/private-corporate-events',
    navLabel: 'Private & Corporate',
    cardTitle: 'Private & Corporate Events',
    cardDescription:
      'Bagpipes for private celebrations, corporate gatherings, formal dinners, and surprise appearances.',
    eventType: 'Private or corporate event',
    title: 'Bagpiper for Private & Corporate Events | Zach Alley',
    description:
      'Highland bagpiper for private celebrations and corporate events across the Denver metro area, Northern Colorado, and select mountain destinations.',
    ogImage: 'flatirons',
    h1: 'Bagpiper for private and corporate events',
    intro:
      'Highland bagpipes for private celebrations, corporate gatherings, community events, formal dinners, grand openings, retirements, and surprise appearances.',
    overviewHeading: 'A flexible musical role',
    overview: [
      'Zach provides Highland bagpipe performance for private celebrations, corporate events, community gatherings, family occasions, formal dinners, grand openings, retirement events, and surprise appearances.',
      'The musical role can range from a brief ceremonial entrance to a more developed feature, depending on the event’s purpose and schedule.',
    ],
    fitHeading: 'How bagpipes may fit the event',
    fit: [
      'Bagpipes may mark an arrival, open a program, honor a guest, close a dinner, or create a short featured moment. Golf tournaments and similar gatherings can also include a defined appearance when that fits the host’s plan.',
      'Each event is coordinated individually so the bagpipes support the occasion without overwhelming it — whether the appearance is brief or more extended.',
    ],
    backgroundHeading: 'Professional presence for hosts and planners',
    background: [
      'Zach brings both musical preparation and an MBA — useful when events need artistry and clear logistics.',
      'Experience across ceremonial, private, and public settings supports reliable timing for hosts, planners, and corporate teams.',
    ],
    expectHeading: 'What hosts can expect',
    expect: [
      'Clear conversation about goals, timing, and where the bagpipes should appear — including short appearances or longer features.',
      'Coordination with planners, venue staff, or a designated on-site contact.',
      'Adaptability from intimate family occasions to larger corporate or community gatherings.',
    ],
    areaHeading: 'Service area',
    area: [
      'Zach serves the Denver metro area, Northern Colorado, and select mountain destinations, including Fort Collins, Longmont, Boulder, and communities throughout the Front Range.',
      'Travel for mountain and destination events is available when scheduling allows.',
    ],
    faqs: [
      {
        question: 'Can bagpipes be only a short appearance?',
        answer:
          'Yes. Many private and corporate events use a brief ceremonial moment. Longer features are also possible when the program calls for them.',
      },
      {
        question: 'Do you play surprise performances?',
        answer:
          'Surprise appearances can be arranged when the right people have the cues. Share the plan during inquiry so logistics stay reliable.',
      },
      {
        question: 'Can you work with a corporate event planner?',
        answer:
          'Yes. Zach coordinates with planners and venue contacts on timing, staging, and the intended role for the bagpipes.',
      },
      {
        question: 'Are retirement events and grand openings appropriate?',
        answer:
          'Those occasions can include bagpipes when the host wants a distinctive ceremonial or celebratory moment. Fit is discussed during planning.',
      },
      {
        question: 'How do we decide what music to use?',
        answer:
          'Selections can be discussed during planning based on the tone of the event and the time available.',
      },
      {
        question: 'Will you tell me if a bagpiper is a bad idea for my event?',
        answer:
          'Absolutely. Bagpipes can be striking, but they are loud, and the instrument has a comic reputation as well as a ceremonial one. If they would distract from the occasion, I will say so and help you rethink.',
      },
    ],
    ctaHeading: 'Inquire about a private or corporate event',
    ctaBody:
      'Share the date, location, event type, and whether you need a brief appearance or a more featured role for the bagpipes.',
    related: ['wedding-bagpiper', 'scottish-irish-holiday-events'],
    schemaName: 'Private and corporate event bagpipe performance',
    schemaDescription:
      'Highland bagpipe performance for private celebrations and corporate events in Colorado.',
  },
  {
    slug: 'scottish-irish-holiday-events',
    path: '/scottish-irish-holiday-events',
    navLabel: 'Cultural & Holiday',
    cardTitle: 'Scottish, Irish & Holiday Events',
    cardDescription:
      'Bagpipes for Burns Night, heritage celebrations, cultural festivals, parades, and holiday gatherings.',
    eventType: 'Scottish, Irish, or holiday event',
    title: 'Bagpiper for Scottish, Irish & Holiday Events | Zach Alley',
    description:
      'Highland bagpiper for Scottish and Irish cultural events, heritage celebrations, parades, and holiday gatherings across Colorado.',
    ogImage: 'cathedral',
    h1: 'Bagpiper for Scottish, Irish, and holiday events',
    intro:
      'Highland bagpipes for Burns Night, St. Andrew’s Day, St. Patrick’s Day, Highland games, clan gatherings, cultural festivals, heritage celebrations, parades, and holiday events — with respect for distinct traditions.',
    overviewHeading: 'Cultural and seasonal occasions',
    overview: [
      'Zach provides Highland bagpipe performance for Scottish and Irish cultural events, heritage celebrations, festivals, parades, and holiday gatherings when bagpipes are an appropriate part of the program.',
      'Scottish and Irish traditions are not treated as interchangeable. The musical role is planned with the host so it fits the specific occasion and community.',
    ],
    fitHeading: 'How bagpipes may fit the celebration',
    fit: [
      'Bagpipes may open a dinner, mark a parade position, support a heritage program, or appear at a defined moment during a festival or holiday gathering.',
      'Each event can be coordinated individually. Listing an event type here describes occasions Zach can serve — not a claim that every festival or gathering has already hired him.',
    ],
    backgroundHeading: 'Tradition with contemporary care',
    background: [
      'Zach approaches Scottish and Irish occasions with respect for distinct traditions rather than treating them as interchangeable.',
      'That care supports clear collaboration with organizers of heritage and holiday events. Full musical background is on the homepage About section.',
    ],
    expectHeading: 'What organizers can expect',
    expect: [
      'Communication that respects the specific tradition or holiday involved.',
      'Coordination on timing, staging, and the intended role for the bagpipes.',
      'A clear, composed musical presence without relying on stereotypes or spectacle for its own sake.',
    ],
    areaHeading: 'Service area',
    area: [
      'Zach is available for cultural and holiday events across Colorado when travel and scheduling allow, including the Denver metro area, Boulder, Northern Colorado, Colorado Springs, and select mountain communities.',
      'Destination events are considered individually.',
    ],
    faqs: [
      {
        question: 'Do you distinguish Scottish and Irish events?',
        answer:
          'Yes. Traditions differ, and the musical role is planned with the host so it fits the specific celebration rather than treating cultures as interchangeable.',
      },
      {
        question: 'Can you play Burns Night or St. Andrew’s Day dinners?',
        answer:
          'Those occasions can include bagpipes when the organizer wants them as part of the program. Details are arranged during planning.',
      },
      {
        question: 'What about St. Patrick’s Day or parade appearances?',
        answer:
          'Holiday and festival appearances are possible when logistics and the role for the bagpipes are clear in advance.',
      },
      {
        question: 'Do you play Highland games or clan gatherings?',
        answer:
          'Those events can be a good fit when bagpipes are part of the published or planned program. Share timing and expectations in your inquiry.',
      },
      {
        question: 'How is repertoire chosen for cultural events?',
        answer:
          'Selections can be discussed during planning with attention to the occasion and any traditions the organizers want to honor.',
      },
      {
        question: 'Will you tell me if bagpipes are not the right fit for our celebration?',
        answer:
          'Yes. Fit depends on the tradition, the program, and the room. If bagpipes would feel forced or out of place, I will say so directly.',
      },
    ],
    ctaHeading: 'Inquire about a cultural or holiday event',
    ctaBody:
      'Share the date, location, type of celebration, and the role you would like the bagpipes to play.',
    related: ['private-corporate-events', 'ceremonial-bagpiper'],
    schemaName: 'Scottish, Irish, and holiday event bagpipe performance',
    schemaDescription:
      'Highland bagpipe performance for Scottish and Irish cultural events and holiday gatherings in Colorado.',
  },
  {
    slug: 'orchestral-concert-recording',
    path: '/orchestral-concert-recording',
    navLabel: 'Orchestral & Recording',
    cardTitle: 'Orchestral, Concert & Recording',
    cardDescription:
      'Bagpipes for orchestral programs, concerts, chamber collaborations, recording sessions, and livestreams.',
    eventType: 'Orchestral, concert, or recording',
    title: 'Orchestral, Concert & Recording Bagpiper | Zach Alley',
    description:
      'Bagpiper for orchestral performances, concerts, chamber collaborations, recording sessions, and livestreams — available for Colorado and destination projects.',
    ogImage: 'flatirons',
    h1: 'Orchestral, concert, and recording bagpiper',
    intro:
      'Highland bagpipes for orchestral programs, concert appearances, chamber collaborations, solo performance, recording sessions, livestreams, and remote recording from a home studio.',
    overviewHeading: 'Ensemble, stage, and studio',
    overview: [
      'Zach provides Highland bagpipe performance for orchestral collaborations, concert appearances, chamber projects, solo performance, recording sessions, livestreams, and remote recording from his home studio.',
      'Projects are planned with conductors, producers, or collaborators so preparation, cues, and musical role are clear before rehearsal or session time.',
    ],
    fitHeading: 'How bagpipes may fit the project',
    fit: [
      'Bagpipes may appear as an orchestral color, a concert feature, a chamber partner, a solo voice, or a tracked part in a recording or livestream. The scope depends on the score, program, or production plan.',
      'Each collaboration is coordinated individually — including rehearsal needs, remote recording logistics, or on-site session details — rather than following a single fixed format.',
    ],
    backgroundHeading: 'Musician first',
    background: [
      'Zach has performed bagpipes with orchestras. Broader experience on cello, violin, piano, guitar, and bass supports ensemble awareness and collaborative preparation.',
      'He also records and live-streams from his home studio when a project needs remote bagpipe tracks or a livestream appearance.',
    ],
    expectHeading: 'What collaborators can expect',
    expect: [
      'Clear communication about repertoire needs, rehearsal plans, and technical requirements at a high level.',
      'Respect for conductors, producers, and fellow musicians’ processes.',
      'Flexibility for Colorado projects, select destination collaborations, and remote sessions when scheduling allows.',
    ],
    areaHeading: 'Service area',
    area: [
      'Zach collaborates on projects in Colorado and on select destination engagements when travel and scheduling allow.',
      'Remote recording from the home studio is available for projects that do not require an on-site appearance.',
    ],
    faqs: [
      {
        question: 'Have you performed bagpipes with orchestras?',
        answer:
          'Yes. Zach has performed bagpipes with orchestras and brings that ensemble experience to collaborative projects.',
      },
      {
        question: 'Can you record remotely?',
        answer:
          'Yes. Remote recording and livestream appearances from Zach’s home studio are available when that format fits the project.',
      },
      {
        question: 'Do you only play bagpipes?',
        answer:
          'Bagpipes are the focus of this site. Zach also has performing and teaching experience on cello, violin, piano, guitar, and bass, which informs his ensemble work.',
      },
      {
        question: 'How should orchestras or producers inquire?',
        answer:
          'Share the date or session window, location or remote needs, repertoire context, and the role intended for the bagpipes.',
      },
      {
        question: 'Can repertoire be confirmed in advance?',
        answer:
          'Musical selections and preparation details can be discussed during planning so expectations are aligned before rehearsal or recording.',
      },
      {
        question: 'Will you tell me if bagpipes are not a good musical fit?',
        answer:
          'Yes. Collaboration works best when the part serves the score and the ensemble. If bagpipes are not the right color for the project, I will say so early.',
      },
    ],
    ctaHeading: 'Inquire about a concert or recording project',
    ctaBody:
      'Share the date or session window, location or remote format, and the musical role you need from the bagpipes.',
    related: ['ceremonial-bagpiper', 'private-corporate-events'],
    schemaName: 'Orchestral, concert, and recording bagpipe performance',
    schemaDescription:
      'Highland bagpipe performance for orchestral, concert, chamber, recording, and livestream projects.',
  },
]

export const SERVICE_BY_SLUG: Record<ServiceSlug, ServiceDefinition> = Object.fromEntries(
  SERVICES.map((service) => [service.slug, service]),
) as Record<ServiceSlug, ServiceDefinition>

export function getServiceByPath(pathname: string): ServiceDefinition | undefined {
  return SERVICES.find((service) => service.path === pathname)
}
