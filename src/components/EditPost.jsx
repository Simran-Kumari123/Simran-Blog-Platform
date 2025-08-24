import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

function EditPost({ posts, updatePost }) {
  const { id } = useParams()
  const navigate = useNavigate()
  const post = posts.find(p => p.id === parseInt(id))
  
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [author, setAuthor] = useState('')

  useEffect(() => {
    if (post) {
      setTitle(post.title)
      setContent(post.content)
      setAuthor(post.author)
    }
  }, [post])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (title.trim() && content.trim() && author.trim()) {
      updatePost(parseInt(id), { title, content, author })
      navigate(`/post/${id}`)
    }
  }

  if (!post) {
    return (
      <div className="container">
        <h2>Post not found</h2>
        <button onClick={() => navigate('/')} className="back-btn">
          Back to Home
        </button>
      </div>
    )
  }

  return (
    <div className="edit-post">
      <div className="container">
        <h2>Edit Post</h2>
        <form onSubmit={handleSubmit} className="post-form">
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter post title"
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="author">Author</label>
            <input
              type="text"
              id="author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              placeholder="Author name"
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="content">Content</label>
            <textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Write your post content here..."
              rows="10"
              required
            />
          </div>
          
          <div className="form-actions">
            <button type="submit" className="submit-btn">Update Post</button>
            <button 
              type="button" 
              className="cancel-btn"
              onClick={() => navigate(`/post/${id}`)}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EditPost
