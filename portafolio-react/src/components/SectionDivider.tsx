type Variant = 'wave' | 'tilt'

export default function SectionDivider({ variant = 'wave', flip = false }: { variant?: Variant; flip?: boolean }) {
  if (variant === 'tilt') {
    return (
      <div aria-hidden className={`relative h-12 overflow-hidden ${flip ? 'rotate-180' : ''}`}>
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <polygon fill="url(#g)" points="0,100 100,0 100,100" />
          <defs>
            <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0%" stopColor="#0f172a" />
              <stop offset="100%" stopColor="#1e293b" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    )
  }
  return (
    <div aria-hidden className={`relative h-16 overflow-hidden ${flip ? 'rotate-180' : ''}`}>
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
        <path fill="#0f172a" fillOpacity="1" d="M0,64L80,53.3C160,43,320,21,480,58.7C640,96,800,192,960,197.3C1120,203,1280,117,1360,74.7L1440,32L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
      </svg>
    </div>
  )
}

