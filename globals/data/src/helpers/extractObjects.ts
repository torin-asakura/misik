const extractObjects = (object: string, fragments) =>
  fragments?.filter((fragment) => fragment.fragmentParams.object === object)

export { extractObjects }
