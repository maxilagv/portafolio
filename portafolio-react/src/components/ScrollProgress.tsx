import { useEffect, useState } from 'react'

export default function ScrollProgress() {
  const [p, setP] = useState(0)
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement
      const progress = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100
      setP(progress)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="h-[3px] bg-gradient-to-r from-blue-500 via-purple-500 to-teal-400" style={{ width: `${p}%` }} />
    </div>
  )
}

