import React               from 'react'
import { FC }              from 'react'

import { Navigation }      from '@landing/navigation-fragment'
import { SliderContainer } from '@ui/page-slider'

const IndexPage: FC = () => (
  <>
    <Navigation />
    <SliderContainer progressContainerWidth={400}>{/* TODO render */}</SliderContainer>
  </>
)

export default IndexPage
