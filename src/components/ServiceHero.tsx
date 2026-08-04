import { HERO_IMAGES, type HeroImage } from '../config/site'
import { trackInquiryCtaClick } from '../lib/analytics'

type ServiceHeroProps = {
  title: string
  intro: string
  image: HeroImage
  inquireHref?: string
  priority?: boolean
}

export function ServiceHero({
  title,
  intro,
  image,
  inquireHref = '#inquire',
  priority = true,
}: ServiceHeroProps) {
  const media = HERO_IMAGES[image]

  return (
    <section
      className="relative h-[70svh] min-h-[480px] w-full overflow-hidden md:h-[80svh] md:min-h-[560px]"
      aria-label={title}
    >
      <picture>
        <source srcSet={media.webp} type="image/webp" />
        <img
          src={media.png}
          alt={media.alt}
          width={1122}
          height={1402}
          className="absolute inset-0 h-full w-full object-cover object-center"
          fetchPriority={priority ? 'high' : 'auto'}
        />
      </picture>
      <div
        className="absolute inset-0 bg-gradient-to-t from-night via-night/55 to-night/20"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-night/50 via-transparent to-transparent"
        aria-hidden="true"
      />

      <div className="relative z-10 flex h-full flex-col justify-end px-6 pb-14 md:px-12 md:pb-20">
        <div className="max-w-3xl">
          <h1 className="font-display text-[2.5rem] leading-[1.08] text-ink sm:text-5xl md:text-6xl">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed font-light text-ink/90 md:text-base">
            {intro}
          </p>
          <a
            href={inquireHref}
            onClick={() => trackInquiryCtaClick('service_hero')}
            className="mt-8 inline-flex text-sm font-medium tracking-[0.16em] text-ink uppercase underline decoration-ink/35 underline-offset-8 transition hover:decoration-ink"
          >
            Inquire
          </a>
        </div>
      </div>
    </section>
  )
}
