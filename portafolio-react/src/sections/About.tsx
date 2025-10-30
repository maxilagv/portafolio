import Section from '@components/Section'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <Section id="sobre-mi" title="¿Por qué sería valioso para su empresa?">
      <div className="grid md:grid-cols-2 gap-8 items-stretch">
        <motion.div className="glass-card p-8 rounded-2xl glow-on-hover" initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true, amount:.3}}>
          <h3 className="text-2xl font-bold mb-4 text-blue-400">Mi Enfoque</h3>
          <p className="text-slate-300 mb-6 leading-relaxed">
            Construyo aplicaciones y diseño arquitecturas que crecen con tu negocio. Trabajo con foco en escalabilidad, seguridad y mantenibilidad.
          </p>
          <ul className="space-y-3 text-slate-300">
            <li>• Soluciones que se adaptan a la evolución de tu empresa</li>
            <li>• Mejores prácticas que reducen costos de mantenimiento</li>
            <li>• Optimización de procesos mediante automatización</li>
          </ul>
        </motion.div>
        <motion.div className="glass-card p-8 rounded-2xl bg-gradient-to-br from-blue-700/30 to-purple-700/30" initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true, amount:.3}}>
          <h3 className="text-2xl font-bold mb-4 text-blue-200">Mi Valor</h3>
          <p className="text-slate-200 leading-relaxed">
            Combino conocimientos técnicos con comprensión del negocio para identificar oportunidades y proponer soluciones que generen impacto real.
          </p>
        </motion.div>
      </div>
    </Section>
  )
}

