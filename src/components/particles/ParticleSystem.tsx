import { useRef, useMemo, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { useMousePosition } from '@/hooks/useMousePosition'

const PARTICLE_COUNT = typeof window !== 'undefined' && window.innerWidth < 768 ? 400 : 800

const vertexShader = `
  uniform float uTime;
  uniform vec2 uMouse;
  uniform float uMouseRadius;

  attribute float aRandom;

  varying float vAlpha;
  varying float vColorShift;

  void main() {
    vec3 pos = position;

    // Sine-wave drift per particle
    float drift = sin(uTime * 0.3 + aRandom * 6.28) * 0.15;
    pos.x += drift;
    pos.y += cos(uTime * 0.2 + aRandom * 3.14) * 0.1;

    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);

    // Mouse repulsion
    vec4 projected = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    vec2 screenPos = projected.xy / projected.w;
    float dist = distance(screenPos, uMouse);
    float influence = smoothstep(uMouseRadius, 0.0, dist);
    vec2 repel = normalize(screenPos - uMouse + 0.001) * influence * 0.3;
    mvPosition.xy += repel;

    // Size attenuation by depth
    float size = (3.0 + aRandom * 4.0) * (1.0 + sin(uTime + aRandom * 10.0) * 0.2);
    gl_PointSize = size * (300.0 / -mvPosition.z);

    gl_Position = projectionMatrix * mvPosition;

    vAlpha = 0.3 + aRandom * 0.5;
    vColorShift = aRandom;
  }
`

const fragmentShader = `
  uniform vec3 uAccentColor;
  uniform float uTime;

  varying float vAlpha;
  varying float vColorShift;

  void main() {
    // Circular soft particle
    vec2 center = gl_PointCoord - 0.5;
    float dist = length(center);
    if (dist > 0.5) discard;

    // Additive glow falloff
    float glow = 1.0 - smoothstep(0.0, 0.5, dist);
    glow = pow(glow, 1.5);

    // Color variation: red -> warm orange/pink
    vec3 warmShift = vec3(
      1.0,
      0.3 + vColorShift * 0.5,
      0.1 + vColorShift * 0.3
    );
    vec3 color = uAccentColor * warmShift;

    // Subtle time-based pulse
    float pulse = 0.85 + 0.15 * sin(uTime * 1.5 + vColorShift * 6.28);

    gl_FragColor = vec4(color * glow * pulse, glow * vAlpha);
  }
`

export function ParticleSystem() {
  const pointsRef = useRef<THREE.Points>(null)
  const materialRef = useRef<THREE.ShaderMaterial>(null)
  const mouse = useMousePosition()
  const velocities = useRef<Float32Array>()

  const { positions, randoms } = useMemo(() => {
    const positions = new Float32Array(PARTICLE_COUNT * 3)
    const randoms = new Float32Array(PARTICLE_COUNT)
    const vels = new Float32Array(PARTICLE_COUNT * 3)

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10
      positions[i * 3 + 1] = (Math.random() - 0.5) * 8
      positions[i * 3 + 2] = (Math.random() - 0.5) * 4
      randoms[i] = Math.random()
      vels[i * 3] = (Math.random() - 0.5) * 0.005
      vels[i * 3 + 1] = (Math.random() - 0.5) * 0.005
      vels[i * 3 + 2] = (Math.random() - 0.5) * 0.002
    }

    velocities.current = vels
    return { positions, randoms }
  }, [])

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uMouse: { value: new THREE.Vector2(0, 0) },
      uMouseRadius: { value: 0.5 },
      uAccentColor: { value: new THREE.Color('#ff2a2a') },
    }),
    [],
  )

  useFrame((state) => {
    if (!pointsRef.current || !materialRef.current || !velocities.current) return

    const elapsed = state.clock.getElapsedTime()
    materialRef.current.uniforms.uTime.value = elapsed
    materialRef.current.uniforms.uMouse.value.set(mouse.current.x, mouse.current.y)

    // CPU-side position update with velocity drift + boundary wrap
    const posArray = pointsRef.current.geometry.attributes.position.array as Float32Array
    const vels = velocities.current

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const i3 = i * 3
      posArray[i3] += vels[i3]
      posArray[i3 + 1] += vels[i3 + 1]
      posArray[i3 + 2] += vels[i3 + 2]

      // Boundary wrap
      if (posArray[i3] > 5) posArray[i3] = -5
      if (posArray[i3] < -5) posArray[i3] = 5
      if (posArray[i3 + 1] > 4) posArray[i3 + 1] = -4
      if (posArray[i3 + 1] < -4) posArray[i3 + 1] = 4
      if (posArray[i3 + 2] > 2) posArray[i3 + 2] = -2
      if (posArray[i3 + 2] < -2) posArray[i3 + 2] = 2
    }

    pointsRef.current.geometry.attributes.position.needsUpdate = true
  })

  // Handle resize for particle count awareness
  useEffect(() => {
    return () => {
      if (pointsRef.current) {
        pointsRef.current.geometry.dispose()
      }
    }
  }, [])

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-aRandom"
          args={[randoms, 1]}
        />
      </bufferGeometry>
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  )
}
