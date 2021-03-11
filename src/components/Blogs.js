import React from 'react'
import NewPostModal from './NewPostModal'
import {connect} from 'react-redux'
import BlogPost from './BlogPost'
const Blogs = ({postList}) =>{
  let counter = 0
    return(
        <>
          <h1> THIS IS MY BLOG</h1> <br></br> 
          <NewPostModal/>
          {postList.map(post => <BlogPost key={counter++} postInfo={post}/>)}
        </>
    )
}
const mapStateToProps = state => ({
  postList: state.posts
})

export default connect(mapStateToProps)(Blogs)

