import {usesState} from 'react'
import { connect } from 'react-redux'

import { editIntro,toggleEditIntro} from '../actions'

const IntroInput = ({currIntro, dispatchEditIntro, dispatchToggleEditMode}) => {
    const {text,image} = currIntro
    const [description, setDescription] = usesState(text)
    const [img, setImg] = usesState(image)
    const cancelFucntion = () => {
        dispatchToggleEditMode()
        // might need to do something else with state of input fields
        setImg(image)
        setDescription(text)
    }
    return (
        <div>
            <div className="form-group">
                <label>Image</label>
                <input className="input"  value={img} onChange={e => setImg(e.target.value)} placeholder="Enter Image Url" />
            </div>
            <div className="form-group">
                <label>Description</label>
                <input className="input"  value={description} onChange={e => setDescription(e.target.value)} placeholder="Enter Description" />
            </div>
           <button type="submit" onClick={() => dispatchEditIntro(description,img)} className=" btn btn-success"> Submit</button>
           <button type="submit" onClick={() => canelFunction()} className=" btn btn-info"> Cancel</button>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
  dispatchEditIntro: (image, text) => dispatch(editIntro(text, image)),
  dispatchToggleEditMode: () => dispatch(toggleEditIntro())
})

const mapStateToProps = state => ({
  currIntro: state.intro,
})
export default connect(mapStateToProps, mapDispatchToProps)(IntroInput)