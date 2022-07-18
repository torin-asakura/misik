import React              from 'react'
import { FC }             from 'react'

import { Image }          from '@ui/image'
import { Box }            from '@ui/layout'
import { Row }            from '@ui/layout'
import { Layout }         from '@ui/layout'
import { Column }         from '@ui/layout'

import { ContainerProps } from './container.interface'

const Container: FC<ContainerProps> = ({ backgroundUrl, altText, height, children }) => (
  <Box width='100%' height='100%' backgroundColor='background.lightBeige' zIndex={1}>
    <Box
      position='relative'
      width='100%'
      height={['100%', '100%', height]}
      borderRadius={['bottomMedium', 'bottomMedium', 'bottomHuge']}
      backgroundImage={['none', 'none', `url(${backgroundUrl})`]}
      backgroundSize='cover'
      overflow='hidden'
      zIndex={3}
    >
      <Layout flexBasis={[20, 20, 0]} flexShrink={0} />
      <Row height='100%' justifyContent='center'>
        <Box zIndex={-1} display={['flex', 'flex', 'none']}>
          <Image background src={backgroundUrl} alt={altText} />
        </Box>
        <Layout flexBasis={[0, 0, 397]} />
        <Column>
          <Layout flexBasis={[88, 88, 160]} flexShrink={0} />
          {children}
        </Column>
        <Layout flexBasis={[0, 0, 659]} />
      </Row>
      <Layout flexBasis={[20, 20, 0]} flexShrink={0} />
    </Box>
  </Box>
)

export { Container }
