import { useRef } from 'react'
import { srcSet } from '../config.js'
import { useLang } from '../i18n/index.jsx'
import { usePointerTilt } from '../hooks/useParallax.js'
import Icon from './Icon.jsx'
import Rich from './Rich.jsx'

// Слова-стикеры: позиция в «сцене», глубина параллакса (px на полный проход экрана),
// сила наклона за курсором, поворот и цвет. Отрицательная глубина — слой «ближе» и летит быстрее.
const stickers = [
  { x: '-4%', y: '6%', depth: -260, tilt: 26, rot: -8, tone: 'en' },
  { x: '66%', y: '-3%', depth: -180, tilt: 18, rot: 6, tone: 'de' },
  { x: '76%', y: '46%', depth: -320, tilt: 30, rot: -5, tone: 'yellow' },
  { x: '-8%', y: '58%', depth: -220, tilt: 22, rot: 7, tone: 'mint' },
  { x: '30%', y: '93%', depth: -140, tilt: 14, rot: -4, tone: 'en' },
  { x: '6%', y: '94%', depth: -300, tilt: 28, rot: 5, tone: 'de' },
]

export default function Hero() {
  const { t } = useLang()
  const h = t.hero
  const scene = useRef(null)
  usePointerTilt(scene)

  return (
    <section id="home" className="hero" aria-labelledby="hero-title" ref={scene} data-plx-root>
      <div className="container hero__inner">
        <div className="hero__copy">
          <p className="hero__note" data-reveal>{h.note}</p>
          <h1 id="hero-title" className="h1" data-reveal>
            <Rich text={h.title} />
          </h1>
          <p className="hero__lead" data-reveal>{h.lead}</p>
          <div className="hero__actions" data-reveal>
            <a href="#contact" className="btn btn--yellow btn--big">
              {h.primary}
              <Icon name="arrow" size={20} />
            </a>
            <a href="#levels" className="btn btn--ghost btn--big">{h.secondary}</a>
          </div>
          <ul className="hero__stats" data-reveal>
            {h.stats.map((s) => (
              <li key={s.label}>
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="hero__stage" aria-hidden="true">
          <div className="hero__blob layer" data-plx style={{ '--depth': 90, '--tilt': -10 }} />
          <div className="hero__photo layer" data-plx style={{ '--depth': 40, '--tilt': 8 }}>
            <img src="/images/hero.webp" srcSet={srcSet('hero')} sizes="(max-width: 900px) 92vw, 600px" alt="" fetchPriority="high" />
          </div>
          <figure className="hero__polaroid layer" data-plx style={{ '--depth': -110, '--tilt': 20, '--rot': '5deg' }}>
            <img src="/images/polaroid-sm.webp" alt="" loading="lazy" decoding="async" />
            <figcaption>{h.polaroid}</figcaption>
          </figure>
          <div className="hero__free layer" data-plx style={{ '--depth': -200, '--tilt': 34, '--rot': '-10deg' }}>
            <span>{h.free}</span>
          </div>
          {h.stickers.map((word, i) => {
            const s = stickers[i]
            return (
              <span
                key={word}
                className={`sticker sticker--${s.tone} layer`}
                data-plx
                style={{ left: s.x, top: s.y, '--depth': s.depth, '--tilt': s.tilt, '--rot': `${s.rot}deg` }}
              >
                <span className="sticker__inner" style={{ animationDelay: `${i * -1.3}s` }}>{word}</span>
              </span>
            )
          })}
          <svg className="hero__doodle layer" data-plx style={{ '--depth': -60, '--tilt': 12 }} viewBox="0 0 120 120">
            <path d="M60 8l9 34 34 9-34 9-9 34-9-34-34-9 34-9z" />
          </svg>
        </div>
      </div>
    </section>
  )
}
