import React from 'react'
import { Link } from 'react-router-dom'

function PostList({ posts }) {
  return (
    <div className="post-list">
      <div className="container">
        <h2>Latest Posts</h2>
        {posts.length === 0 ? (
          <p className="no-posts">No posts yet. Be the first to create one!</p>
        ) : (
          <div className="posts-grid">
            {posts.map(post => (
              <article key={post.id} className="post-card">
                <h3 className="post-title">
                  <Link to={`/post/${post.id}`}>{post.title}</Link>
                </h3>
                <p className="post-meta">
                  By {post.author} • {post.date}
                </p>
                <p className="post-excerpt">
                  {post.content.length > 150 
                    ? `${post.content.substring(0, 150)}...` 
                    : post.content
                  }
                </p>
                <div className="post-footer">
                  <Link to={`/post/${post.id}`} className="read-more">
                    Read More
                  </Link>
                  <span className="comment-count">
                    {post.comments.length} comment{post.comments.length !== 1 ? 's' : ''}
                  </span>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default PostList
