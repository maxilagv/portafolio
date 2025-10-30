import { Sparkles, Zap } from 'lucide-react'
import { useVisualQuality } from '@context/VisualQualityContext'

export default function VisualQualityToggle() {
  const { quality, setQuality } = useVisualQuality()
  const high = quality === 'high'
  return (
    <button
      onClick={() => setQuality(high ? 'low' : 'high')}
      aria-label="Cambiar calidad visual"
      className="inline-flex items-center gap-2 px-2 py-1 rounded-lg hover:bg-white/10 transition-colors text-sm"
      title={high ? 'Cambiar a efectos bajos' : 'Cambiar a efectos altos'}
    >
      {high ? <Sparkles className="w-4 h-4" /> : <Zap className="w-4 h-4" />}
      {high ? 'Efectos: Alto' : 'Efectos: Bajo'}
    </button>
  )}

