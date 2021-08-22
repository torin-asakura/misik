import React               from 'react'
import { FC }              from 'react'

import { Navigation }      from '@landing/navigation-fragment'
import { Hero }            from '@landing/hero-fragment'
import { About }           from '@landing/about-fragment'
import { WorkFormat }      from '@landing/work-format-fragment'
import { Services }        from '@landing/services-fragment'
import { Feedback }        from '@landing/feedback-fragment'
import { SliderContainer } from '@ui/page-slider'

const IndexPage: FC = () => (
  <>
    <Navigation />
    <SliderContainer progressContainerWidth={400}>{/* TODO render */}</SliderContainer>
  </>
)

export default IndexPage
