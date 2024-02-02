import { Canvas }           from '@react-three/fiber'

import React                from 'react'
import { memo }             from 'react'

import { theme }            from '@ui/theme'

import { CanvasInnerProps } from './canvas-inner.interfaces'

export const CanvasInner = memo<CanvasInnerProps>(({ style, children, camera }) => (
  <Canvas
    style={{
      background: theme.colors.background.radialGradientBlack,
      borderTopLeftRadius: theme.radii.huge,
      borderTopRightRadius: theme.radii.huge,
      ...style,
    }}
    camera={{ position: [10, 0, 0], fov: 20, ...camera }}
  >
    <ambientLight color={theme.colors.light.white} intensity={0.3} />
    {children}
  </Canvas>
))
