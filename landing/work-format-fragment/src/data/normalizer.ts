import { normalizeString } from '@globals/data'

const normalize = (dataArray) =>
  dataArray.map(({ content, title, excerpt, ...item }) => ({
    ...item,
    content: normalizeString(content),
    title: normalizeString(title),
    excerpt: normalizeString(excerpt),
  }))

export { normalize }
