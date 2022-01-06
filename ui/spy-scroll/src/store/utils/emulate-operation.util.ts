const emulateOperation = (_array: Array<any>, operation: string, ...args) => {
  const array = [..._array]

  if (args) array[operation](...args)
  else array[operation]()

  return array
}

export { emulateOperation }
