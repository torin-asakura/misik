const extractType = (type: string, fragments) =>
  fragments?.filter((fragment) => fragment.contactAddons.type === type)[0] || undefined

export { extractType }
