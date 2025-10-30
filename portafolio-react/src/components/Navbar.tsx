import { useState, useEffect } from 'react'
import Hamburger from './Hamburger'
import ThemeToggle from './ThemeToggle'
import VisualQualityToggle from './VisualQualityToggle'
import { useActiveSection } from '@hooks/useActiveSection'

const links = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#sobre-mi', label: 'Sobre mí' },
  { href: '#experiencia', label: 'Experiencia' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#habilidades', label: 'Habilidades' },
  { href: '#contacto', label: 'Contacto' },
  { href: '#showcase', label: 'Sobre el sitio' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const active = useActiveSection(links.map(l => l.href.replace('#','')))

  useEffect(() => {
    const onHash = () => setOpen(false)
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  return (
    <header className="sticky top-0 z-50 backdrop-blur glass-card">
      <nav className="container flex items-center justify-between py-3">
        <a href="#inicio" className="font-semibold tracking-tight text-white">Máximo Lavagetto</a>
        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => {
            const id = l.href.replace('#','')
            return (
              <a key={l.href} href={l.href} data-active={active === id} className="nav-link text-white hover:text-blue-300 transition-colors py-2">
                {l.label}
              </a>
            )
          })}
          <VisualQualityToggle />
          <ThemeToggle />
        </div>
        <button className="md:hidden text-white" aria-label="Abrir menú" aria-expanded={open} onClick={() => setOpen((v) => !v)}>
          <Hamburger open={open} />
        </button>
      </nav>
      {open && (
        <div className="md:hidden container pb-4">
          <div className="flex flex-col gap-2">
            {links.map((l) => {
              const id = l.href.replace('#','')
              return (
                <a key={l.href} href={l.href} data-active={active === id} className="nav-link text-white hover:text-blue-300 transition-colors py-2">
                  {l.label}
                </a>
              )
            })}
            <div className="flex items-center gap-3 pt-2">
              <VisualQualityToggle />
              <ThemeToggle />
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
