import { useEffect, useRef } from 'react'

function Orb({ color, size, top, left }: { color: string; size: number; top: string; left: string }) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current!
    let raf = 0
    const onMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 10
      const y = (e.clientY / window.innerHeight - 0.5) * 10
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        el.style.transform = `translate3d(${x}px, ${y}px, 0)`
      })
    }
    window.addEventListener('mousemove', onMove, { passive: true })
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', onMove)
    }
  }, [])
  return (
    <div
      ref={ref}
      className="absolute rounded-full blur-3xl opacity-40 mix-blend-screen"
      style={{ width: size, height: size, top, left, background: color }}
      aria-hidden
    />
  )
}

export default function Orbs() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10" aria-hidden>
      <Orb color="#3b82f641" size={420} top="10%" left="10%" />
      <Orb color="#8b5cf641" size={360} top="60%" left="70%" />
      <Orb color="#14b8a641" size={300} top="30%" left="75%" />
    </div>
  )
}

