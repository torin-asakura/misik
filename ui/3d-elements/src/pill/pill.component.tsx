import React                from 'react'
import { lazy }             from 'react'
import { memo }             from 'react'

import { theme }            from '@ui/theme'

import { CanvasInner }      from '../canvas-inner'
import { CanvasInnerProps } from '../canvas-inner'
import { Loader }           from '../loader'

const PillModelComponent = lazy(() =>
  import('./pill-model').then(({ PillModel }) => ({ default: PillModel })))

export const Pill = memo<CanvasInnerProps>(({ style }) => (
  <CanvasInner style={style}>
    <directionalLight color={theme.colors.light.white} position={[20, 20, 0]} intensity={4.5} />
    <directionalLight color={theme.colors.light.orange} position={[-10, 0, -15]} intensity={1.5} />
    <Loader>
      <PillModelComponent />
    </Loader>
  </CanvasInner>
))
