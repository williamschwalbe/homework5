import React, { useState } from 'react'
import IntroInput from './IntroInput'
import { connect } from 'react-redux'

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
      {canEdit && <IntroInput toggleEdit={() => setCanEdit(!canEdit)} />}
      {!canEdit && <img src={image} alt="" />}
      {!canEdit && <h1>{text}</h1>}
    </div>
  )
}
const mapStateToProps = state => ({
  currIntro: state.intro,
})
export default connect(mapStateToProps)(Intro)
