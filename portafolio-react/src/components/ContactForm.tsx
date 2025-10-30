import type React from 'react'

export default function ContactForm() {
  const email = 'maxilavagettogmail.com'
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const name = form.get('name') as string
    const subject = `Contacto Portafolio - ${name}`
    const body = `Hola, soy ${name}.\n\n${form.get('message')}`
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div>
        <label className="block text-sm mb-1" htmlFor="name">Nombre</label>
        <input id="name" name="name" required className="w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400" />
      </div>
      <div>
        <label className="block text-sm mb-1" htmlFor="message">Mensaje</label>
        <textarea id="message" name="message" rows={4} required className="w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400" />
      </div>
      <button className="px-6 py-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium glow-on-hover">Enviar</button>
    </form>
  )
}
