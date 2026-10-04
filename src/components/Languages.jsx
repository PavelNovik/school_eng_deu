import { useLang } from '../i18n/index.jsx'
import Icon from './Icon.jsx'
import SectionHead from './SectionHead.jsx'

// Две большие карточки языков. Огромное приветствие на фоне карточки уезжает при прокрутке.
export default function Languages() {
  const { t } = useLang()
  const l = t.languages
  return (
    <section id="languages" className="section languages" aria-labelledby="languages-title">
      <div className="container">
        <SectionHead eyebrow={l.eyebrow} title={l.title} lead={l.lead} id="languages-title" />
        <div className="languages__grid">
          {l.items.map((item, i) => (
            <article key={item.key} className={`lang-card lang-card--${item.key}`} data-reveal style={{ '--d': `${i * 120}ms` }}>
              <span className="lang-card__word" data-plx aria-hidden="true">{item.word}</span>
              <header className="lang-card__head">
                <span className="lang-card__flag" aria-hidden="true">{item.flag}</span>
                <div>
                  <h3 className="h3">{item.name}</h3>
                  <p className="lang-card__sub" lang={item.key}>{item.sub}</p>
                </div>
              </header>
              <p className="lang-card__text">{item.text}</p>
              <ul className="checks">
                {item.points.map((p) => (
                  <li key={p}>
                    <Icon name="check" size={18} strokeWidth={2.4} />
                    {p}
                  </li>
                ))}
              </ul>
              <p className="lang-card__fact">{item.fact}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
