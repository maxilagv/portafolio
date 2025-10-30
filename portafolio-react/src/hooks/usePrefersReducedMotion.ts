import { useEffect, useState } from 'react'

export function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const listener = () => setReduced(mq.matches)
    listener()
    mq.addEventListener?.('change', listener)
    return () => mq.removeEventListener?.('change', listener)
  }, [])
  return reduced
}

