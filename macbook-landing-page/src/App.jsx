import React from 'react'
import { Canvas } from '@react-three/fiber'
import "./style.css"
import { Environment, OrbitControls, ScrollControls } from '@react-three/drei'
import MacContainer from './MacContainer'

function App() {
  return (
    <div className='w-full h-screen relative'>
      <div className="absolute flex flex-col items-center text-white top-32 left-1/2 -translate-x-1/2 font-['Helvetica_Now_Display']">
        <h3 className='text-7xl tracking-tighter font-[700] bg-gradient-to-r from-blue-300 via-purple-400 to-pink-400 text-transparent bg-clip-text'>macbook pro.</h3>
      </div>
      <Canvas camera={{fov: 12, position: [0, -10, 220]}}>
          {/* <OrbitControls/> */}
          <Environment files={['https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/studio_small_09_4k.exr']}/>
          
      <ScrollControls pages={3}>
        <MacContainer/>
      </ScrollControls>
      </Canvas>
      
      {/* Buy Now Button - Positioned further down
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 font-['Helvetica_Now_Display']">
        <button>
          Buy
        </button>
      </div> */}
    </div>
  )
}

export default App