import { useEffect, useId, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { SERVICES } from '../config/services'
import { trackInquiryCtaClick } from '../lib/analytics'

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `transition-opacity hover:opacity-80 ${isActive ? 'opacity-100' : 'opacity-90'}`

export function Header() {
  const location = useLocation()
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const menuId = useId()
  const desktopMenuRef = useRef<HTMLDivElement | null>(null)
  const inquireHref = location.pathname === '/' ? '/#inquire' : '#inquire'

  useEffect(() => {
    setServicesOpen(false)
    setMobileOpen(false)
  }, [location.pathname])

  useEffect(() => {
    function onPointerDown(event: MouseEvent) {
      if (!desktopMenuRef.current?.contains(event.target as Node)) {
        setServicesOpen(false)
      }
    }
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setServicesOpen(false)
        setMobileOpen(false)
      }
    }
    document.addEventListener('mousedown', onPointerDown)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('mousedown', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [])

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-6 py-5 md:px-12">
      <div className="flex items-center justify-between">
        <Link
          to="/"
          className="pointer-events-auto font-display text-lg tracking-wide text-ink transition-opacity hover:opacity-80"
        >
          Zach Alley
        </Link>

        <nav
          className="pointer-events-auto hidden items-center gap-8 md:flex"
          aria-label="Primary"
        >
          <div className="relative" ref={desktopMenuRef}>
            <button
              type="button"
              className="text-sm font-medium tracking-[0.14em] text-ink uppercase transition-opacity hover:opacity-80"
              aria-expanded={servicesOpen}
              aria-controls={menuId}
              onClick={() => setServicesOpen((open) => !open)}
            >
              Services
            </button>
            {servicesOpen ? (
              <div
                id={menuId}
                className="absolute top-full right-0 mt-3 min-w-[16rem] border border-ink/15 bg-night-deep/95 py-3 shadow-lg backdrop-blur-sm"
              >
                <Link
                  to="/services"
                  className="block px-4 py-2 text-sm text-ink-muted transition-colors hover:bg-ink/5 hover:text-ink"
                >
                  All services
                </Link>
                <div className="my-2 border-t border-ink/10" />
                {SERVICES.map((service) => (
                  <NavLink
                    key={service.slug}
                    to={service.path}
                    className={({ isActive }) =>
                      `block px-4 py-2 text-sm transition-colors hover:bg-ink/5 hover:text-ink ${
                        isActive ? 'text-ink' : 'text-ink-muted'
                      }`
                    }
                  >
                    {service.navLabel}
                  </NavLink>
                ))}
              </div>
            ) : null}
          </div>

          <a
            href={inquireHref}
            onClick={() => trackInquiryCtaClick('header')}
            className="text-sm font-medium tracking-[0.14em] text-ink uppercase transition-opacity hover:opacity-80"
          >
            Inquire
          </a>
        </nav>

        <div className="pointer-events-auto flex items-center gap-4 md:hidden">
          <a
            href={inquireHref}
            onClick={() => trackInquiryCtaClick('header_mobile')}
            className="text-sm font-medium tracking-[0.14em] text-ink uppercase transition-opacity hover:opacity-80"
          >
            Inquire
          </a>
          <button
            type="button"
            className="text-sm font-medium tracking-[0.14em] text-ink uppercase"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            onClick={() => setMobileOpen((open) => !open)}
          >
            Menu
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="pointer-events-auto mt-4 border border-ink/15 bg-night-deep/95 p-4 backdrop-blur-sm md:hidden"
        >
          <p className="text-xs tracking-[0.16em] text-ink-muted uppercase">Services</p>
          <ul className="mt-3 space-y-2">
            <li>
              <NavLink to="/services" className={navLinkClass}>
                All services
              </NavLink>
            </li>
            {SERVICES.map((service) => (
              <li key={service.slug}>
                <NavLink to={service.path} className={navLinkClass}>
                  {service.navLabel}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  )
}
