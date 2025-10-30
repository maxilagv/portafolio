import { useEffect, useState } from 'react'

export function useActiveSection(ids: string[], offset = 0.6) {
  const [active, setActive] = useState<string>(ids[0] ?? '')
  useEffect(() => {
    const observers: IntersectionObserver[] = []
    const opts: IntersectionObserverInit = { root: null, threshold: Array.from({ length: 10 }, (_, i) => (i + 1) / 10) }
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > offset) {
            setActive(id)
          }
        })
      }, opts)
      obs.observe(el)
      observers.push(obs)
    })
    return () => observers.forEach((o) => o.disconnect())
  }, [ids.join(','), offset])
  return active
}

