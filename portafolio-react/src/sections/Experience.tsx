import Section from '@components/Section'
import { experience } from '@data/experience'
import ExperienceCard from '@components/ExperienceCard'

export default function Experience() {
  return (
    <Section id="experiencia" title="Experiencia">
      <div className="grid sm:grid-cols-2 gap-6">
        {experience.map((e) => (
          <ExperienceCard key={e.company} {...e} />
        ))}
      </div>
    </Section>
  )
}
