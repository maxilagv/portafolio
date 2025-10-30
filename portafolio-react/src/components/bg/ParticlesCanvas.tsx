import { useEffect, useRef } from 'react'
import { usePrefersReducedMotion } from '@hooks/usePrefersReducedMotion'
import { useVisualQuality } from '@context/VisualQualityContext'

type Particle = { x: number; y: number; vx: number; vy: number; r: number }

export default function ParticlesCanvas() {
  const ref = useRef<HTMLCanvasElement>(null)
  const mouse = useRef<{ x: number; y: number } | null>(null)
  const reduced = usePrefersReducedMotion()
  const { quality } = useVisualQuality()

  useEffect(() => {
    const canvas = ref.current!
    const ctx = canvas.getContext('2d')!
    let w = (canvas.width = window.innerWidth * window.devicePixelRatio)
    let h = (canvas.height = window.innerHeight * window.devicePixelRatio)
    canvas.style.width = '100%'
    canvas.style.height = '100%'
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio)

    const count = reduced || quality === 'low' ? 40 : 110
    const particles: Particle[] = Array.from({ length: count }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      r: Math.random() * 1.8 + 0.5,
    }))

    let raf = 0
    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY }
    }
    const onResize = () => {
      w = canvas.width = window.innerWidth * window.devicePixelRatio
      h = canvas.height = window.innerHeight * window.devicePixelRatio
      canvas.style.width = '100%'
      canvas.style.height = '100%'
      ctx.setTransform(1, 0, 0, 1, 0, 0)
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    }
    window.addEventListener('mousemove', onMove, { passive: true })
    window.addEventListener('resize', onResize)

    function tick() {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
      ctx.globalCompositeOperation = 'lighter'
      for (const p of particles) {
        // Mouse repulsion
        const m = mouse.current
        if (m) {
          const dx = p.x - m.x
          const dy = p.y - m.y
          const dist = Math.hypot(dx, dy)
          const min = 80
          if (dist < min) {
            const force = (min - dist) / min
            p.vx += (dx / dist) * force * 0.6
            p.vy += (dy / dist) * force * 0.6
          }
        }
        p.x += p.vx
        p.y += p.vy
        // soft wrap
        if (p.x < -10) p.x = window.innerWidth + 10
        if (p.x > window.innerWidth + 10) p.x = -10
        if (p.y < -10) p.y = window.innerHeight + 10
        if (p.y > window.innerHeight + 10) p.y = -10

        p.vx *= 0.98
        p.vy *= 0.98

        const grd = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 12)
        grd.addColorStop(0, 'rgba(99, 102, 241, 0.35)') // indigo-500
        grd.addColorStop(1, 'rgba(99, 102, 241, 0.0)')
        ctx.fillStyle = grd
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fill()
      }

      // connecting lines
      ctx.strokeStyle = 'rgba(96,165,250,0.15)'
      for (let i = 0; i < particles.length; i++) {
        const a = particles[i]
        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const d = dx * dx + dy * dy
          if (d < 140 * 140) {
            ctx.globalAlpha = 1 - d / (140 * 140)
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
      }
      ctx.globalAlpha = 1
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('resize', onResize)
    }
  }, [quality, reduced])

  return <canvas ref={ref} className="pointer-events-none fixed inset-0 -z-10" aria-hidden />
}

