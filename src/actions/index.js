let counter = 0

export const editIntro = (text, image) => ({
  type: 'EDIT_INTRO',
  text,
  image,
})
export const addPost = (title,description,image) => ({
  type: 'ADD_POST',
  id: counter++,
  title,
  description,
  image,
})

export const editPost = (title,description,image, id) => ({
  type: 'EDIT_POST',
  id,
  title,
  description,
  image,
})


export const deletePost = id => ({
  type: 'DELETE_POST',
  id,
})
