import React                from 'react'
import { lazy }             from 'react'
import { memo }             from 'react'

import { CanvasInner }      from '../canvas-inner'
import { CanvasInnerProps } from '../canvas-inner'
import { Loader }           from '../loader'

const CubeModelComponent = lazy(() =>
  import('./cube-model').then(({ CubeModel }) => ({ default: CubeModel })))

export const Cube = memo<CanvasInnerProps>(({ style }) => (
  <CanvasInner style={style}>
    <Loader>
      <CubeModelComponent />
    </Loader>
  </CanvasInner>
))
