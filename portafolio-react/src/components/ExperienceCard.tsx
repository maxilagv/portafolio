import { LinkButton } from '@components/ui/Button'

export type ExperienceCardProps = {
  role: string
  company: string
  period: string
  points: string[]
  site?: string
}

export default function ExperienceCard({ role, company, period, points, site }: ExperienceCardProps) {
  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = e.currentTarget
    const r = el.getBoundingClientRect()
    const px = (e.clientX - r.left) / r.width
    const py = (e.clientY - r.top) / r.height
    const rx = (py - 0.5) * 4
    const ry = (0.5 - px) * 4
    el.style.setProperty('--rx', `${rx}deg`)
    el.style.setProperty('--ry', `${ry}deg`)
    el.style.setProperty('--px', `${px * 100}%`)
    el.style.setProperty('--py', `${py * 100}%`)
  }

  function onLeave(e: React.MouseEvent<HTMLDivElement>) {
    const el = e.currentTarget
    el.style.removeProperty('--rx')
    el.style.removeProperty('--ry')
  }

  return (
    <div
      className="relative glass-card rounded-2xl p-6 flex flex-col gap-3 glow-on-hover h-full border border-white/10"
      style={{ transform: 'perspective(900px) rotateX(var(--rx, 0)) rotateY(var(--ry, 0))' }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      <div>
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="text-xl font-semibold text-blue-300">{company}</h3>
          <span className="text-xs text-slate-400">{period}</span>
        </div>
        <div className="text-slate-200 font-medium">{role}</div>
      </div>
      <ul className="text-slate-300 list-disc ps-5 space-y-1">
        {points.slice(0, 4).map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>

      <div className="mt-auto pt-2">
        {site && (
          <LinkButton href={site} target="_blank" rel="noreferrer" variant="primary" magnetic className="px-5 py-2">
            Ver sitio
          </LinkButton>
        )}
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-2xl"
        style={{
          background: 'radial-gradient(120px 120px at var(--px, 50%) var(--py, 50%), rgba(255,255,255,.14), transparent 60%)',
          opacity: 0.0,
          transition: 'opacity .2s ease',
        }}
        onMouseEnter={(e) => ((e.currentTarget.style.opacity = '1'))}
        onMouseLeave={(e) => ((e.currentTarget.style.opacity = '0'))}
      />
    </div>
  )
}

