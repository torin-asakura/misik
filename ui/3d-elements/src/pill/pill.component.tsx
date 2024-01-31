import React                from 'react'
import { lazy }             from 'react'
import { memo }             from 'react'

import { CanvasInner }      from '../canvas-inner'
import { CanvasInnerProps } from '../canvas-inner'
import { Loader }           from '../loader'

const PillModelComponent = lazy(() =>
  import('./pill-model').then(({ PillModel }) => ({ default: PillModel })))

export const Pill = memo<CanvasInnerProps>(({ style }) => (
  <CanvasInner style={style}>
    <Loader>
      <PillModelComponent />
    </Loader>
  </CanvasInner>
))
