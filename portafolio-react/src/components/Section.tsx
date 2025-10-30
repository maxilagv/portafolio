import { motion } from 'framer-motion'
import { PropsWithChildren } from 'react'

type Props = PropsWithChildren<{ id?: string; title?: string; className?: string }>

export default function Section({ id, title, className, children }: Props) {
  return (
    <section id={id} className={`section ${className ?? ''}`}>
      <div className="container">
        {title && (
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            {title}
          </motion.h2>
        )}
        {children}
      </div>
    </section>
  )
}

