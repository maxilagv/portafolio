import Section from '@components/Section'
import TechGrid from '@components/TechGrid'
import { skillsLogos } from '@data/skills'

export default function Skills() {
  return (
    <Section id="habilidades" title="Habilidades">
      <div className="max-w-4xl mx-auto">
        <TechGrid techs={skillsLogos} />
      </div>
    </Section>
  )
}
