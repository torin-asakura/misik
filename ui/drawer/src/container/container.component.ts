import styled                     from '@emotion/styled'

import { motion }                 from 'framer-motion'
import { layout }                 from 'styled-system'

import { createAppearanceStyles } from './appearance'
import { createBaseStyles }       from './base'
import { createShapeStyles }      from './shape'

const Container = styled(motion.div)(
  createBaseStyles(),
  createShapeStyles(),
  createAppearanceStyles(),
  layout
)

export { Container }
