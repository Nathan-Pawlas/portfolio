import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Preload, useGLTF } from "@react-three/drei"
import CanvasLoader from "../Loader"

const Rocket = () => {
  const rocket = useGLTF('./rocket/scene.gltf')

  return (
    <mesh>
      <spotLight intensity={25} position={[3, 4, 5]} color='#FCCEC4'/>
      <ambientLight intensity={0.2} color='#D8F0F1'/>
      <pointLight intensity={10} position={[1.75, -4, -2]} color='#CD7F32' />
      <pointLight intensity={15} position={[2, -3, -1]} color='#CD7F32' />
      <primitive 
        object={rocket.scene}
        scale={4}
        position-y={0}
        rotation-y={0}
        rotation = {[0.5,0.5,0.5]}
      />
    </mesh>
  )
}

const RocketCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true}}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6]
      }}
    >
      <pointLight intensity={1.5} position={[-1, 4, -2]} color='#fff8e7'/>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Rocket />
      </Suspense>
    </Canvas>
  )
}

export default RocketCanvas