import React from 'react'

function About() {
  return (
    <div className="page-container">
      <div className="container">
        <div className="page-content">
          <h1>About Our Blog Platform</h1>
          <div className="about-content">
            <p>
              Welcome to our modern blog platform built with React.js! This platform is designed 
              to provide a seamless experience for both writers and readers. Whether you're looking 
              to share your thoughts or discover new perspectives, our platform has you covered.
            </p>
            
            <div className="features-grid">
              <div className="feature-card">
                <h3>📝 Easy Writing</h3>
                <p>Create and edit posts with our intuitive editor. Focus on your content while we handle the formatting.</p>
              </div>
              
              <div className="feature-card">
                <h3>💬 Engage with Readers</h3>
                <p>Build a community through our commenting system. Connect with your audience and get valuable feedback.</p>
              </div>
              
              <div className="feature-card">
                <h3>📱 Responsive Design</h3>
                <p>Enjoy a consistent experience across all devices - desktop, tablet, or mobile.</p>
              </div>
              
              <div className="feature-card">
                <h3>🎨 Modern UI</h3>
                <p>Beautiful, clean design that puts your content front and center.</p>
              </div>
            </div>
            
            <div className="team-section">
              <h2>Our Mission</h2>
              <p>
                We believe everyone has a story to tell. Our mission is to provide a platform 
                where voices can be heard, ideas can be shared, and communities can grow through 
                the power of written word.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
