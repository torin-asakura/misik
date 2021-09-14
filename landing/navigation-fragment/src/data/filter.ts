import { mapHref } from './map-href.adapter'

const filter = (items) =>
  items.reduce(
    (result, item) => {
      if (item.name === 'Main-EN') result.EN.push(mapHref(item.menuItems.nodes))
      if (item.name === 'Main-RU') result.RU.push(mapHref(item.menuItems.nodes))

      return result
    },
    { EN: [], RU: [] }
  )

export { filter }
