import React from 'react'
import {useState} from 'react'
import { connect } from 'react-redux'

import { editPost,deletePost} from '../actions'

const IntroInput = ({postInfo, changeEditMode, dispatchDeletePost, dispatchEditPost}) => {
  const {title, description, image, id} = postInfo
  const [ttl,setTitle] = useState(title)
  const [img,setImg] = useState(image)
  const [desc,setDescription] = useState(description)
  const cancelFunction = () => {
    changeEditMode()
    setImg(image)
    setDescription(description)
    setTitle(title)
  }
  const submitFunction = () => {
    changeEditMode()
    dispatchEditPost(ttl, desc, img, id)
  }
  return (
    <div className="card">
      <div className="card-body">
        <div className="form-group">
          <label>Image</label>
          <input className="input" value={img} onChange={e => setImg(e.target.value)} placeholder="Enter Image Url" />
        </div>
        <div className="form-group">
          <label>Title</label>
          <input className="input" value={ttl} onChange={e => setTitle(e.target.value)} placeholder="Enter Title" />
        </div>
        <div className="form-group">
          <label>Description</label>
          <input className="input form-control" value={desc} onChange={e => setDescription(e.target.value)} placeholder="Enter Description" />
        </div>
        <div>
          <button type="submit" onClick={() => submitFunction()} className=" btn btn-success"> Submit</button>
          <button type="submit" onClick={() => cancelFunction()} className=" btn btn-info"> Cancel</button>
        </div>
        <button type="button" className="btn btn-danger" style={{ margin: '1rem' }} onClick={() => dispatchDeletePost(id)}> DELETE POST </button> 
      </div>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  dispatchEditPost: (title,description,image, id) => dispatch(editPost(title,description,image, id)),
  dispatchDeletePost: id => dispatch(deletePost(id)) 
})

const mapStateToProps = state => ({
  postList: state.posts,
})
export default connect(mapStateToProps, mapDispatchToProps)(IntroInput)