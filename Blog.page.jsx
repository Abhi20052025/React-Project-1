import React from 'react';
import './blog.page.css'; // Optional: for styling

const BlogPage = () => {
  const blogData = [
    {
      id: 1,
      title: 'Sustainable Fashion Trends',
      image: 'src/assets/Shopnoo p/BlogPage .webp',
      description: `Explore the latest trends in sustainable fashion. Learn how eco-friendly materials and ethical manufacturing are changing the industry.`,
      keyPoints: [
        'Use of recycled fabrics',
        'Support for local artisans',
        'Low-carbon footprint production'
      ]
    },
    {
      id: 2,
      title: 'Minimalist Wardrobe Guide',
      image: 'src/assets/Shopnoo p/Blogpage1.jpeg',
      description: `Discover how to create a minimalist wardrobe that’s both stylish and functional. This guide helps reduce clutter and promotes intentional fashion choices.`,
      keyPoints: [
        'Capsule wardrobe essentials',
        'Neutral color palettes',
        'Multi-functional pieces'
      ]
    }
  ];

  return (
    <div className="blog-page">
      <h1 className="heading">Blog Page Collection</h1>
      <div className="blog-list">
        {blogData.map(blog => (
          <div key={blog.id} className="blog-card">
            <img src={blog.image} alt={blog.title} className="blog-image" />
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

export default BlogPage;
