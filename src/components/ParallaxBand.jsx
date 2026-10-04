import { srcSet } from '../config.js'
import Rich from './Rich.jsx'

// Полноширинная фото-лента: кадр выше ленты и смещается медленнее прокрутки,
// заголовок — быстрее, рукописная пометка — в обратную сторону.
// transform вместо background-attachment: fixed — последний не работает в iOS Safari.
export default function ParallaxBand({ name, kicker, title, note, tone, lang }) {
  return (
    <section className={`band band--${tone}`} aria-label={kicker} data-plx-root>
      <div className="band__media" data-plx>
        <img src={`/images/${name}.webp`} srcSet={srcSet(name)} sizes="100vw" alt="" loading="lazy" decoding="async" />
      </div>
      <div className="container band__content">
        <p className="band__kicker" data-plx>{kicker}</p>
        <p className="band__title" data-plx lang={lang}>
          <Rich text={title} />
        </p>
        <p className="band__note" data-plx>{note}</p>
      </div>
    </section>
  )
}
