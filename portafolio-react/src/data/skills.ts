export type SkillLogo = { label: string; url: string }

const cdn = (slug: string, variant: string = 'original') =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${slug}/${slug}-${variant}.svg`

export const skillsLogos: SkillLogo[] = [
  { label: 'HTML', url: cdn('html5') },
  { label: 'CSS', url: cdn('css3') },
  { label: 'TailwindCSS', url: cdn('tailwindcss', 'original') },
  { label: 'React', url: cdn('react') },
  { label: 'JavaScript', url: cdn('javascript') },
  { label: 'TypeScript', url: cdn('typescript') },
  { label: 'Node.js', url: cdn('nodejs', 'original') },
  { label: 'PostgreSQL', url: cdn('postgresql') },
  { label: 'MongoDB', url: cdn('mongodb') },
  { label: 'Docker', url: cdn('docker') },
  { label: 'Java', url: cdn('java') },
  { label: 'Spring Boot', url: cdn('spring') },
]
