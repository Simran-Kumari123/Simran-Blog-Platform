import React from 'react'
import { Link } from 'react-router-dom'

function Categories({ posts = [] }) {
  const categories = [
    {
      id: 1,
      name: 'Technology',
      description: 'Latest tech news, reviews, and tutorials',
      postCount: posts.filter(post => post.category === 'Technology').length,
      color: '#667eea'
    },
    {
      id: 2,
      name: 'Lifestyle',
      description: 'Health, wellness, and daily living tips',
      postCount: posts.filter(post => post.category === 'Lifestyle').length,
      color: '#f093fb'
    },
    {
      id: 3,
      name: 'Travel',
      description: 'Adventure stories and travel guides',
      postCount: posts.filter(post => post.category === 'Travel').length,
      color: '#4facfe'
    },
    {
      id: 4,
      name: 'Food',
      description: 'Recipes, cooking tips, and restaurant reviews',
      postCount: posts.filter(post => post.category === 'Food').length,
      color: '#43e97b'
    },
    {
      id: 5,
      name: 'Business',
      description: 'Entrepreneurship, finance, and career advice',
      postCount: posts.filter(post => post.category === 'Business').length,
      color: '#fa709a'
    },
    {
      id: 6,
      name: 'Entertainment',
      description: 'Movies, music, and pop culture',
      postCount: posts.filter(post => post.category === 'Entertainment').length,
      color: '#ffecd2'
    }
  ]

  return (
    <div className="page-container">
      <div className="container">
        <div className="page-content">
          <h1>Categories</h1>
          <p className="page-description">
            Explore posts by category and discover content that interests you most.
          </p>

          <div className="categories-grid">
            {categories.map(category => (
              <div 
                key={category.id} 
                className="category-card"
                style={{ borderLeft: `4px solid ${category.color}` }}
              >
                <div className="category-header">
                  <h3>{category.name}</h3>
                  <span className="post-count">{category.postCount} posts</span>
                </div>
                
                <p className="category-description">{category.description}</p>
                
                <div className="category-footer">
                  <Link 
                    to={`/category/${category.id}`} 
                    className="view-posts-btn"
                    style={{ backgroundColor: category.color }}
                  >
                    View Posts
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Recent Posts from All Categories Section */}
          <div className="recent-posts-section">
            <h2>Recent Posts from All Categories</h2>
            {posts.length > 0 ? (
              <div className="recent-posts-grid">
                {posts.slice(0, 6).map(post => (
                  <div key={post.id} className="recent-post-card">
                    <div className="recent-post-header">
                      <h4 className="recent-post-title">{post.title}</h4>
                      <span 
                        className="category-badge"
                        style={{ 
                          backgroundColor: categories.find(c => c.name === post.category)?.color || '#667eea',
                          color: '#fff'
                        }}
                      >
                        {post.category}
                      </span>
                    </div>
                    <p className="recent-post-excerpt">
                      {post.content.length > 100 
                        ? `${post.content.substring(0, 100)}...` 
                        : post.content
                      }
                    </p>
                    <div className="recent-post-meta">
                      <span>By {post.author}</span>
                      <span>•</span>
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.comments.length} comments</span>
                    </div>
                    <a href={`/post/${post.id}`} className="read-more-link">Read More →</a>
                  </div>
                ))}
              </div>
            ) : (
              <p className="no-posts">No posts available yet.</p>
            )}
          </div>

          <div className="categories-info">
            <h2>About Our Categories</h2>
            <p>
              Our blog covers a wide range of topics to cater to diverse interests. 
              Each category is carefully curated to provide valuable content and insights. 
              Whether you're looking for technical knowledge, lifestyle tips, or entertainment news, 
              you'll find something that resonates with you.
            </p>
            
            <div className="featured-categories">
              <h3>Most Popular Categories</h3>
              <div className="popular-list">
                {categories.slice(0, 3).map(category => (
                  <div key={category.id} className="popular-item">
                    <span 
                      className="category-dot"
                      style={{ backgroundColor: category.color }}
                    ></span>
                    <span>{category.name}</span>
                    <span className="count">({category.postCount})</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Categories
