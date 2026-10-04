import Rich from './Rich.jsx'

// Заголовок секции: рукописный eyebrow со стрелкой + заголовок с маркерным выделением
export default function SectionHead({ eyebrow, title, lead, id, align, light }) {
  const cls = ['section-head', align === 'center' && 'section-head--center', light && 'section-head--light']
  return (
    <header className={cls.filter(Boolean).join(' ')} data-reveal>
      <p className="eyebrow">
        {eyebrow}
        <svg className="eyebrow__arrow" viewBox="0 0 60 24" aria-hidden="true" focusable="false">
          <path d="M2 6c14 2 30 6 46 14M48 20l-9-.5M48 20l-2-8.5" />
        </svg>
      </p>
      <h2 id={id} className="h2">
        <Rich text={title} />
      </h2>
      {lead && <p className="section-head__lead">{lead}</p>}
    </header>
  )
}
