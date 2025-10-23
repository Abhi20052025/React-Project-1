import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './footer.css'; // ✅ CORRECT


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faTwitter,
  faYoutube,
  faGoogle,
  faInstagram
} from '@fortawesome/free-brands-svg-icons';

import './footer.css'; // Import your CSS file here

function AutoLayoutSizingExample() {
  return (
    <Container fluid className="mt-5 footer">
      <Row className="text-center text-md-start">
        <Col xs={12} md={4} className="mb-4">
          <h2>Shopnoo</h2>
          <p className="mt-3">
            Our mission is to offer you the best selection of Nordic design,
            whether well-established or up-and-coming.
          </p>
          <div className="social-icons mt-3">
            <a href="https://facebook.com" className="me-3">
              <FontAwesomeIcon icon={faFacebookF} size="lg" />
            </a>
            <a href="https://twitter.com" className="me-3">
              <FontAwesomeIcon icon={faTwitter} size="lg" />
            </a>
            <a href="https://youtube.com" className="me-3">
              <FontAwesomeIcon icon={faYoutube} size="lg" />
            </a>
            <a href="https://google.com" className="me-3">
              <FontAwesomeIcon icon={faGoogle} size="lg" />
            </a>
            <a href="https://instagram.com" className="me-3">
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
          </div>
        </Col>

        <Col xs={12} md={4} className="mb-4">
          <h3>Navigate</h3>
          <ul className="list-unstyled mt-3">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Page</a></li>
            <li><a href="#">Blog's</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </Col>

        <Col xs={12} md={4} className="mb-4">
          <h3>Information</h3>
          <ul className="list-unstyled mt-3">
            <li><a href="#">Delivery</a></li>
            <li><a href="#">Return Policy</a></li>
            <li><a href="#">Team</a></li>
            <li><a href="#">Store Location</a></li>
            <li><a href="#">F.A.Qs</a></li>
          </ul>
        </Col>
      </Row>

      <Row className="text-center mt-4">
        <Col>
          <h5>Developed By - Abhishek Kumar Pandey</h5>
        </Col>
      </Row>
    </Container>
  );
}

export default AutoLayoutSizingExample;
