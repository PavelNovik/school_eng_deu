import { srcSet } from '../config.js'
import { useLang } from '../i18n/index.jsx'
import Icon from './Icon.jsx'
import SectionHead from './SectionHead.jsx'

// Карточки курсов. На десктопе колонки едут с разной скоростью (--depth задаёт CSS по позиции),
// а фото внутри карточки — чуть медленнее рамки.
export default function Courses() {
  const { t } = useLang()
  const c = t.courses
  return (
    <section id="courses" className="section courses" aria-labelledby="courses-title">
      <div className="container">
        <SectionHead eyebrow={c.eyebrow} title={c.title} lead={c.lead} id="courses-title" />
        <div className="courses__grid" data-plx-root>
          {c.items.map((item, i) => (
            <div key={item.title} className="course-col" data-plx>
              <article className="course" data-reveal style={{ '--d': `${(i % 3) * 100}ms` }}>
                <div className="course__media">
                  <img
                    src={`/images/${item.img}-sm.webp`}
                    srcSet={srcSet(item.img)}
                    sizes="(max-width: 640px) 92vw, (max-width: 1000px) 46vw, 380px"
                    alt=""
                    loading="lazy"
                    decoding="async"
                    data-plx
                  />
                  <span className="course__age">{item.age}</span>
                </div>
                <div className="course__body">
                  <h3 className="h3">{item.title}</h3>
                  <p>{item.text}</p>
                  <footer className="course__meta">
                    <span>
                      <strong>{item.hours}</strong> {c.hours}
                    </span>
                    <span className="course__tag">{item.tag}</span>
                  </footer>
                </div>
                <a href="#contact" className="course__link" aria-label={`${t.nav.cta}: ${item.title}`}>
                  <Icon name="arrow" size={20} />
                </a>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
