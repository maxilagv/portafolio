import { Canvas, useFrame } from '@react-three/fiber'
import { Icosahedron, Stars } from '@react-three/drei'
import { EffectComposer, Bloom, Vignette } from '@react-three/postprocessing'
import { useRef } from 'react'
import type { Mesh } from 'three'
import { useVisualQuality } from '@context/VisualQualityContext'
import { usePrefersReducedMotion } from '@hooks/usePrefersReducedMotion'

function RotatingIcosahedron() {
  const ref = useRef<Mesh>(null)
  useFrame((state) => {
    if (!ref.current) return
    const t = state.clock.getElapsedTime()
    ref.current.rotation.x = Math.sin(t / 2) / 6
    ref.current.rotation.y = t / 3
  })
  return (
    <Icosahedron args={[6, 1]} position={[0, 0, -20]}>
      <meshStandardMaterial wireframe color="#60a5fa" transparent opacity={0.35} />
    </Icosahedron>
  )
}

export default function Background3D() {
  const { quality } = useVisualQuality()
  const reduced = usePrefersReducedMotion()
  const high = !reduced && quality === 'high'

  if (!high) return null

  return (
    <div className="pointer-events-none fixed inset-0 -z-10" aria-hidden>
      <Canvas
        dpr={[1, 2]}
        gl={{ powerPreference: 'high-performance', antialias: false }}
        camera={{ fov: 60, position: [0, 0, 10] }}
      >
        <color attach="background" args={[0, 0, 0]} />
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={0.3} />

        <Stars radius={80} depth={60} count={3000} factor={4} fade speed={0.6} />
        <RotatingIcosahedron />

        <EffectComposer multisampling={0} disableNormalPass>
          <Bloom intensity={0.6} luminanceThreshold={0.15} mipmapBlur radius={0.7} />
          <Vignette eskil={false} offset={0.2} darkness={0.5} />
        </EffectComposer>
      </Canvas>
    </div>
  )
}

