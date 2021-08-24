const extractFragments = (fragments) =>
  fragments.reduce((result, fragment) => {
    const key = fragment.fragmentParams.scope[0].toLowerCase()

    const extractLanguage = () => ({
      [fragment.language.code]:
        result[key] && result[key][fragment.language.code]
          ? [...result[key][fragment.language.code], fragment]
          : [fragment],
    })

    return {
      ...result,
      [key]: {
        ...result[key],
        ...extractLanguage(),
      },
    }
  }, {})

export { extractFragments }
