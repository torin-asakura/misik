import React             from 'react'
import { FC }            from 'react'

import { useData }       from '@globals/data'
import { extractObject } from '@globals/data'
import { Box }           from '@ui/layout'

const Map: FC = () => {
  const { fragments } = useData()

  let mapUrl: string = ''

  if (fragments) {
    mapUrl = extractObject('map', fragments.about.RU)?.fragmentParams.highlightedText
  }

  return (
    <Box width='100%' height={[600, 600, 720]}>
      <iframe src={mapUrl} title='Office map' width='100%' height='100%' frameBorder='0' />
    </Box>
  )
}

export { Map }
