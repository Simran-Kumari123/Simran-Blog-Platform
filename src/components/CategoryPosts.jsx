import React from 'react';
import { useParams } from 'react-router-dom';

function CategoryPosts({ posts }) {
  const { id } = useParams();
  const categoryPosts = posts.filter(post => post.category === getCategoryName(id));

  return (
    <div className="page-container">
      <div className="container">
        <h1>Posts in {getCategoryName(id)} Category</h1>
        {categoryPosts.length > 0 ? (
          categoryPosts.map(post => (
            <div key={post.id} className="post-card">
              <h2 className="post-title">{post.title}</h2>
              <p>{post.content}</p>
              <p>By {post.author} on {post.date}</p>
            </div>
          ))
        ) : (
          <p>No posts available in this category.</p>
        )}
      </div>
    </div>
  );
}

function getCategoryName(id) {
  const categories = {
    1: 'Technology',
    2: 'Lifestyle',
    3: 'Travel',
    4: 'Food',
    5: 'Business',
    6: 'Entertainment'
  };
  return categories[id] || 'Unknown';
}

export default CategoryPosts;
