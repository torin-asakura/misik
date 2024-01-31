import React                from 'react'
import { lazy }             from 'react'
import { memo }             from 'react'

import { CanvasInner }      from '../canvas-inner'
import { CanvasInnerProps } from '../canvas-inner'
import { Loader }           from '../loader'

const IsosphereModelComponent = lazy(() =>
  import('./isosphere-model').then(({ IsosphereModel }) => ({ default: IsosphereModel })))

export const Isosphere = memo<CanvasInnerProps>(({ style }) => (
  <CanvasInner style={style}>
    <Loader>
      <IsosphereModelComponent />
    </Loader>
  </CanvasInner>
))
