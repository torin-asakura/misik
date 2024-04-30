import React                from 'react'
import { lazy }             from 'react'
import { memo }             from 'react'

import { Box }              from '@ui/layout'
import { theme }            from '@ui/theme'
import { useHover }         from '@ui/utils'

import { CanvasInner }      from '../canvas-inner'
import { CanvasInnerProps } from '../canvas-inner'
import { Loader }           from '../loader'

const PyramidModelComponent = lazy(() =>
  import('./pyramid-model').then(({ PyramidModel }) => ({ default: PyramidModel })))

export const Pyramid = memo<CanvasInnerProps>(({ style }) => {
  const [hover, hoverProps] = useHover()

  return (
    <Box fill {...hoverProps}>
      <CanvasInner style={style}>
        <directionalLight color={theme.colors.light.white} position={[5, 5, 7]} intensity={3.5} />
        <directionalLight
          color={theme.colors.light.orange}
          position={[0, 0, -15]}
          intensity={0.8}
        />
        <Loader>
          <PyramidModelComponent showAnimation={hover} />
        </Loader>
      </CanvasInner>
    </Box>
  )
})
