import { srcSet } from '../config.js'
import { useLang } from '../i18n/index.jsx'
import SectionHead from './SectionHead.jsx'

// Лекторы — «полароиды» на скотче, чётные и нечётные едут с разной скоростью
export default function Teachers() {
  const { t } = useLang()
  const tt = t.teachers
  return (
    <section id="teachers" className="section teachers" aria-labelledby="teachers-title">
      <div className="container">
        <SectionHead eyebrow={tt.eyebrow} title={tt.title} lead={tt.lead} id="teachers-title" align="center" />
        <ul className="teachers__grid" data-plx-root>
          {tt.items.map((p, i) => (
            <li key={p.name} className="teacher-col" data-plx>
              <article className={`teacher teacher--${p.lang}`} data-reveal style={{ '--d': `${i * 90}ms` }}>
                <div className="teacher__photo">
                  <img src={`/images/${p.img}-sm.webp`} srcSet={srcSet(p.img)} sizes="(max-width: 640px) 80vw, 300px" alt={p.name} loading="lazy" decoding="async" />
                  <span className="teacher__lang">{p.lang.toUpperCase()}</span>
                </div>
                <h3 className="h3">{p.name}</h3>
                <p className="teacher__role">{p.role}</p>
                <p className="teacher__note">{p.note}</p>
                <p className="teacher__fun">{p.fun}</p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
