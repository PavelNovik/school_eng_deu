import { useLang } from '../i18n/index.jsx'

// Две бегущие строки: при прокрутке сдвигаются в разные стороны (горизонтальный параллакс).
// Внешняя обёртка обрезает наклонённую ленту, чтобы не было горизонтальной прокрутки.
export default function Marquee() {
  const { t } = useLang()
  const words = [...t.marquee, ...t.marquee]
  return (
    <div className="marquee-wrap" aria-hidden="true">
      <div className="marquee" data-plx-root>
        {[0, 1].map((row) => (
          <div key={row} className={`marquee__row marquee__row--${row}`} data-plx>
            {words.map((w, i) => (
              <span key={i}>
                {w}
                <i>✦</i>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
