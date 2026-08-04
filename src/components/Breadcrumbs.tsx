import { Link } from 'react-router-dom'

export type BreadcrumbItem = {
  label: string
  to?: string
}

type BreadcrumbsProps = {
  items: BreadcrumbItem[]
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="px-6 pt-24 md:px-12 md:pt-28">
      <ol className="mx-auto flex max-w-5xl flex-wrap items-center gap-x-2 gap-y-1 text-xs tracking-[0.12em] text-ink-muted uppercase">
        {items.map((item, index) => {
          const isLast = index === items.length - 1
          return (
            <li key={`${item.label}-${index}`} className="flex items-center gap-2">
              {index > 0 ? (
                <span aria-hidden="true" className="text-ink-faint">
                  /
                </span>
              ) : null}
              {item.to && !isLast ? (
                <Link to={item.to} className="transition-opacity hover:opacity-80">
                  {item.label}
                </Link>
              ) : (
                <span
                  className={isLast ? 'text-ink' : undefined}
                  aria-current={isLast ? 'page' : undefined}
                >
                  {item.label}
                </span>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
