import React from 'react'
import NewPostModal from './NewPostModal'
import {connect} from 'react-redux'
import ViewBlogPost from './ViewBlogPost'
import EditBlogPost from './EditBlogPost'
const BlogPost = ({postInfo}) =>{
    console.log(postInfo)
    const {title, description, image, id} = postInfo
    return(
        <>
          <h1> title: {title}</h1> <br></br> 
           <h1> description: {description}</h1> <br></br> 
            <h1> image: {image}</h1> <br></br> 
             <h1> id: {id}</h1> <br></br> 
          
        </>
    )
}

export default BlogPost