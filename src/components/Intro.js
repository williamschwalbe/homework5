import React from 'react'
import IntroInput from './IntroInput'
import { connect } from 'react-redux'
import {useState} from 'react'

const Intro = ({currIntro}) => {
    const {text,image} = currIntro
    const [canEdit, setCanEdit] = useState(false)
    return (
        <div>
            <h1> Hey this is me!</h1>
            <button type="submit" onClick={() => setCanEdit(!canEdit)} className=" btn btn-info"> Edit</button><br></br>
            {canEdit &&<IntroInput toggleEdit={()=>setCanEdit(!canEdit)}/>}
            {!canEdit  && <img src={image}/>}
            {!canEdit && <h1>{text}</h1>}
        </div>
    )
}
const mapStateToProps = state => ({
  currIntro: state.intro
})
export default connect(mapStateToProps)(Intro)
