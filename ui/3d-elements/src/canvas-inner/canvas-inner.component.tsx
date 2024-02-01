import { Canvas }           from '@react-three/fiber'

import React                from 'react'
import { memo }             from 'react'

import { CanvasInnerProps } from './canvas-inner.interfaces'

export const CanvasInner = memo<CanvasInnerProps>(({ style, children }) => (
  <Canvas
    style={{
      ...style,
      background: 'radial-gradient(246.26% 141.42% at 0% 0%, #53535A 0%, #1C1C20 59.72%)',
      borderTopLeftRadius: 40,
      borderTopRightRadius: 40,
    }}
    camera={{ position: [10, 0, 0], fov: 20 }}
  >
    <ambientLight color='#ffffff' intensity={0.3} />
    <directionalLight color='#ffffff' position={[20, 20, 0]} intensity={5.5} />
    <directionalLight color='#ffffff' position={[10, -10, -10]} intensity={0.8} />
    {children}
  </Canvas>
))
