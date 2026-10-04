import { createContext, useContext } from 'react'
import pl from './pl.js'

// Пока одна версия — польская на корне сайта. Новый язык: словарь + запись здесь.
export const dictionaries = { pl }
export const languages = ['pl']
export const defaultLang = 'pl'

export const langPath = (lang) => (lang === defaultLang ? '/' : `/${lang}/`)

export function langFromPath(pathname) {
  const seg = pathname.split('/')[1]
  return languages.includes(seg) ? seg : defaultLang
}

const LangContext = createContext(null)

export function LangProvider({ lang, children }) {
  return <LangContext.Provider value={{ lang, t: dictionaries[lang] }}>{children}</LangContext.Provider>
}

export const useLang = () => useContext(LangContext)
