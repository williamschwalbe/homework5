import React from 'react'
import { connect } from 'react-redux'
import NewPostModal from './NewPostModal'
import BlogPost from './BlogPost'

const Blogs = ({ postList }) => {
  let counter = 0
  return (
    <div className="container">
      <div className="row">
        <div className="col-8">
          <h1> THIS IS MY BLOG</h1>
        </div>
        <div className="col-4">
          <NewPostModal className="float-right"/>
        </div>
      </div>
      <div className="row">
        {postList.map(post => <BlogPost key={counter++} postInfo={post}/>)}

      </div>
    </div>
  )
}
const mapStateToProps = state => ({
  postList: state.posts,
})

export default connect(mapStateToProps)(Blogs)

