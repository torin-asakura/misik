import React                from 'react'
import { lazy }             from 'react'
import { memo }             from 'react'

import { Box }              from '@ui/layout'
import { theme }            from '@ui/theme'
import { useHover }         from '@ui/utils'

import { CanvasInner }      from '../canvas-inner'
import { CanvasInnerProps } from '../canvas-inner'
import { Loader }           from '../loader'

const CubeModelComponent = lazy(() =>
  import('./cube-model').then(({ CubeModel }) => ({ default: CubeModel })))

export const Cube = memo<CanvasInnerProps>(({ style }) => {
  const [hover, hoverProps] = useHover()

  return (
    <Box fill {...hoverProps}>
      <CanvasInner style={style}>
        <directionalLight color={theme.colors.light.white} position={[20, 20, 0]} intensity={4.5} />
        <directionalLight
          color={theme.colors.light.orange}
          position={[-10, 0, -15]}
          intensity={0.6}
        />
        <Loader>
          <CubeModelComponent showAnimation={hover} />
        </Loader>
      </CanvasInner>
    </Box>
  )
})
