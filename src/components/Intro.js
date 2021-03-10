import IntroInput from './IntroInput'

const Intro = ({currIntro}) => {
    const {text,image, canEdit} = currIntro
    return (
        <div>
            <hi> Hey this is me!</hi>
            <button type="submit" onClick={() => dispatchToggleEditMode()} className=" btn btn-info"> Edit</button><br></br>
            {canEdit &&<IntroInput/>}
        </div>
    )
}
const mapDispatchToProps = dispatch => ({
  dispatchToggleEditMode: () => dispatch(toggleEditIntro())
})
const mapStateToProps = state => ({
  currIntro: state.intro,
})
export default connect(mapStateToProps,mapDispatchToProps)(Intro)
