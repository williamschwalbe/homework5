import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { connect } from 'react-redux'
import { addPost } from '../actions'

const NewPostModal = ({ dispatchAddPost }) => {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const [description, setDescription] = useState('')
  const [image, setImage] = useState('')
  const [title, setTitle] = useState('')
  const cancelFunction = () => {
    handleClose()
    setImage('')
    setDescription('')
    setTitle('')
  }
  const submitFunction = () => {
    dispatchAddPost(title, description, image) //should we reset this just call cancel after?
    handleClose()
  }
  return (
    <>
      <Button variant="warning" onClick={handleShow}>
        Add a post
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="form-group ">
              <label>Image</label>
              <br />
              <input className="input" value={image} onChange={e => setImage(e.target.value)} placeholder="Enter Image Url" />
            </div>
            <div className="form-group">
              <label>Title</label>
              <br />
              <input className="input" value={title} onChange={e => setTitle(e.target.value)} placeholder="Enter Title" />
            </div>
            <div className="form-group">
              <label>Description</label>
              <br />
              <input className="input" value={description} onChange={e => setDescription(e.target.value)} placeholder="Enter Description" />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => cancelFunction()}>
            Close
          </Button>
          <Button variant="primary" onClick={() => submitFunction()}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

const mapDispatchToProps = dispatch => ({
  dispatchAddPost: (title, description, image) => dispatch(addPost(title, description, image)),
})

export default connect(null, mapDispatchToProps)(NewPostModal)
