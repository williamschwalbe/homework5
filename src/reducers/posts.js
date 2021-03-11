const defaultState = []
const posts = (state = defaultState, action) => {
  const {type,title,description,image, id } = action

  switch (type) {
    case 'ADD_POST':
      return [
        ...state, { id, title, description, image }
      ]
    case 'DELETE_POST':
      return state.filter(post => post.id !== id)
    case 'EDIT_POST':
        state.map(post =>{
            if(post.id === id){
                post = {title, description, image, id}
            }
        })
    default:
      return state
  }
}

export default posts