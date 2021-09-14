import { normalizeString } from '@globals/data'

const normalize = (dataArray) =>
  dataArray.map(({ content, title, excerpt, ...item }) => ({
    ...item,
    title: normalizeString(title),
  }))

export { normalize }
