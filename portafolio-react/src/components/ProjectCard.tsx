import { Github, ExternalLink } from 'lucide-react'

export type Project = {
  title: string
  description: string
  tags: string[]
  links?: { github?: string; demo?: string }
}

export default function ProjectCard({ title, description, tags, links }: Project) {
  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = e.currentTarget
    const r = el.getBoundingClientRect()
    const px = (e.clientX - r.left) / r.width
    const py = (e.clientY - r.top) / r.height
    const rx = (py - 0.5) * 6
    const ry = (0.5 - px) * 6
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
      className="relative glass-card rounded-2xl p-6 flex flex-col justify-between glow-on-hover h-full will-change-transform"
      style={{ transform: 'perspective(800px) rotateX(var(--rx, 0)) rotateY(var(--ry, 0))' }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      <div>
        <h3 className="text-xl font-semibold text-blue-300 mb-2">{title}</h3>
        <p className="text-slate-300 mb-4 leading-relaxed">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((t) => (
            <span key={t} className="text-xs bg-white/10 text-slate-200 px-2 py-1 rounded-full border border-white/10">
              {t}
            </span>
          ))}
        </div>
      </div>
      {(links?.github || links?.demo) && (
        <div className="flex gap-3 pt-2">
          {links.github && (
            <a href={links.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-blue-300">
              <Github className="w-4 h-4" /> Código
            </a>
          )}
          {links.demo && (
            <a href={links.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-blue-300">
              <ExternalLink className="w-4 h-4" /> Demo
            </a>
          )}
        </div>
      )}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-2xl"
        style={{
          background: 'radial-gradient(120px 120px at var(--px, 50%) var(--py, 50%), rgba(255,255,255,.18), transparent 60%)',
          opacity: 0.0,
          transition: 'opacity .2s ease',
        }}
        onMouseEnter={(e) => ((e.currentTarget.style.opacity = '1'))}
        onMouseLeave={(e) => ((e.currentTarget.style.opacity = '0'))}
      />
    </div>
  )
}
