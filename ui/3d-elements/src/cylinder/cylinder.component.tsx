import React                from 'react'
import { lazy }             from 'react'
import { memo }             from 'react'

import { theme }            from '@ui/theme'

import { CanvasInner }      from '../canvas-inner'
import { CanvasInnerProps } from '../canvas-inner'
import { Loader }           from '../loader'

const CylinderModelComponent = lazy(() =>
  import('./cylinder-model').then(({ CylinderModel }) => ({ default: CylinderModel })))

export const Cylinder = memo<CanvasInnerProps>(({ style }) => (
  <CanvasInner style={style}>
    <directionalLight color={theme.colors.light.white} position={[8, 10, 5]} intensity={3.5} />
    <directionalLight color={theme.colors.light.orange} position={[12, 4, 0]} intensity={2.5} />
    <Loader>
      <CylinderModelComponent />
    </Loader>
  </CanvasInner>
))
