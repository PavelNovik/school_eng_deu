import { useEffect } from 'react'

// Параллакс без библиотек: каждому [data-plx] выставляем CSS-переменную --p — положение его «якоря»
// относительно центра экрана: 1 — якорь ещё внизу, 0 — по центру, −1 — ушёл вверх.
// Якорь — ближайший [data-plx-root] (общий для слоёв одной сцены) или родитель элемента:
// меряем не сам элемент, чтобы его собственный transform не влиял на расчёт.
// Амплитуду и направление задаёт CSS (calc(var(--p) * …)), поэтому один хук обслуживает
// и слои героя, и фото-ленты, и бегущие строки. prefers-reduced-motion — всё стоит на месте.
export function useParallax(key) {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const els = [...document.querySelectorAll('[data-plx]')]
    const anchors = new Map(els.map((el) => [el, el.closest('[data-plx-root]') || el.parentElement]))
    const visible = new Set()
    let raf = 0

    const update = () => {
      raf = 0
      const vh = window.innerHeight
      visible.forEach((el) => {
        const r = anchors.get(el).getBoundingClientRect()
        const p = (r.top + r.height / 2 - vh / 2) / ((vh + r.height) / 2)
        el.style.setProperty('--p', Math.max(-1, Math.min(1, p)).toFixed(4))
      })
    }
    const request = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => (e.isIntersecting ? visible.add(e.target) : visible.delete(e.target)))
        request()
      },
      { rootMargin: '25% 0px' }
    )
    els.forEach((el) => io.observe(el))
    window.addEventListener('scroll', request, { passive: true })
    window.addEventListener('resize', request)
    return () => {
      io.disconnect()
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', request)
      window.removeEventListener('resize', request)
    }
  }, [key])
}

// Наклон слоёв за курсором (только мышь): --mx / --my от −1 до 1 на корне сцены
export function usePointerTilt(ref) {
  useEffect(() => {
    const el = ref.current
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce), (hover: none)').matches) return
    let raf = 0
    let next = null
    const onMove = (e) => {
      if (e.pointerType !== 'mouse') return
      const r = el.getBoundingClientRect()
      next = [((e.clientX - r.left) / r.width) * 2 - 1, ((e.clientY - r.top) / r.height) * 2 - 1]
      if (!raf)
        raf = requestAnimationFrame(() => {
          raf = 0
          el.style.setProperty('--mx', next[0].toFixed(3))
          el.style.setProperty('--my', next[1].toFixed(3))
        })
    }
    const onLeave = () => {
      el.style.setProperty('--mx', '0')
      el.style.setProperty('--my', '0')
    }
    el.addEventListener('pointermove', onMove)
    el.addEventListener('pointerleave', onLeave)
    return () => {
      cancelAnimationFrame(raf)
      el.removeEventListener('pointermove', onMove)
      el.removeEventListener('pointerleave', onLeave)
    }
  }, [ref])
}
