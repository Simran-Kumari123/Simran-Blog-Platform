import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import PostList from './components/PostList'
import Post from './components/Post'
import CreatePost from './components/CreatePost'
import EditPost from './components/EditPost'
import About from './components/About'
import Contact from './components/Contact'
import Profile from './components/Profile'
import Categories from './components/Categories'
import Footer from './components/Footer'
import CategoryPosts from './components/CategoryPosts'
import { fileToBase64 } from './utils/imageUtils'

function App() {
  const [posts, setPosts] = useState(() => {
    const savedPosts = localStorage.getItem('blogPosts');
    if (savedPosts) {
      return JSON.parse(savedPosts);
    }
    // Default posts if no saved posts exist
    return [
      {
        id: 1,
        title: "Welcome to the Blog Platform",
        content: "This is a sample blog post to demonstrate the platform's features. You can create, edit, and manage your blog posts here.",
        author: "salu",
        category: "Technology",
        date: "2023-12-01",
        comments: [
          { id: 1, author: "Reader", content: "Great platform!", date: "2023-12-01" }
        ]
      },
      {
        id: 2,
        title: "Healthy Living Tips",
        content: "Discover tips for a healthier lifestyle, including nutrition and exercise.",
        author: "Simran",
        category: "Lifestyle",
        date: "2023-12-02",
        comments: [],
        image: null 
      },
      {
        id: 3,
        title: "Delicious Pasta Recipe",
        content: "Learn how to make a simple and delicious pasta dish that everyone will love.",
        author: "Muskan",
        category: "Food",
        date: "2023-12-03",
        comments: [],
        image: "Images/image.png"
      }
    ];
  });

  // Save posts to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('blogPosts', JSON.stringify(posts));
  }, [posts]);

  const addPost = async (newPost) => {
    let imageData = newPost.image || null;
    
    // Convert File object to base64 if it's a File
    if (imageData instanceof File) {
      try {
        imageData = await fileToBase64(imageData);
      } catch (error) {
        console.error('Error converting image to base64:', error);
        imageData = null;
      }
    }
    
    const post = {
      id: posts.length + 1,
      ...newPost,
      date: new Date().toISOString().split('T')[0],
      comments: [],
      image: imageData
    }
    setPosts([...posts, post])
  }

  const updatePost = (id, updatedPost) => {
    setPosts(posts.map(post => post.id === id ? { ...post, ...updatedPost } : post))
  }

  const addComment = (postId, comment) => {
    const newComment = {
      id: Date.now(),
      ...comment,
      date: new Date().toISOString().split('T')[0]
    }
    setPosts(posts.map(post => 
      post.id === postId 
        ? { ...post, comments: [...post.comments, newComment] } 
        : post
    ))
  }

  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<PostList posts={posts} />} />
            <Route path="/post/:id" element={<Post posts={posts} addComment={addComment} />} />
            <Route path="/create" element={<CreatePost addPost={addPost} />} />
            <Route path="/edit/:id" element={<EditPost posts={posts} updatePost={updatePost} />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/categories" element={<Categories posts={posts} />} />
            <Route path="/category/:id" element={<CategoryPosts posts={posts} />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
