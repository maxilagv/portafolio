export default function NoiseOverlay() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[-1] opacity-[.08]"
      style={{
        backgroundImage:
          'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR4nGNgYAAAAAMAASsJTYQAAAAASUVORK5CYII=)',
        backgroundRepeat: 'repeat',
      }}
    />
  )
}

