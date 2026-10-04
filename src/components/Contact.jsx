import { useState } from 'react'
import { brand, mapsUrl, phoneHref } from '../config.js'
import { useLang } from '../i18n/index.jsx'
import Icon from './Icon.jsx'
import SectionHead from './SectionHead.jsx'

// Форма записи на пробный урок. Демо: данные никуда не отправляются — показываем благодарность.
// Для боевого сайта подключить обработчик (Formspree, свой API) в onSubmit.
export default function Contact() {
  const { t } = useLang()
  const c = t.contact
  const f = c.form
  const [sent, setSent] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="section contact" aria-labelledby="contact-title">
      <div className="container contact__grid">
        <div className="contact__info">
          <SectionHead eyebrow={c.eyebrow} title={c.title} lead={c.lead} id="contact-title" />
          <ul className="contact__list" data-reveal>
            <li>
              <Icon name="pin" />
              <div>
                <span>{c.address}</span>
                <a href={mapsUrl} target="_blank" rel="noopener noreferrer">
                  {brand.street}, {brand.postalCode} {brand.city}
                </a>
                <small>{c.tram}</small>
              </div>
            </li>
            <li>
              <Icon name="phone" />
              <div>
                <span>{c.phone}</span>
                <a href={phoneHref}>{brand.phone}</a>
              </div>
            </li>
            <li>
              <Icon name="mail" />
              <div>
                <span>{c.email}</span>
                <a href={`mailto:${brand.email}`}>{brand.email}</a>
              </div>
            </li>
            <li>
              <Icon name="clock" />
              <div>
                <span>{c.hoursTitle}</span>
                {c.hours.map((h) => (
                  <p key={h}>{h}</p>
                ))}
              </div>
            </li>
          </ul>
        </div>

        <div className="form-card" data-reveal>
          {sent ? (
            <div className="form-card__thanks" role="status">
              <span className="form-card__check">
                <Icon name="check" size={40} strokeWidth={2.6} />
              </span>
              <p>{f.thanks}</p>
              <button type="button" className="btn btn--ghost" onClick={() => setSent(false)}>
                {f.again}
              </button>
            </div>
          ) : (
            <form className="form" onSubmit={onSubmit}>
              <div className="field">
                <label htmlFor="f-name">{f.name}</label>
                <input id="f-name" name="name" autoComplete="given-name" required />
              </div>
              <div className="field">
                <label htmlFor="f-contact">{f.contact}</label>
                <input id="f-contact" name="contact" autoComplete="tel" required />
              </div>

              <fieldset className="field field--full">
                <legend>{f.language}</legend>
                <div className="chips">
                  {f.languages.map((lang, i) => (
                    <label key={lang} className={`chip chip--${['en', 'de', 'both'][i]}`}>
                      <input type="radio" name="language" value={lang} defaultChecked={i === 0} />
                      <span>{lang}</span>
                    </label>
                  ))}
                </div>
              </fieldset>

              <div className="field">
                <label htmlFor="f-group">{f.group}</label>
                <select id="f-group" name="group">
                  {f.groups.map((g) => (
                    <option key={g}>{g}</option>
                  ))}
                </select>
              </div>
              <div className="field">
                <label htmlFor="f-level">{f.level}</label>
                <select id="f-level" name="level">
                  {f.levels.map((g) => (
                    <option key={g}>{g}</option>
                  ))}
                </select>
              </div>

              <fieldset className="field field--full">
                <legend>{f.mode}</legend>
                <div className="chips">
                  {f.modes.map((m, i) => (
                    <label key={m} className="chip">
                      <input type="radio" name="mode" value={m} defaultChecked={i === 0} />
                      <span>{m}</span>
                    </label>
                  ))}
                </div>
              </fieldset>

              <div className="field field--full">
                <label htmlFor="f-msg">{f.message}</label>
                <textarea id="f-msg" name="message" rows="3" />
              </div>

              <label className="consent field--full">
                <input type="checkbox" required />
                <span>{f.consent}</span>
              </label>

              <button type="submit" className="btn btn--yellow btn--big field--full">
                {f.submit}
                <Icon name="arrow" size={20} />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
