import React, { useState } from 'react'
import ViewBlogPost from './ViewBlogPost'
import EditBlogPost from './EditBlogPost'

const BlogPost = ({ postNumber, postInfo }) => {
  const [editMode, setEditMode] = useState(false)
  return (
    <div className="col-4 p-4 m-4">
      {!editMode
      && <ViewBlogPost postNumber={postNumber} postInfo={postInfo} changeEditMode={setEditMode} /> }
      {editMode && <EditBlogPost postInfo={postInfo} changeEditMode={setEditMode} /> }
    </div>
  )
}

export default BlogPost
