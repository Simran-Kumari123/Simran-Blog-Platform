import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getImageSource } from '../utils/imageUtils'

function Post({ posts, addComment }) {
  const { id } = useParams()
  const post = posts.find(p => p.id === parseInt(id))
  const [commentText, setCommentText] = useState('')
  const [commentAuthor, setCommentAuthor] = useState('')

  if (!post) {
    return (
      <div className="container">
        <h2>Post not found</h2>
        <Link to="/">Back to Home</Link>
      </div>
    )
  }

  const handleSubmitComment = (e) => {
    e.preventDefault()
    if (commentText.trim() && commentAuthor.trim()) {
      addComment(post.id, {
        author: commentAuthor,
        content: commentText
      })
      setCommentText('')
      setCommentAuthor('')
    }
  }

  return (
    <div className="post-detail">
      <div className="container">
        <Link to="/" className="back-link">← Back to Posts</Link>
        
        <article className="post">
          <h1 className="post-title">{post.title}</h1>
          <div className="post-meta">
            <span>By {post.author}</span>
            <span>•</span>
            <span>{post.date}</span>
          </div>
          {post.image && (
            <img 
              src={getImageSource(post.image)} 
              alt="Post" 
              className="post-image"
            />
          )}
          <div className="post-content">
            <p>{post.content}</p>
          </div>
        </article>

        <div className="comments-section">
          <h3>Comments ({post.comments.length})</h3>
          
          {post.comments.length > 0 ? (
            <div className="comments-list">
              {post.comments.map(comment => (
                <div key={comment.id} className="comment">
                  <div className="comment-header">
                    <strong>{comment.author}</strong>
                    <span className="comment-date">{comment.date}</span>
                  </div>
                  <p className="comment-content">{comment.content}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="no-comments">No comments yet. Be the first to comment!</p>
          )}

          <form onSubmit={handleSubmitComment} className="comment-form">
            <h4>Add a Comment</h4>
            <div className="form-group">
              <input
                type="text"
                placeholder="Your Name"
                value={commentAuthor}
                onChange={(e) => setCommentAuthor(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                placeholder="Your Comment"
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                rows="4"
                required
              />
            </div>
            <button type="submit" className="submit-btn">Post Comment</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Post
