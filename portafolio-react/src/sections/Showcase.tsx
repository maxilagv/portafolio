import Section from '@components/Section'
import { motion } from 'framer-motion'

const text = 'Este portafolio fue diseñado por mí para mostrar mis habilidades de React y TypeScript.'

export default function Showcase() {
  return (
    <Section id="showcase" title="Sobre este sitio">
      <div className="relative max-w-4xl mx-auto text-center overflow-hidden">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-teal-300 bg-clip-text text-transparent"
        >
          Hecho con ❤️ usando React, TypeScript, Tailwind, Framer Motion y Three.js
        </motion.h3>
        <div className="relative p-6 rounded-2xl glass-card">
          <AnimatedText text={text} />
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-teal-400/10 blur-2xl -z-10" />
        </div>
      </div>
    </Section>
  )
}

function AnimatedText({ text }: { text: string }) {
  const words = text.split(' ')
  return (
    <p className="text-lg md:text-xl leading-relaxed">
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          initial={{ opacity: 0, y: 10, filter: 'blur(2px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.45, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
          className={`inline-block${i < words.length - 1 ? ' mr-1.5' : ''}`}
        >
          {word}
        </motion.span>
      ))}
    </p>
  )
}
