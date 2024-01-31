import React                from 'react'
import { lazy }             from 'react'
import { memo }             from 'react'

import { CanvasInner }      from '../canvas-inner'
import { CanvasInnerProps } from '../canvas-inner'
import { Loader }           from '../loader'

const CylinderModelComponent = lazy(() =>
  import('./cylinder-model').then(({ CylinderModel }) => ({ default: CylinderModel })))

export const Cylinder = memo<CanvasInnerProps>(({ style }) => (
  <CanvasInner style={style}>
    <Loader>
      <CylinderModelComponent />
    </Loader>
  </CanvasInner>
))
