import { motion }                 from 'framer-motion'
import styled                     from '@emotion/styled'
import { layout }                 from 'styled-system'

import { createBaseStyles }       from './base'
import { createAppearanceStyles } from './appearance'
import { createShapeStyles }      from './shape'

const Container = styled(motion.div)(
  createBaseStyles(),
  createShapeStyles(),
  createAppearanceStyles(),
  layout
)

export { Container }
