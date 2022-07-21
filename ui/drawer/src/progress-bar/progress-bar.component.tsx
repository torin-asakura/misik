import React                from 'react'
import { FC }               from 'react'
import { useState }         from 'react'
import { useCallback }      from 'react'
import { useRef }           from 'react'
import { useEffect }        from 'react'

import { Condition }        from '@ui/condition'
import { Box }              from '@ui/layout'
import { Column }           from '@ui/layout'

import { ProgressBarProps } from './progress-bar.interface'

const ProgressBar: FC<ProgressBarProps> = ({
  children,
  activeProgressBar,
  heightProgressBar = 240,
}) => {
  const SCROLL_BOX_MIN_HEIGHT = 120

  const [scrollBoxHeight, setScrollBoxHeight] = useState(SCROLL_BOX_MIN_HEIGHT)
  const [scrollBoxTop, setScrollBoxTop] = useState(0)
  const scrollHostRef = useRef<any>(null)

  const handleScroll = useCallback(() => {
    if (!scrollHostRef) {
      return
    }
    const scrollHostElement = scrollHostRef!.current
    const { scrollTop, scrollHeight } = scrollHostElement

    const offsetHeight = heightProgressBar

    let newTop = (parseInt(scrollTop, 10) / parseInt(scrollHeight, 10)) * offsetHeight

    newTop = Math.min(newTop, offsetHeight - scrollBoxHeight)
    setScrollBoxTop(newTop)
  }, []) // eslint-disable-line

  useEffect(() => {
    const scrollHostElement = scrollHostRef!.current
    const { clientHeight: ch, scrollHeight } = scrollHostElement
    const coefficient = ch / scrollHeight
    const scrollThumbHeight = heightProgressBar * coefficient
    setScrollBoxHeight(scrollThumbHeight)
    scrollHostElement!.addEventListener('scroll', handleScroll, true)
    return function cleanup() {
      scrollHostElement!.removeEventListener('scroll', handleScroll, true)
    }
    // eslint-disable-next-line
  }, [handleScroll])

  return (
    <Column>
      <Column overflow='auto' height='100%' scrollbar-width='none' ref={scrollHostRef}>
        {children}
      </Column>
      <Condition match={activeProgressBar}>
        <Box
          backgroundColor='background.lightGray'
          top={171}
          right={31}
          width={2}
          height={heightProgressBar}
          position='absolute'
        >
          <Box
            top={scrollBoxTop}
            height={scrollBoxHeight}
            backgroundColor='black'
            width={2}
            position='absolute'
          />
        </Box>
      </Condition>
    </Column>
  )
}

export { ProgressBar }
