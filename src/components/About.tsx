import { useInView } from '../hooks/useInView'

export function About() {
  const { ref, isVisible } = useInView<HTMLElement>()

  return (
    <section
      id="about"
      ref={ref}
      className="px-6 py-28 md:px-12 md:py-40"
      aria-labelledby="about-heading"
    >
      <div className={`mx-auto max-w-3xl ${isVisible ? 'reveal is-visible' : 'reveal'}`}>
        <p
          id="about-heading"
          className="text-xs font-medium tracking-[0.22em] text-ink-muted uppercase"
        >
          About Zach
        </p>
        <div className="mt-8 space-y-6 font-display text-xl leading-relaxed text-ink md:text-2xl md:leading-relaxed">
          <p>
            Zach Alley is a professionally trained musician with undergraduate and graduate degrees
            in music and extensive experience as a performer and educator. He has played bagpipes
            with orchestras and at events ranging from a large 9/11 parade and university memorial to
            intimate celebrations attended only by immediate family.
          </p>
          <p>
            His musical life spans orchestral, solo, and chamber settings, with experience
            performing and teaching bagpipes, cello, violin, piano, guitar, and bass. He also
            records and live-streams from his home studio.
          </p>
          <p>
            Zach also holds an MBA — an unusual but useful complement for anyone who values both
            artistry and a thoughtfully run event.
          </p>
        </div>
      </div>
    </section>
  )
}
