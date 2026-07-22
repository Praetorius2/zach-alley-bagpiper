import { useInView } from '../hooks/useInView'

export function Intro() {
  const { ref, isVisible } = useInView<HTMLElement>()

  return (
    <section
      ref={ref}
      className="px-6 py-28 md:px-12 md:py-40"
      aria-label="About the performance"
    >
      <div className={`mx-auto max-w-3xl ${isVisible ? 'reveal is-visible' : 'reveal'}`}>
        <p className="font-display text-2xl leading-snug text-ink md:text-3xl md:leading-snug">
          An unforgettable, powerful tradition for your gathering. Whether you are celebrating a
          wedding, honoring a veteran, or laying a loved one to rest, the sound of the Highland
          bagpipes creates a beautiful, lasting memory.
        </p>
        <p className="mt-10 max-w-2xl text-base leading-relaxed font-light text-ink-muted md:text-lg">
          I specialize in performing two to four traditional tunes at the key moments of your event
          — placed with care, to maximize emotional impact.
        </p>
      </div>
    </section>
  )
}
