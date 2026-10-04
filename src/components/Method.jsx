import { useLang } from '../i18n/index.jsx'
import Icon from './Icon.jsx'
import SectionHead from './SectionHead.jsx'

// 4 шага. Рукописная пунктирная линия «дорисовывается» по мере прокрутки (stroke-dashoffset от --p).
export default function Method() {
  const { t } = useLang()
  const m = t.method
  return (
    <section id="method" className="section method" aria-labelledby="method-title">
      <div className="container">
        <SectionHead eyebrow={m.eyebrow} title={m.title} lead={m.lead} id="method-title" light />
        <div className="method__track" data-plx-root>
          <svg className="method__line" viewBox="0 0 1160 120" preserveAspectRatio="none" aria-hidden="true" focusable="false">
            <path data-plx pathLength="1" d="M32 32 C 180 32, 180 88, 329 88 S 480 32, 626 32 S 775 88, 923 88 S 1100 50, 1160 30" />
          </svg>
          <ol className="method__steps">
            {m.steps.map((s, i) => (
              <li key={s.title} className="step" data-reveal style={{ '--d': `${i * 120}ms` }}>
                <span className="step__num">{i + 1}</span>
                <span className="step__icon">
                  <Icon name={s.icon} size={28} />
                </span>
                <h3 className="h3">{s.title}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ol>
          <p className="method__note" data-plx>{m.note}</p>
        </div>
      </div>
    </section>
  )
}
