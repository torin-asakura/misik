import { useEffect } from 'react'

const useYmapsApiInjection = (apiKey: string, geoObjects: string) => {
  useEffect(() => {
    if (
      !document.getElementById('api-injection-script') &&
      !document.getElementById('map-objects-script') &&
      apiKey &&
      geoObjects
    ) {
      const apiInjectionScript = document.createElement('script')
      const mapObjectsScript = document.createElement('script')

      apiInjectionScript.id = 'api-injection-script'
      apiInjectionScript.src = `https://api-maps.yandex.ru/2.1/?apikey=${apiKey}&lang=ru_RU`

      mapObjectsScript.id = 'map-objects-script'
      mapObjectsScript.text = `
ymaps.ready(init);

function init() {
    const myMap = new ymaps.Map("map", {
            center: [55.76, 37.64],
            zoom: 10
        }, {
            searchControlProvider: 'yandex#search'
        })
        
        const circleLayout = ymaps.templateLayoutFactory.createClass('<div class="placemark_layout_container"><div class="circle_layout"></div></div>')
        
        const objects = [${geoObjects
          .split('\n')
          .map((obj) => obj.split('-'))
          .map(
            ([coordinates, hintContent]) => `new ymaps.GeoObject({
        geometry: {
          type: 'Point',
          coordinates: ${coordinates || '[]'},
        },
        properties: {
          hintContent: '${hintContent || ''}'
        },       
      }, {
      iconLayout: circleLayout,
      iconShape: {
         type: 'Circle',
         coordinates: [0,0],
         radius: 20,
      }
       }
        )`
          )}]
        
        
       objects && objects.forEach(obj => {
       obj.events.add('mouseenter', (e) => {
       })
       obj.events.add('mouseleave', (e) => {
       })
       myMap.geoObjects.add(obj)
       })       
}
    `

      document.head.appendChild(apiInjectionScript)
      setTimeout(() => {
        document.head.appendChild(mapObjectsScript)
      }, 1000)
    }
  }, [apiKey, geoObjects])
}

export { useYmapsApiInjection }
