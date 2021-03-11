import React from 'react'
import {useState} from 'react'
import { connect } from 'react-redux'
import { } from '../actions'

// check if you can use props to pass in default values here!!!

const PostInput = ({dispatchAddPost, defaultTitle, defaultDescription, defaultImage,c}) => {
    const [description, setDescription] = useState(defaultDescription)
    const [image, setImage] = useState(defaultImage)
    const [title, setTitle] = useState(defaultTitle)
    const cancelFunction = () => {
        setImage(defaultImage)
        setDescription(defaultDescription)
        setTitle(defaultTitle)
        closeFormFucntion()
    }
    const submitFunction = () => {
        dispatchAddPost(title,description,image)
        closeFormFucntion()

    }
    return (
        <div>
            <div className="form-group">
                <label>Image</label>
                <input className="input"  value={image} onChange={e => setImg(e.target.value)} placeholder="Enter Image Url" />
            </div>
            <div className="form-group">
                <label>Title</label>
                <input className="input"  value={title} onChange={e => setTitle(e.target.value)} placeholder="Enter Title" />
            </div>
            <div className="form-group">
                <label>Description</label>
                <input className="input"  value={description} onChange={e => setDescription(e.target.value)} placeholder="Enter Description" />
            </div>
           <button type="submit" onClick={() => submitFunction()} className=" btn btn-success"> Submit</button>
           <button type="submit" onClick={() => cancelFunction()} className=" btn btn-info"> Cancel</button>
        </div>
    )
}
const mapDispatchToProps = dispatch => ({
  dispatchAddPost: (title,description,image) => dispatch(addPost(title,description,image))
})



export default connect(null, mapDispatchToProps)(PostInput)