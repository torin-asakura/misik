import { normalizeString } from '@globals/data'

const normalize = (dataArray) =>
  dataArray.map(({ content, title, ...item }) => ({
    ...item,
    content: normalizeString(content),
    title: normalizeString(title),
  }))

export { normalize }
