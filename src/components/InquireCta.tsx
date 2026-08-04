import { trackInquiryCtaClick } from '../lib/analytics'

type InquireCtaProps = {
  href?: string
  label?: string
  location: string
  className?: string
}

export function InquireCta({
  href = '#inquire',
  label = 'Inquire',
  location,
  className = 'inline-flex text-sm font-medium tracking-[0.16em] text-ink uppercase underline decoration-ink/35 underline-offset-8 transition hover:decoration-ink',
}: InquireCtaProps) {
  return (
    <a href={href} onClick={() => trackInquiryCtaClick(location)} className={className}>
      {label}
    </a>
  )
}
