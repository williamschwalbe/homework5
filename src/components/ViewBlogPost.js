import React from 'react'
const ViewBlogPost = ({postInfo, changeEditMode }) =>{
    const {title, description, image} = postInfo
    return(
      <div className="card" style={{width: '18rem'}}>
       <img className="card-img-top" src={image}/>
       <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
       </div>
       <div className="card-footer">
           <button className= "btn btn-info" onClick={()=>changeEditMode(true)}>
               Edit Post
            </button>
       </div>
    </div>
    )
}
export default ViewBlogPost
