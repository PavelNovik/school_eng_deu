// Общие настройки, не зависящие от языка. Тексты — в src/i18n/*.js
import photos from '../scripts/images.json'

// Адрес, телефон и реквизиты — демо-заглушки, заменить на данные клиента
export const brand = {
  name: 'MOST',
  fullName: 'MOST — Szkoła Języka Angielskiego i Niemieckiego, Kraków',
  // Боевой адрес сайта — для canonical, sitemap и Schema.org.
  // При сборке на Vercel подставляется домен проекта (см. vite.config.js).
  siteUrl: __SITE_URL__ || 'https://most-szkola.pl',
  email: 'hello@most-szkola.pl',
  phone: '+48 512 300 440',
  street: 'ul. Karmelicka 34',
  postalCode: '31-128',
  district: 'Stare Miasto',
  city: 'Kraków',
  country: 'PL',
  geo: { lat: 50.0668, lng: 19.9298 },
  since: 2013,
  hours: [
    { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '09:00', closes: '20:30' },
    { days: ['Saturday'], opens: '09:00', closes: '14:00' },
  ],
  social: {
    instagram: 'https://instagram.com/most.krakow',
    facebook: 'https://facebook.com/most.krakow',
  },
}

export const phoneHref = `tel:${brand.phone.replace(/\s/g, '')}`

export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${brand.street}, ${brand.postalCode} ${brand.city}`
)}`

export const img = (name) => `/images/${name}.webp`
export const imgSm = (name) => `/images/${name}-sm.webp`
export const srcSet = (name) => `${imgSm(name)} ${Math.round(photos[name].width / 2)}w, ${img(name)} ${photos[name].width}w`
export const photoSize = (name) => photos[name]

// Автор и ссылка на фото Unsplash — для подписи в футере (без повторов автора)
export const credits = Object.values(
  Object.fromEntries(Object.values(photos).map((p) => [p.user, { author: p.author, url: `https://unsplash.com/@${p.user}` }]))
)

export const navIds = ['home', 'languages', 'courses', 'method', 'levels', 'teachers', 'pricing', 'faq', 'contact']
