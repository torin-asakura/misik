import React                from 'react'
import { lazy }             from 'react'
import { memo }             from 'react'

import { CanvasInner }      from '../canvas-inner'
import { CanvasInnerProps } from '../canvas-inner'
import { Loader }           from '../loader'

const DiamondModelComponent = lazy(() =>
  import('./diamond-model').then(({ DiamondModel }) => ({ default: DiamondModel })))

export const Diamond = memo<CanvasInnerProps>(({ style }) => (
  <CanvasInner style={style}>
    <Loader>
      <DiamondModelComponent />
    </Loader>
  </CanvasInner>
))
