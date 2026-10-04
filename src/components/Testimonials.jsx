import { useLang } from '../i18n/index.jsx'
import Icon from './Icon.jsx'
import SectionHead from './SectionHead.jsx'

// Отзывы — цветные стикеры-записки, каждая плывёт со своей скоростью
export default function Testimonials() {
  const { t } = useLang()
  const r = t.testimonials
  return (
    <section className="section reviews" aria-labelledby="reviews-title">
      <div className="container">
        <SectionHead eyebrow={r.eyebrow} title={r.title} id="reviews-title" />
        <ul className="reviews__grid" data-plx-root>
          {r.items.map((item, i) => (
            <li key={item.name} className="note-col" data-plx>
              <figure className={`note note--${i % 4}`} data-reveal style={{ '--d': `${i * 90}ms` }}>
                <div className="note__stars" aria-label="5/5">
                  {[0, 1, 2, 3, 4].map((s) => (
                    <Icon key={s} name="star" size={16} />
                  ))}
                </div>
                <blockquote>
                  <p>{item.text}</p>
                </blockquote>
                <figcaption>
                  <strong>{item.name}</strong>
                  <span>{item.course}</span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
