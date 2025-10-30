type Item = {
  role: string
  company: string
  period: string
  points: string[]
}

export default function Timeline({ items }: { items: Item[] }) {
  return (
    <ol className="relative border-s border-white/10 ml-3">
      {items.map((it, idx) => (
        <li key={idx} className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-blue-400 rounded-full mt-2 -start-1.5 border border-blue-200/30" />
          <h4 className="text-lg font-semibold text-blue-300">{it.role}</h4>
          <div className="text-sm text-slate-300 mb-2">{it.company} • {it.period}</div>
          <ul className="list-disc ps-5 space-y-1 text-slate-300">
            {it.points.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  )
}

