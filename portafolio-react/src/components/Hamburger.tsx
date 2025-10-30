export default function Hamburger({ open }: { open: boolean }) {
  return (
    <div className="w-6 h-6 relative">
      <span className={`absolute left-0 top-1 block h-0.5 w-6 bg-white transition-transform ${open ? 'translate-y-2 rotate-45' : ''}`}></span>
      <span className={`absolute left-0 top-2.5 block h-0.5 w-6 bg-white transition-opacity ${open ? 'opacity-0' : 'opacity-100'}`}></span>
      <span className={`absolute left-0 top-4 block h-0.5 w-6 bg-white transition-transform ${open ? '-translate-y-2 -rotate-45' : ''}`}></span>
    </div>
  )
}

