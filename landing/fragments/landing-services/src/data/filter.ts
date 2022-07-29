const filter = (items) =>
  items.reduce(
    (result, item) => {
      if (item.language.code === 'EN') result.EN.push(item)
      if (item.language.code === 'RU') result.RU.push(item)

      return result
    },
    { EN: [], RU: [] }
  )

export { filter }
