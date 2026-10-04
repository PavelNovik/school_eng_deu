import { useState } from 'react'
import { useLang } from '../i18n/index.jsx'
import Icon from './Icon.jsx'
import SectionHead from './SectionHead.jsx'

// Шкала CEFR: «лестница» A1–C2 (ступени поднимаются при прокрутке) + карточка выбранного уровня
export default function Levels() {
  const { t } = useLang()
  const l = t.levels
  const [active, setActive] = useState(2)
  const cur = l.items[active]

  const onKey = (e) => {
    const dir = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 }[e.key]
    if (!dir) return
    e.preventDefault()
    const next = (active + dir + l.items.length) % l.items.length
    setActive(next)
    document.getElementById(`level-tab-${next}`)?.focus()
  }

  return (
    <section id="levels" className="section levels" aria-labelledby="levels-title">
      <div className="container levels__grid">
        <SectionHead eyebrow={l.eyebrow} title={l.title} lead={l.lead} id="levels-title" />
        <div className="level-card" id="level-panel" role="tabpanel" aria-labelledby={`level-tab-${active}`} aria-live="polite">
          <p className="level-card__code">
            {cur.code} <span>{cur.name}</span>
          </p>
          <p className="level-card__can">{cur.can}</p>
          <p className="level-card__time">
            <Icon name="clock" size={18} /> {l.duration}: <strong>{cur.time}</strong>
          </p>
          <a href="#contact" className="btn btn--yellow">
            {l.cta}
            <Icon name="arrow" size={18} />
          </a>
        </div>

        <div className="stairs" role="tablist" aria-label={l.eyebrow} onKeyDown={onKey} data-plx-root>
          {l.items.map((item, i) => (
            <button
              key={item.code}
              id={`level-tab-${i}`}
              type="button"
              role="tab"
              aria-selected={i === active}
              aria-controls="level-panel"
              tabIndex={i === active ? 0 : -1}
              className={`stair${i === active ? ' is-active' : ''}${i < active ? ' is-done' : ''}`}
              style={{ '--i': i }}
              onClick={() => setActive(i)}
              data-plx
            >
              <span className="stair__code">{item.code}</span>
              <span className="stair__name">{item.name}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
