import { Link } from 'react-router-dom'
import { PageMeta } from '../components/PageMeta'

export function NotFoundPage() {
  return (
    <>
      <PageMeta
        title="Page Not Found | Zach Alley Bagpiper"
        description="The page you requested could not be found. Return home or browse bagpiper services."
        path="/"
      />
      <meta name="robots" content="noindex" />
      <section className="px-6 py-40 md:px-12 md:py-48" aria-labelledby="not-found-heading">
        <div className="mx-auto max-w-2xl text-center">
          <h1 id="not-found-heading" className="font-display text-4xl text-ink md:text-5xl">
            Page not found
          </h1>
          <p className="mt-6 text-base font-light text-ink-muted">
            That address is not part of this site. You can return home or browse services.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
            <Link
              to="/"
              className="text-sm font-medium tracking-[0.16em] text-ink uppercase underline decoration-ink/35 underline-offset-8"
            >
              Home
            </Link>
            <Link
              to="/services"
              className="text-sm font-medium tracking-[0.16em] text-ink uppercase underline decoration-ink/35 underline-offset-8"
            >
              Services
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
