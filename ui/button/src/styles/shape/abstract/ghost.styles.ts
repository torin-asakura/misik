import { createShapeStyles } from '@atls-ui-parts/button'

import { styleFn }           from 'styled-system'

const getGhostStyles = (): styleFn => {
  const ghostStyles = createShapeStyles({
    // @ts-ignore
    size: 'auto',
    paddingLeft: 0,
    paddingRight: 0,
  })

  return ghostStyles
}

export { getGhostStyles }
