import React                from 'react'
import { lazy }             from 'react'
import { memo }             from 'react'

import { theme }            from '@ui/theme'

import { CanvasInner }      from '../canvas-inner'
import { CanvasInnerProps } from '../canvas-inner'
import { Loader }           from '../loader'

const RingModelComponent = lazy(() =>
  import('./ring-model').then(({ RingModel }) => ({ default: RingModel })))

export const Ring = memo<CanvasInnerProps>(({ style }) => (
  <CanvasInner style={style}>
    <directionalLight color={theme.colors.light.white} position={[10, 10, 4]} intensity={4.5} />
    <directionalLight color={theme.colors.light.orange} position={[-10, 0, -15]} intensity={1.5} />
    <directionalLight color={theme.colors.light.orange} position={[-5, -15, 0]} intensity={1.5} />
    <directionalLight color={theme.colors.light.orange} position={[-10, 0, 20]} intensity={1.5} />
    <Loader>
      <RingModelComponent />
    </Loader>
  </CanvasInner>
))
