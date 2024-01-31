import React                from 'react'
import { lazy }             from 'react'
import { memo }             from 'react'

import { CanvasInner }      from '../canvas-inner'
import { CanvasInnerProps } from '../canvas-inner'
import { Loader }           from '../loader'

const SphereModelComponent = lazy(() =>
  import('./sphere-model').then(({ SphereModel }) => ({ default: SphereModel })))

export const Sphere = memo<CanvasInnerProps>(({ style }) => (
  <CanvasInner style={style}>
    <Loader>
      <SphereModelComponent />
    </Loader>
  </CanvasInner>
))
