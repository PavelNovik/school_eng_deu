import { brand, credits, navIds, phoneHref } from '../config.js'
import { useLang } from '../i18n/index.jsx'
import { openCookieSettings } from './CookieConsent.jsx'
import Icon from './Icon.jsx'
import Logo from './Logo.jsx'

export default function Footer() {
  const { t } = useLang()
  const f = t.footer
  const year = 2026
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <Logo tag={t.logoTag} />
          <p>{f.tagline}</p>
          <div className="footer__social">
            <a href={brand.social.instagram} className="icon-btn" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Icon name="instagram" size={20} />
            </a>
            <a href={brand.social.facebook} className="icon-btn" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <Icon name="facebook" size={20} />
            </a>
          </div>
        </div>

        <nav aria-label={f.nav}>
          <h2 className="footer__title">{f.nav}</h2>
          <ul className="footer__links">
            {navIds.slice(1).map((id) => (
              <li key={id}>
                <a href={`#${id}`}>{t.nav.items[id]}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="footer__title">{t.contact.eyebrow}</h2>
          <ul className="footer__links">
            <li>{brand.street}</li>
            <li>
              {brand.postalCode} {brand.city}
            </li>
            <li>
              <a href={phoneHref}>{brand.phone}</a>
            </li>
            <li>
              <a href={`mailto:${brand.email}`}>{brand.email}</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container footer__bottom">
        <p>
          © {year} {brand.name}. {f.rights} {f.demo}
        </p>
        <p className="footer__credits">
          {f.photos}:{' '}
          {credits.map((c, i) => (
            <span key={c.url}>
              {i > 0 && ', '}
              <a href={c.url} target="_blank" rel="noopener noreferrer">
                {c.author}
              </a>
            </span>
          ))}
        </p>
        <div className="footer__actions">
          <button type="button" className="link-btn" onClick={openCookieSettings}>
            {f.cookies}
          </button>
          <a href="#home" className="link-btn">
            {f.top} <Icon name="arrowUp" size={16} />
          </a>
        </div>
      </div>
    </footer>
  )
}
