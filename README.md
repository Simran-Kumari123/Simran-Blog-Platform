# Blog Platform

A modern, responsive React-based blog platform with a complete commenting system and image upload capabilities. Built with Vite for fast development and optimized performance.

## Features

- **📝 Blog Post Management**: Create, read, update, and delete blog posts
- **💬 Comment System**: Add comments to posts with author names and timestamps
- **🖼️ Image Upload**: Support for uploading images with posts
- **📂 Categories**: Organize posts by categories and filter by category
- **💾 Local Storage**: Data persistence using browser's localStorage
- **🎨 Responsive Design**: Mobile-friendly interface
- **⚡ Fast Performance**: Built with Vite for optimal loading speeds

## Technology Stack

- **Frontend**: React 18.2.0
- **Routing**: React Router DOM 6.8.0
- **Build Tool**: Vite 4.1.0
- **Styling**: CSS3 with modern features
- **Data Storage**: Browser localStorage

## Installation

1. **Clone the repository** (if applicable) or navigate to the project directory
2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser** and navigate to `http://localhost:5173`

## Usage

### Creating a Post
1. Click on "Create Post" in the navigation
2. Fill in the title, author name, and content
3. Optionally upload an image
4. Click "Publish Post" to save

### Viewing Posts
- The homepage displays all posts in a grid layout
- Click on any post title to view the full post and comments
- Use the categories page to filter posts by category

### Adding Comments
1. Navigate to any post
2. Fill in your name and comment in the comment form
3. Click "Add Comment" to submit

### Editing Posts
1. Navigate to the post you want to edit
2. Click the "Edit" button (if available)
3. Make your changes and save

## Project Structure

```
src/
├── components/
│   ├── About.jsx          # About page component
│   ├── Categories.jsx     # Categories listing
│   ├── CategoryPosts.jsx  # Posts by category
│   ├── Contact.jsx        # Contact page
│   ├── CreatePost.jsx     # Post creation form
│   ├── EditPost.jsx       # Post editing form
│   ├── Footer.jsx         # Footer component
│   ├── Header.jsx         # Header with navigation
│   ├── Post.jsx           # Individual post view
│   ├── PostList.jsx       # Posts listing
│   └── Profile.jsx        # User profile
├── utils/
│   └── imageUtils.js      # Image processing utilities
├── App.css               # Main stylesheet
├── App.jsx              # Main application component
└── main.jsx             # Application entry point
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Data Structure

Posts are stored with the following structure:
```javascript
{
  id: Number,
  title: String,
  content: String,
  author: String,
  category: String,
  date: String (YYYY-MM-DD),
  comments: Array,
  image: String (base64 encoded) or null
}
```

Comments structure:
```javascript
{
  id: Number,
  author: String,
  content: String,
  date: String (YYYY-MM-DD)
}
```

## Default Posts

The application includes three sample posts to demonstrate functionality:
1. "Welcome to the Blog Platform" - Technology category
2. "Healthy Living Tips" - Lifestyle category  
3. "Delicious Pasta Recipe" - Food category (with sample image)

## Browser Compatibility

This application works in all modern browsers that support:
- ES6+ JavaScript features
- localStorage API
- File API for image uploads

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the MIT License.

## Support

For questions or issues, please check the documentation or create an issue in the project repository.
