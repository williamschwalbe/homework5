import React, { useState } from 'react'
import { connect } from 'react-redux'
import IntroInput from './IntroInput'

const Intro = ({ currIntro }) => {
  const { text, image } = currIntro
  const [canEdit, setCanEdit] = useState(false)
  return (
    <div className="container">
      <div className="row">
        <div className="col-8">
          <h1> Hey this is me!</h1>
        </div>
        <div className="col-4">
          <button type="submit" onClick={() => setCanEdit(!canEdit)} className=" btn btn-info"> Edit</button>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        {canEdit && <IntroInput toggleEdit={() => setCanEdit(!canEdit)} />}
        <div />
        <div className="d-flex justify-content-center my-4">
          {!canEdit && <img src={image} alt="" className="mx-3" />}
          {!canEdit && <h1>{text}</h1>}
        </div>
      </div>
    </div>
  )
}
const mapStateToProps = state => ({
  currIntro: state.intro,
})
export default connect(mapStateToProps)(Intro)
