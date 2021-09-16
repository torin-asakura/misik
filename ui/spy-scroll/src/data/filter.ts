import { sortByOrder } from '@globals/data'

const filter = (items) =>
  items
    .filter(sortByOrder)
    .reverse()
    .reduce(
      (result, item) => {
        if (item.language.code === 'RU') result.RU.push(item)
        if (item.language.code === 'EN') result.EN.push(item)

        return result
      },
      { EN: [], RU: [] }
    )

export { filter }
