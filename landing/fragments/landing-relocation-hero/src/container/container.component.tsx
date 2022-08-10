import React              from 'react'
import { FC }             from 'react'
import { useState }       from 'react'

import { Drawer }         from '@ui/drawer'
import { Layer }          from '@ui/layer'
import { Box }            from '@ui/layout'
import { Row }            from '@ui/layout'
import { Layout }         from '@ui/layout'
import { Column }         from '@ui/layout'
import { messages }       from '@globals/messages'

import { CTA }            from '../CTA'
import { ContainerProps } from './container.interface'

const Container: FC<ContainerProps> = ({
  backgroundUrl,
  mobileBackgroundUrl,
  height,
  language,
  children,
}) => {
  const [visible, setVisible] = useState<boolean>(false)

  return (
    <>
      <Drawer active={visible} onClose={() => setVisible(!visible)} />
      <Layer scroll visible={visible} onClose={() => setVisible(!visible)} />
      <Box width='100%' height='100%' backgroundColor='background.lightBeige' zIndex={1}>
        <Box
          position='relative'
          width='100%'
          height={['100%', '100%', height]}
          borderRadius={['bottomMedium', 'bottomMedium', 'bottomHuge']}
          backgroundImage={[
            `url(${mobileBackgroundUrl})`,
            `url(${backgroundUrl})`,
            `url(${backgroundUrl})`,
          ]}
          backgroundSize='cover'
          overflow='hidden'
          zIndex={3}
        >
          <Layout flexBasis={[20, 20, 0]} flexShrink={0} />
          <Row height='100%' justifyContent='center'>
            <Layout flexBasis={[0, 0, 397]} />
            <Column>
              <Layout flexBasis={[88, 88, 160]} flexShrink={0} />
              {children}
              <Layout>
                <CTA setVisible={setVisible} message={messages.getConsult[language]} />
              </Layout>
              <Layout flexBasis={[40, 40, 80]} flexShrink={0} />
            </Column>
            <Layout flexBasis={[0, 0, 659]} />
          </Row>
          <Layout flexBasis={[20, 20, 0]} flexShrink={0} />
        </Box>
      </Box>
    </>
  )
}

export { Container }
