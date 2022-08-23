import { MarkerCluster }     from '@atls-ui-parts/mapbox'

import React                 from 'react'
import { Map as MBGLMap }    from 'mapbox-gl'
import { Marker }            from 'mapbox-gl'
import { NavigationControl } from 'mapbox-gl'
import { FC }                from 'react'
import { useRef }            from 'react'
import { useEffect }         from 'react'
import { useMemo }           from 'react'

import { Box }               from '@ui/layout'
import { useData }           from '@globals/data'
import { extractObject }     from '@globals/data'

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
        center: [-41.48548952913495, 41.54319473813919],
        zoom: 2.32,
        style: 'mapbox://styles/tfk70/cl6p71gr8003q15qogjn333k2',
      })
      const navControl = new NavigationControl()

      map.scrollZoom.disable()
      map.addControl(navControl)

      const mapBounds = map.getBounds()

      if (mapBounds.getWest() > -119 && mapBounds.getEast() < 36) {
        map.setCenter({ lat: 55.72854006902593, lng: 37.62139049999999 })
        map.zoomTo(9)
      }

      map.on('load', () => {
        const markerCluster = new MarkerCluster({
          clusterClassName: 'circle-cluster',
          baseMarkerClassName: 'circle_layout',
          hiddenMarkerClassName: 'circle-hidden',
        })

        geoObjects
          .split('\n')
          .map((obj) => obj.split(':'))
          .forEach(([coordinates, content]) => {
            const markerElement = document.createElement('div')
            markerElement.className = 'circle_layout'
            markerElement.innerHTML = `<span>${content}</span>`
            markerElement.classList.add('default-circle')

            const [lat, lng] = coordinates
              .split(',')
              .map((str) => Number(str.replace(/\[|\]/, '').trim()))

            if (lng && lat) {
              if (lng > 0)
                markerCluster.addMarker(new Marker(markerElement).setLngLat({ lng, lat }))
              else new Marker(markerElement).setLngLat({ lng, lat }).addTo(map)
            }
          })

        markerCluster.addToMap(map)
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
