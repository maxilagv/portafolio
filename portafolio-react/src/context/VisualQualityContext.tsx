import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { usePrefersReducedMotion } from '@hooks/usePrefersReducedMotion'

type Quality = 'high' | 'low'

type Ctx = {
  quality: Quality
  setQuality: (q: Quality) => void
}

const VisualQualityContext = createContext<Ctx | null>(null)

export function VisualQualityProvider({ children }: { children: React.ReactNode }) {
  const reduced = usePrefersReducedMotion()
  const [quality, setQuality] = useState<Quality>('high')

  useEffect(() => {
    const stored = (localStorage.getItem('visual-quality') as Quality | null) ?? null
    const initial = reduced ? 'low' : stored ?? 'high'
    setQuality(initial)
  }, [reduced])

  useEffect(() => {
    localStorage.setItem('visual-quality', quality)
    document.documentElement.dataset.quality = quality
  }, [quality])

  const value = useMemo(() => ({ quality, setQuality }), [quality])
  return <VisualQualityContext.Provider value={value}>{children}</VisualQualityContext.Provider>
}

export function useVisualQuality() {
  const ctx = useContext(VisualQualityContext)
  if (!ctx) throw new Error('useVisualQuality must be used within VisualQualityProvider')
  return ctx
}

