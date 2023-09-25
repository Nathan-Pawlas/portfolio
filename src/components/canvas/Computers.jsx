import React from 'react'
import { Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import CanvasLoader from '../Loader'

const Computers = ({ isMobile }) => {
  const computer = useGLTF('./web_development/scene.gltf');

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black' />
      <spotLight
        position={[-18, 10, 10]}
        angle={0.5}
        penumbra={1}
        intensity={1000}
        color = '#f1baff'
        castShadow
        shadow-mapSize={1024}
      />
      <spotLight intensity={5} position={[4,-2,1]} color = '#f1baff'/>
      <pointLight intensity={1.5} angle={0.12} position={[0,0,1]} color='#edffff'/>
      <spotLight
        position={[10, -10, -15]}
        angle={0.12}
        penumbra={1}
        intensity={50}
        color = '#CDEEC4'
        castShadow
        shadow-mapSize={1024}
      />
      <primitive 
        object={ computer.scene }
        scale={isMobile ? 0.35 : 0.5}
        position={isMobile ? [0, -1.25, 0.5]: [0, -1.75, 0.5]}
        rotation={[0,0,-0.05]}
      />
    </mesh>
  )
}

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500px)');

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    }

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return() => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    }
  })

  return (
    <Canvas
      frameloop='demand'
      shadows
      camera={{ position: [15, 5, 10], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate={0.1}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile}/>
      </Suspense>

      <Preload all />
    </Canvas>
  )
}

export default ComputersCanvas;