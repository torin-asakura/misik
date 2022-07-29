const extractType = (type: string, fragments) =>
  fragments?.filter((fragment) => fragment.contactAddons.type === type)

export { extractType }
