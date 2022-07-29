const splitItems = (items) =>
  items.reduce(
    (result, i, idx) => {
      result[idx % 2 === 0 ? 0 : 1].push(i)
      return result
    },
    [[], []]
  )

export { splitItems }
