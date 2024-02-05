import React                from 'react'
import { lazy }             from 'react'
import { memo }             from 'react'

import { theme }            from '@ui/theme'

import { CanvasInner }      from '../canvas-inner'
import { CanvasInnerProps } from '../canvas-inner'
import { Loader }           from '../loader'

const DiamondModelComponent = lazy(() =>
  import('./diamond-model').then(({ DiamondModel }) => ({ default: DiamondModel })))

export const Diamond = memo<CanvasInnerProps>(({ style }) => (
  <CanvasInner style={style} camera={{ position: [10, -4, 0] }}>
    <directionalLight color={theme.colors.light.white} position={[10, 10, 0]} intensity={6.5} />
    <directionalLight color={theme.colors.light.orange} position={[-10, 0, -15]} intensity={1.5} />
    <Loader>
      <DiamondModelComponent />
    </Loader>
  </CanvasInner>
))
