import { Link } from 'react-router-dom'
import { SERVICES } from '../config/services'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-ink/10 px-6 py-12 md:px-12">
      <div className="mx-auto flex max-w-5xl flex-col gap-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="font-display text-lg text-ink">Zach Alley — Highland Bagpiper</p>
            <p className="mt-2 text-sm text-ink-muted">
              Denver · Boulder · Colorado Front Range &amp; beyond
            </p>
          </div>
          <nav aria-label="Footer">
            <p className="text-xs tracking-[0.16em] text-ink-muted uppercase">Services</p>
            <ul className="mt-3 space-y-2 text-sm text-ink-muted">
              <li>
                <Link to="/services" className="transition-opacity hover:opacity-80 hover:text-ink">
                  All services
                </Link>
              </li>
              {SERVICES.map((service) => (
                <li key={service.slug}>
                  <Link
                    to={service.path}
                    className="transition-opacity hover:opacity-80 hover:text-ink"
                  >
                    {service.navLabel}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <p className="text-sm text-ink-muted">© {year}</p>
      </div>
    </footer>
  )
}
