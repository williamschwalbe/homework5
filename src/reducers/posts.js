const defaultState = []
const posts = (state = defaultState, action) => {
  const {
    type, title, description, image, id,
  } = action

  switch (type) {
    case 'ADD_POST':
      return [
        ...state, {
          title, description, image, id,
        },
      ]
    case 'DELETE_POST':
      return state.filter(post => post.id !== id)
    case 'EDIT_POST':
      return state.map(post => {
        if (post.id === id) {
          return {
            title, description, image, id,
          }
        }
        return post
      })
    default:
      return state
  }
}

export default posts
