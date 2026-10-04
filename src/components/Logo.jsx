// Логотип: арка моста над тремя опорами + название и рукописная подпись
export default function Logo({ tag, href = '#home' }) {
  return (
    <a href={href} className="logo" aria-label="MOST — strona główna">
      <svg className="logo__mark" viewBox="0 0 64 64" aria-hidden="true" focusable="false">
        <rect width="64" height="64" rx="16" className="logo__bg" />
        <path d="M10 44c6-14 14-21 22-21s16 7 22 21" className="logo__arc" />
        <path d="M8 46h48M22 46v-12M32 46V25M42 46v-12" className="logo__deck" />
      </svg>
      <span className="logo__text">
        <span className="logo__name">MOST</span>
        <span className="logo__tag">{tag}</span>
      </span>
    </a>
  )
}
