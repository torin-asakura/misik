const normalizeString = (phone) => phone.replace(/ /g, '').replace(/\(|\)/g, '').replace(/-/g, '')

export { normalizeString }
