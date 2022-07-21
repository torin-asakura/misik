const extractObject = (object: string, fragments) =>
  fragments?.filter((fragment) => fragment.relocationParams.object === object)[0] || undefined

export { extractObject }
