import { useEffect } from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Marquee from './components/Marquee.jsx'
import Languages from './components/Languages.jsx'
import Courses from './components/Courses.jsx'
import ParallaxBand from './components/ParallaxBand.jsx'
import Method from './components/Method.jsx'
import Levels from './components/Levels.jsx'
import Teachers from './components/Teachers.jsx'
import Pricing from './components/Pricing.jsx'
import Testimonials from './components/Testimonials.jsx'
import Faq from './components/Faq.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import CookieConsent from './components/CookieConsent.jsx'
import { useReveal } from './hooks/useReveal.js'
import { useParallax } from './hooks/useParallax.js'
import { LangProvider, useLang } from './i18n/index.jsx'
import { applyHead } from './seo.js'

export default function App({ initialLang }) {
  const lang = initialLang
  useReveal(lang)
  useParallax(lang)

  useEffect(() => {
    applyHead(lang)
  }, [lang])

  return (
    <LangProvider lang={lang}>
      <SkipLink />
      <CookieConsent />
      <Header />
      <main id="main" tabIndex={-1}>
        <Hero />
        <Marquee />
        <Languages />
        <Courses />
        <Band name="london" tone="en" lang="en" />
        <Method />
        <Levels />
        <Teachers />
        <Band name="berlin" tone="de" lang="de" />
        <Pricing />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </LangProvider>
  )
}

function Band({ name, ...rest }) {
  const { t } = useLang()
  return <ParallaxBand name={name} {...t.bands[name]} {...rest} />
}

function SkipLink() {
  const { t } = useLang()
  return <a href="#main" className="skip-link">{t.nav.skip}</a>
}
