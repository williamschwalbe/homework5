const defaultState = { image: '', text: '' }

const intro = (state = defaultState, action) => {
  const { type, text, image } = action
  switch (type) {
    case 'EDIT_INTRO':
      return { text, image }
    default:
      return state
  }
}

export default intro
