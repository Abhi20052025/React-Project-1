import React from 'react';
import './detailPage.css';

const DetailPage = () => {
  const blogs = [
    {
      id: 1,
      title: 'The Bages Product',
      image: 'src/assets/Shopnoo Piture/school-bags .jpg',
      price: '₹1,299',
      advantages: [
        'Durable and long-lasting material',
        'Trendy and modern design',
        'Spacious compartments',
        'Water-resistant',
        'Value for money',
      ],
      Comment: `I've had a great experience using the Shopnoo app so far. The app is user-friendly, smooth, and easy to navigate, which makes shopping very convenient. Their service is also quite responsive — customer support handles queries quickly and efficiently. As for the products, the quality has been consistently good, and I appreciate the variety available. Overall, Shopnoo is a reliable platform for online shopping, and I look forward to seeing more features and product options in the future.`,
      Rating: 4.5,
    },
  ];

  return (
    <div className="detail-Page-container">
      <h1 className="detail-Page-heading">Detail Page Collection</h1>
      <div className="detail-Page-grid">
        {blogs.map((Page) => (
          <div key={Page.id} className="detail-Page-card">
            <div className="image-container">
              <img src={Page.image} alt={Page.title} className="detail-Page-image" />
            </div>

            <div className="detail-Page-info">
              <h2 className="product-title">{Page.title}</h2>
              <p className="price"><strong>Price:</strong> {Page.price}</p>
              <p className="rating"><strong>Rating:</strong> {Page.Rating} / 5 ⭐</p>

              <div className="advantages-section">
                <h3>Key Advantages</h3>
                <ul>
                  {Page.advantages.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </div>

              <div className="comment-box">
                <h3>User Comment</h3>
                <p>{Page.Comment}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DetailPage;
