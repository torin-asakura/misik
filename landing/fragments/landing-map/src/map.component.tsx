import React              from 'react'
import { Map as MBGLMap } from 'mapbox-gl'
import { Marker }         from 'mapbox-gl'
import { FC }             from 'react'
import { useRef }         from 'react'
import { useEffect }      from 'react'
import { useMemo }        from 'react'

import { Box }            from '@ui/layout'
import { useData }        from '@globals/data'
import { extractObject }  from '@globals/data'

const Map: FC = () => {
  const ref = useRef(null)
  const { fragments } = useData()

  let { accessToken, geoObjects } = useMemo(() => {
    if (!fragments) {
      return { accessToken: '', geoObjects: '' }
    }

    accessToken = extractObject('map', fragments.about.RU)?.fragmentParams.highlightedText
    geoObjects = extractObject('map', fragments.about.RU)?.content

    return { accessToken, geoObjects }
  }, [fragments])

  useEffect(() => {
    if (accessToken) {
      const map = new MBGLMap({
        accessToken,
        container: (ref as any).current,
        center: [37.646, 55.739],
        zoom: 9,
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
    }
  }, [accessToken, geoObjects])

  return (
    <Box width='100%' height={[600, 600, 720]} overflow='hidden'>
      <Box width='100%' height='100%' id='map' ref={ref} />
    </Box>
  )
}

export { Map }
