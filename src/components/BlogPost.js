import React, { useState } from 'react'
import ViewBlogPost from './ViewBlogPost'
import EditBlogPost from './EditBlogPost'

const BlogPost = ({ key, postInfo }) => {
  const [editMode, setEditMode] = useState(false)
  return (
    <div className="col-4 py-4">
      {!editMode && <ViewBlogPost id={key} postInfo={postInfo} changeEditMode={setEditMode} /> }
      {editMode && <EditBlogPost postInfo={postInfo} changeEditMode={setEditMode} /> }
    </div>
  )
}

export default BlogPost
