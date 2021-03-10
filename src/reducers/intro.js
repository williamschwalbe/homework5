
const defaultState ={image:'', text:'',canEdit:false}


const intro = (state = defaultState, action) => {
  const { image, text} = action

  switch (type) {
    case 'EDIT_POST':
        state = {text, image}
    case 'SWITCH_EDIT_STATE':
        state.canEdit = !state.canEdit
    default:
      return state
  }
}

export default intro