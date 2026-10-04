import { useLang } from '../i18n/index.jsx'
import Icon from './Icon.jsx'
import SectionHead from './SectionHead.jsx'

export default function Pricing() {
  const { t } = useLang()
  const p = t.pricing
  return (
    <section id="pricing" className="section pricing" aria-labelledby="pricing-title">
      <div className="container">
        <SectionHead eyebrow={p.eyebrow} title={p.title} lead={p.lead} id="pricing-title" align="center" />
        <div className="pricing__grid">
          {p.plans.map((plan, i) => (
            <article key={plan.name} className={`plan${plan.featured ? ' plan--featured' : ''}`} data-reveal style={{ '--d': `${i * 110}ms` }}>
              {plan.featured && <p className="plan__badge">{p.popular}</p>}
              <h3 className="h3">{plan.name}</h3>
              <p className="plan__size">{plan.size}</p>
              <p className="plan__price">
                <small>{p.from}</small> <strong>{plan.price}</strong> <span>{plan.unit}</span>
              </p>
              <ul className="checks">
                {plan.points.map((pt) => (
                  <li key={pt}>
                    <Icon name="check" size={18} strokeWidth={2.4} />
                    {pt}
                  </li>
                ))}
              </ul>
              <a href="#contact" className={`btn ${plan.featured ? 'btn--ink' : 'btn--ghost'}`}>
                {p.cta}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
