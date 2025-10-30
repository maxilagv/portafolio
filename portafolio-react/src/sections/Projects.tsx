import Section from '@components/Section'
import ProjectCard from '@components/ProjectCard'
import { projects } from '@data/projects'

export default function Projects() {
  return (
    <Section id="proyectos" title="Proyectos Personales">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </Section>
  )
}
