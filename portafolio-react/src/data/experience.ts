export type ExperienceItem = {
  role: string
  company: string
  period: string
  points: string[]
  site?: string
}

export const experience: ExperienceItem[] = [
  {
    role: 'Desarrollador Backend & Arquitectura de Sistemas',
    company: 'Ensintonia',
    period: 'Actualidad',
    points: [
      'Migración del sistema desde Firebase a infraestructura propia (servidor y base de datos independiente).',
      'Desarrollo de panel administrativo modular (logística, clientes, ABM) y carrito con pagos y cifrado.',
      'Stack: Node.js, Express, SQL, Angular, Tailwind.',
      'Valor: Infraestructura escalable que reduce costos operativos y mejora la seguridad.',
    ],
    site: 'https://ensintoniacompleto.vercel.app/catalogo.html',
  },
  {
    role: 'Desarrollador Full Stack | Backend & Administración de Datos',
    company: 'Movicel',
    period: 'Anterior',
    points: [
      'Backend completo en Node.js con Express y base de datos PostgreSQL.',
      'Roles, autenticación, cifrado de datos y lógica de negocio escalable.',
      'Stack: Node.js, Express, SQL, PostgreSQL, Angular.js, TypeScript.',
      'Valor: Sistema robusto que maneja datos sensibles con seguridad y eficiencia.',
    ],
    site: 'https://movicel-q35v.vercel.app/',
  },
  {
    role: 'Desarrollador Full Stack',
    company: 'Mueblería Luciano',
    period: 'Histórico',
    points: [
      'Mi primer sitio web en producción con base de datos y servidor Firebase.',
      'Catálogo y administración básica, optimizado para SEO local.',
      'Stack: Firebase (Auth/DB/Hosting), HTML, CSS, JS.',
    ],
    site: 'https://www.respaldosomierluciano.com.ar',
  },
  {
    role: 'Desarrollador Backend',
    company: 'Asterixs',
    period: 'Histórico',
    points: [
      'Servidor Node con base de datos Firebase para sitio corporativo y flujo de contacto.',
      'Integración de servicios y despliegue automatizado.',
      'Stack: Node.js, Firebase, HTML, CSS.',
    ],
    site: 'https://www.asterixs.com.ar',
  },
]
