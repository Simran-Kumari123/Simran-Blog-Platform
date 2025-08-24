import React from 'react'

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Simran Blog. | All rights reserved.</p>
        <p>
          <a href="/about" className="footer-link">About Us</a> | 
          <a href="/contact" className="footer-link">Contact</a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
