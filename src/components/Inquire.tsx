import { useForm, ValidationError } from '@formspree/react'

const FORM_ID = import.meta.env.VITE_FORMSPREE_ID ?? 'xgoglkjo'

const EVENT_TYPES = [
  'Wedding',
  'Funeral or memorial',
  'Special event',
  'Other',
] as const

const fieldClass =
  'w-full border-b border-ink/25 bg-transparent py-3 text-ink outline-none transition focus:border-ink'

const labelClass = 'mb-2 block text-xs tracking-[0.16em] text-ink-muted uppercase'

export function Inquire() {
  const [state, handleSubmit] = useForm(FORM_ID)

  return (
    <section
      id="inquire"
      className="border-t border-ink/10 bg-night-deep px-6 py-32 md:px-12 md:py-48"
      aria-labelledby="inquire-heading"
    >
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-medium tracking-[0.22em] text-ink-muted uppercase">
          Get in touch
        </p>
        <h2
          id="inquire-heading"
          className="mt-6 font-display text-4xl text-ink md:text-5xl"
        >
          Tell me about your event.
        </h2>
        <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed font-light text-ink-muted">
          Home base is the Denver–Boulder area. Travel further afield is welcome — rates reflect
          distance and timing.
        </p>

        {state.succeeded ? (
          <p className="mt-14 font-display text-2xl text-ink italic" role="status">
            Thank you — your inquiry was sent. I will be in touch soon.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="mt-14 space-y-6 text-left">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label htmlFor="name" className={labelClass}>
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  className={fieldClass}
                />
                <ValidationError
                  prefix="Name"
                  field="name"
                  errors={state.errors}
                  className="mt-2 block text-sm text-ink-muted"
                />
              </div>
              <div>
                <label htmlFor="email" className={labelClass}>
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className={fieldClass}
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                  className="mt-2 block text-sm text-ink-muted"
                />
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label htmlFor="event_date" className={labelClass}>
                  Event date
                </label>
                <input id="event_date" name="event_date" type="date" className={fieldClass} />
              </div>
              <div>
                <label htmlFor="location" className={labelClass}>
                  Location
                </label>
                <input
                  id="location"
                  name="location"
                  type="text"
                  autoComplete="address-level2"
                  className={fieldClass}
                />
              </div>
            </div>

            <div>
              <label htmlFor="event_type" className={labelClass}>
                Event type
              </label>
              <select
                id="event_type"
                name="event_type"
                className={fieldClass}
                defaultValue=""
                required
              >
                <option value="" disabled className="bg-night-deep text-ink">
                  Select one
                </option>
                {EVENT_TYPES.map((type) => (
                  <option key={type} value={type} className="bg-night-deep text-ink">
                    {type}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="message" className={labelClass}>
                Message
              </label>
              <textarea id="message" name="message" rows={4} required className={fieldClass} />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
                className="mt-2 block text-sm text-ink-muted"
              />
            </div>

            <input type="hidden" name="_subject" value="Bagpipe inquiry" />

            <ValidationError errors={state.errors} className="block text-center text-sm text-ink-muted" />

            <div className="pt-4 text-center">
              <button
                type="submit"
                disabled={state.submitting}
                className="inline-flex min-w-[10rem] items-center justify-center border border-ink/40 px-8 py-3 text-sm font-medium tracking-[0.16em] text-ink uppercase transition hover:border-ink hover:bg-ink/5 disabled:cursor-wait disabled:opacity-60"
              >
                {state.submitting ? 'Sending…' : 'Send inquiry'}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  )
}
