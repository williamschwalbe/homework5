import React, { useState } from 'react'
import { connect } from 'react-redux'

import { editIntro } from '../actions'

const IntroInput = ({ currIntro, dispatchEditIntro, toggleEdit }) => {
  const { text, image } = currIntro
  const [description, setDescription] = useState(text)
  const [img, setImg] = useState(image)
  const cancelFunction = () => {
    toggleEdit()
    setImg(image)
    setDescription(text)
  }
  const submitFunction = () => {
    dispatchEditIntro(description, img)
    toggleEdit()
  }
  return (
    <>
      <form>
        <div className="form-group py-3">
          <label>Image</label>
          <br />
          <input className="input" value={img} onChange={e => setImg(e.target.value)} placeholder="Enter Image Url" />
        </div>
        <div className="form-group py-3">
          <label>Description</label>
          <br />
          <input className="input" value={description} onChange={e => setDescription(e.target.value)} placeholder="Enter Description" />
        </div>
        <button type="submit" onClick={() => submitFunction()} className=" btn btn-success mr-3"> Submit</button>
        <button type="submit" onClick={() => cancelFunction()} className=" btn btn-info"> Cancel</button>
      </form>
    </>
  )
}

const mapDispatchToProps = dispatch => ({
  dispatchEditIntro: (text, image) => dispatch(editIntro(text, image)),
})

const mapStateToProps = state => ({
  currIntro: state.intro,
})
export default connect(mapStateToProps, mapDispatchToProps)(IntroInput)