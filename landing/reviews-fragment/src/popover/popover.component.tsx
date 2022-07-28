import React               from 'react'
import { FC }              from 'react'

import { Button }          from '@ui/button'
import { Image }           from '@ui/image'
import { Box }             from '@ui/layout'
import { Layout }          from '@ui/layout'
import { Column }          from '@ui/layout'
import { Row }             from '@ui/layout'
import { Plast }           from '@ui/plast'
import { Text }            from '@ui/text'
import { normalizeString } from '@globals/data'

import { ArrowLeftIcon }   from '../icons'
import { ArrowRightIcon }  from '../icons'
import { CrossIcon }       from '../icons'
import { PopoverProps }    from './popover.interface'

const Popover: FC<PopoverProps> = ({ visible, setVisible, reviews, language }) => {
  const nameFragment = reviews[language][visible]?.excerpt
  const companyFragment = reviews[language][visible]?.excerpt

  const name = nameFragment?.substring(0, nameFragment.lastIndexOf('.'))
  const company = companyFragment
    ?.substring(companyFragment.length, companyFragment.lastIndexOf('.'))
    .replace(/\./g, '')

  return (
    <Plast visible={visible !== null} onClose={() => setVisible(null)} opacity='small'>
      <Box
        width={['100%', '100%', 840]}
        height={['100%', '100%', 634]}
        borderRadius={['none', 'none', 'big']}
        backgroundColor='background.lightBeige'
        padding={['20px', '20px', '40px']}
        position='relative'
      >
        <Box position='absolute' right={24} top={24} display={['none', 'none', 'flex']}>
          <Button size='ghost' colors='transparent' onClick={() => setVisible(null)}>
            <CrossIcon color='black' />
          </Button>
        </Box>
        <Box position='absolute' left={24} top={24} display={['flex', 'flex', 'none']}>
          <Button size='ghost' colors='transparent' onClick={() => setVisible(null)}>
            <CrossIcon color='black' />
          </Button>
        </Box>
        <Column>
          <Layout flexBasis={[56, 56, 0]} />
          <Row alignItems='center'>
            <Column width='100%'>
              <Row>
                <Box width={50} height={50} borderRadius='max' overflow='hidden'>
                  <Image src={reviews[language][visible]?.featuredImage?.node.mediaItemUrl} />
                </Box>
                <Layout flexBasis={16} />
                <Column>
                  <Layout>
                    <Text
                      textTransform='uppercase'
                      fontWeight='medium'
                      fontSize={['medium', 'medium', 'semiLarge']}
                      lineHeight='extra'
                      fontFamily='secondary'
                    >
                      {visible !== null && normalizeString(name)}
                    </Text>
                  </Layout>
                  <Layout>
                    <Text
                      fontSize={['tiny', 'tiny', 'small']}
                      lineHeight='extra'
                      color='text.secondary'
                    >
                      {visible !== null && normalizeString(company)}
                    </Text>
                  </Layout>
                </Column>
              </Row>
              <Layout flexBasis={[24, 24, 60]} />
              <Row>
                <Layout>
                  <Text
                    fontSize={['large', 'large', 'big']}
                    color='text.black'
                    fontFamily='secondary'
                  >
                    {visible !== null && reviews[language][visible]?.title}
                  </Text>
                </Layout>
              </Row>
              <Layout flexBasis={[16, 16, 24]} />
              <Layout>
                <Text
                  color='text.secondary'
                  fontSize={['tiny', 'tiny', 'regular']}
                  lineHeight='big'
                >
                  {visible !== null && normalizeString(reviews[language][visible].content)}
                </Text>
              </Layout>
            </Column>
          </Row>
          <Layout flexGrow={1} />
          <Row justifyContent={['center', 'center', 'flex-start']}>
            <Layout>
              <Button
                p={0}
                width={[40, 40, 56]}
                height={[40, 40, 56]}
                onClick={() => {
                  if (visible !== null && visible !== 0) setVisible(visible - 1)
                }}
              >
                <ArrowLeftIcon />
              </Button>
            </Layout>
            <Layout flexBasis={16} />
            <Layout>
              <Button
                p={0}
                width={[40, 40, 56]}
                height={[40, 40, 56]}
                onClick={() => {
                  if (visible !== null && visible !== reviews[language].length - 1)
                    setVisible(visible + 1)
                }}
              >
                <ArrowRightIcon />
              </Button>
            </Layout>
          </Row>
        </Column>
      </Box>
    </Plast>
  )
}

export { Popover }
