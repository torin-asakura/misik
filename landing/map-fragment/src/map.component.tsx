import React              from 'react'
import { FC }             from 'react'
import { useRef }         from 'react'
import { useEffect }      from 'react'
import { Map as MBGLMap } from 'mapbox-gl'
import { Marker }         from 'mapbox-gl'

import { useData }        from '@globals/data'
import { extractObject }  from '@globals/data'
import { Box }            from '@ui/layout'

const Map: FC = () => {
  const ref = useRef(null)
  const { fragments } = useData()

  let accessToken: string = ''
  let geoObjects: string = ''

  if (fragments) {
    accessToken = extractObject('map', fragments.about.RU)?.fragmentParams.highlightedText
    geoObjects = extractObject('map', fragments.about.RU)?.content
  }

  useEffect(() => {
    const map = new MBGLMap({
      accessToken,
      container: (ref as any).current,
      center: [37.646, 55.739],
      zoom: 10,
      style: 'mapbox://styles/tfk70/cky2ykvih22sr14qcrc9l75mf',
    })

    map.scrollZoom.disable()

    map.on('load', () => {
      geoObjects
        .split('\n')
        .map((obj) => obj.split('-'))
        .forEach(([coordinates, content]) => {
          const markerElement = document.createElement('div')
          markerElement.className = 'circle_layout'
          markerElement.innerHTML = `<span>${content}</span>`

          const [lat, lng] = coordinates
            .split(',')
            .map((str) => Number(str.replace(/\[|\]/, '').trim()))

          if (lng && lat) {
            new Marker(markerElement).setLngLat({ lng, lat }).addTo(map)
          }
        })
    })
  }, [accessToken, geoObjects])

  return (
    <Box width='100%' height={[600, 600, 720]}>
      <Box width='100%' height='100%' id='map' ref={ref} />
    </Box>
  )
}

export { Map }
