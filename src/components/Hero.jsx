import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import "./Herosection.css";

const Hero = () => {
  return (
    <div className="hero-section text-center">
      <Container>
        <h2>
          Welcome to Nature Meets Power<br />
          Shop the Change
        </h2>
        <p>"Be Style, Buy anything on your Budget"</p>
        <Button variant="light">Get Started</Button>
      </Container>
    </div>
  );
};

export default Hero;
