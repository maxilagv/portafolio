export type Tech = { label: string; url: string }

export default function TechGrid({ techs }: { techs: Tech[] }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {techs.map((t) => (
        <div key={t.label} className="tech-logo w-full h-28 rounded-xl border border-white/10 flex flex-col items-center justify-center">
          <img src={t.url} alt={t.label} className="h-10 mb-2" loading="lazy" />
          <div className="text-sm font-medium text-slate-200">{t.label}</div>
        </div>
      ))}
    </div>
  )
}
