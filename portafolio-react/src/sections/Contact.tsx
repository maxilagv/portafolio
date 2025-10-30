import Section from '@components/Section'
import ContactForm from '@components/ContactForm'

export default function Contact() {
  return (
    <Section id="contacto" title="Contacto">
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div className="glass-card p-6 rounded-2xl">
          <h3 className="text-xl font-semibold mb-3 text-blue-300">Hablemos</h3>
          <p className="text-slate-300">¿Tienes una idea o proyecto? Estoy disponible para colaborar y construir soluciones de impacto.</p>
          <div className="flex flex-col gap-2 mt-4 text-sm text-slate-300">
            <a className="hover:text-blue-300" href="https://github.com/maxilagv" target="_blank" rel="noreferrer">GitHub: github.com/maxilagv</a>
            <a className="hover:text-blue-300" href="https://www.linkedin.com/in/maximo-lavagetto-b238332b9" target="_blank" rel="noreferrer">LinkedIn: /in/maximo-lavagetto-b238332b9</a>
            <a className="hover:text-blue-300" href="tel:+5491137725766">Teléfono: +54 11 3772-5766</a>
            <a className="hover:text-blue-300" href="mailto:maxilavagettogmail.com">Email: maxilavagettogmail.com</a>
          </div>
        </div>
        <div className="glass-card p-6 rounded-2xl">
          <ContactForm />
        </div>
      </div>
    </Section>
  )
}
