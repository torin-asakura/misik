import React                from 'react'
import { lazy }             from 'react'
import { memo }             from 'react'

import { CanvasInner }      from '../canvas-inner'
import { CanvasInnerProps } from '../canvas-inner'
import { Loader }           from '../loader'

const RingModelComponent = lazy(() =>
  import('./ring-model').then(({ RingModel }) => ({ default: RingModel })))

export const Ring = memo<CanvasInnerProps>(({ style }) => (
  <CanvasInner style={style}>
    <Loader>
      <RingModelComponent />
    </Loader>
  </CanvasInner>
))
