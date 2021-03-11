
const defaultState ={image:'', text:''}


const intro = (state = defaultState, action) => {
  const { type, text, image} = action
  console.log(`type: ${type} \n image:${image} \n text:${text}`)

  switch (type) {
    case 'EDIT_INTRO':
        console.log("in edit post")
        return state = {text, image}
    default:
      return state
  }
}

export default intro