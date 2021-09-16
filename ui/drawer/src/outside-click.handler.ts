const createOutsideClickHandler = (target, cb) => (event) => {
  if (event.target.contains(target.current)) {
    cb()
  }
}

export { createOutsideClickHandler }
