const combine = (...styles) => styles.reduce((result, item) => ({ ...result, ...item }), {})

export { combine }
