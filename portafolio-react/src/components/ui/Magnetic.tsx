import { useRef } from 'react'

export default function Magnetic({ children, strength = 12 }: { children: React.ReactNode; strength?: number }) {
  const ref = useRef<HTMLDivElement>(null)

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current!
    const r = el.getBoundingClientRect()
    const x = ((e.clientX - r.left) / r.width - 0.5) * strength
    const y = ((e.clientY - r.top) / r.height - 0.5) * strength
    el.style.transform = `translate3d(${x}px, ${y}px, 0)`
  }

  function onLeave() {
    const el = ref.current!
    el.style.transform = 'translate3d(0,0,0)'
  }

  return (
    <div ref={ref} onMouseMove={onMove} onMouseLeave={onLeave} className="will-change-transform">
      {children}
    </div>
  )
}

