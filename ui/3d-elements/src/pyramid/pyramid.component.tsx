import React                from 'react'
import { lazy }             from 'react'
import { memo }             from 'react'

import { CanvasInner }      from '../canvas-inner'
import { CanvasInnerProps } from '../canvas-inner'
import { Loader }           from '../loader'

const PyramidModelComponent = lazy(() =>
  import('./pyramid-model').then(({ PyramidModel }) => ({ default: PyramidModel })))

export const Pyramid = memo<CanvasInnerProps>(({ style }) => (
  <CanvasInner style={style}>
    <Loader>
      <PyramidModelComponent />
    </Loader>
  </CanvasInner>
))
