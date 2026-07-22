export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-ink/10 px-6 py-10 md:px-12">
      <div className="mx-auto flex max-w-5xl flex-col gap-3 text-sm text-ink-muted md:flex-row md:items-center md:justify-between">
        <p>Zach Alley — Highland Bagpiper</p>
        <p>Denver · Boulder · Colorado &amp; beyond</p>
        <p>© {year}</p>
      </div>
    </footer>
  )
}
