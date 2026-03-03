import { Canvas } from '@react-three/fiber'
import { ParticleSystem } from './ParticleSystem'

export function ParticleBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ alpha: true, antialias: false }}
      >
        <ParticleSystem />
      </Canvas>
    </div>
  )
}
