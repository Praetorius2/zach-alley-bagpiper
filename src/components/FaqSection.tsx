import { useId, useState } from 'react'
import type { FaqItem } from '../config/services'

type FaqSectionProps = {
  items: FaqItem[]
  heading?: string
}

export function FaqSection({ items, heading = 'Frequently asked questions' }: FaqSectionProps) {
  const baseId = useId()
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section
      className="border-t border-ink/10 px-6 py-24 md:px-12 md:py-32"
      aria-labelledby={`${baseId}-heading`}
    >
      <div className="mx-auto max-w-3xl">
        <h2
          id={`${baseId}-heading`}
          className="text-xs font-medium tracking-[0.22em] text-ink-muted uppercase"
        >
          {heading}
        </h2>

        <div className="mt-10 divide-y divide-ink/10 border-y border-ink/10">
          {items.map((item, index) => {
            const isOpen = openIndex === index
            const panelId = `${baseId}-panel-${index}`
            const buttonId = `${baseId}-button-${index}`

            return (
              <div key={item.question} className="py-5">
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    className="flex w-full items-start justify-between gap-6 text-left"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                  >
                    <span className="font-display text-xl text-ink italic md:text-2xl">
                      {item.question}
                    </span>
                    <span
                      aria-hidden="true"
                      className="mt-1 text-sm tracking-[0.16em] text-ink-faint"
                    >
                      {isOpen ? '–' : '+'}
                    </span>
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  hidden={!isOpen}
                  className="mt-4"
                >
                  <p className="text-base leading-relaxed font-light text-ink-muted">
                    {item.answer}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
