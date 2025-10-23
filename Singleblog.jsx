import React from 'react';
import './singleblog.css'; // Import the CSS

const SingleBlog = () => {
  const blogs = [
    {
      id: 1,
      title: 'The Power of Personal Branding',
      image: 'src/assets/Shopnoo p/Blog Singlepage.webp',
      description: 'Learn how personal branding can elevate your career and online presence. Explore real-world strategies used by industry leaders.',
      keyPoints: [
        'Build trust and credibility',
        'Improve visibility',
        'Grow your network'
      ]
    },
    {
      id: 2,
      title: 'Mastering Productivity with Focus Tools',
      image: 'src/assets/Shopnoo p/Blog single page1.webp',
      description: 'Discover top productivity tools and techniques for staying focused in a distracted world. Ideal for creatives and remote workers.',
      keyPoints: [
        'Use time-blocking methods',
        'Limit digital distractions',
        'Implement daily reviews'
      ]
    }
  ];

  return (
    <div className="single-blog-container">
      <h1 className="single-blog-heading">Single Blog Collection</h1>
      <div className="single-blog-grid">
        {blogs.map(blog => (
          <div key={blog.id} className="single-blog-card">
            <div className="image-container">
              <img src={blog.image} alt={blog.title} className="single-blog-image" />
            </div>
            <h2>{blog.title}</h2>
            <p>{blog.description}</p>
            <ul>
              {blog.keyPoints.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SingleBlog;
