/* eslint-disable no-param-reassign */

const filter = (items) =>
  items.reduce(
    (result, { title, ...form }) => {
      if (title === 'contact_ru') result.RU = form.fields.nodes
      if (title === 'contact_en') result.EN = form.fields.nodes

      return result
    },
    { RU: [], EN: [] }
  )

export { filter }
