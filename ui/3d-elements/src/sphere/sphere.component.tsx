import React                from 'react'
import { lazy }             from 'react'
import { memo }             from 'react'

import { theme }            from '@ui/theme'

import { CanvasInner }      from '../canvas-inner'
import { CanvasInnerProps } from '../canvas-inner'
import { Loader }           from '../loader'

const SphereModelComponent = lazy(() =>
  import('./sphere-model').then(({ SphereModel }) => ({ default: SphereModel })))

export const Sphere = memo<CanvasInnerProps>(({ style }) => (
  <CanvasInner style={style}>
    <directionalLight color={theme.colors.light.white} position={[5, 5, 7]} intensity={5.5} />
    <directionalLight color={theme.colors.light.white} position={[10, -10, -10]} intensity={0.3} />
    <directionalLight color={theme.colors.light.orange} position={[10, 5, 5]} intensity={2.0} />
    <Loader>
      <SphereModelComponent />
    </Loader>
  </CanvasInner>
))
