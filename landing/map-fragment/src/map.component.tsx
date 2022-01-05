import React                    from 'react'
import { FC }                   from 'react'

import { useData }              from '@globals/data'
import { extractObject }        from '@globals/data'
import { Box }                  from '@ui/layout'

import { useYmapsApiInjection } from './hooks'

const Map: FC = () => {
  const { fragments } = useData()

  let apiKey: string = ''
  let geoObjects: string = ''

  if (fragments) {
    apiKey = extractObject('map', fragments.about.RU)?.fragmentParams.highlightedText
    geoObjects = extractObject('map', fragments.about.RU)?.content
  }

  useYmapsApiInjection(apiKey, geoObjects)

  return (
    <Box width='100%' height={[600, 600, 720]}>
      <Box width='100%' height='100%' id='map' />
    </Box>
  )
}

export { Map }
