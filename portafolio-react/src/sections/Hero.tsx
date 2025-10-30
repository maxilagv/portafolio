import { motion } from 'framer-motion'
import { LinkButton } from '@components/ui/Button'

export default function Hero() {
  return (
    <div className="relative overflow-hidden min-h-[85dvh] flex items-center">
      <div className="container text-center">
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6 typewriter"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Máximo Lavagetto
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-blue-300 mb-8"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: .1 }}
        >
          Desarrollador Full Stack | Ingeniería de Software
        </motion.p>
        <motion.div
          className="flex flex-wrap justify-center gap-6"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: .2 }}
        >
          <LinkButton href="#proyectos" variant="primary" magnetic className="px-8 py-4 glow-on-hover">Ver Proyectos</LinkButton>
          <LinkButton href="#contacto" variant="ghost" magnetic className="px-8 py-4 glow-on-hover">Contactar</LinkButton>
        </motion.div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#sobre-mi" className="text-blue-400">↓</a>
        </div>
      </div>
    </div>
  )
}
