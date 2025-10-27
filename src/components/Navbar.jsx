import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Modal from "react-bootstrap/Modal";
import "./navbar.css";

function NavScrollExample() {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
    handleClose();
  };

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#">
            <i className="fas fa-store me-2"></i> Shopnoo
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/">
                <i className="fas fa-home me-1"></i> Home
              </Nav.Link>

              <Nav.Link href="/about">
                <i className="fas fa-info-circle me-1"></i> About
              </Nav.Link>

              <NavDropdown
                title={
                  <>
                    <i className="fas fa-layer-group me-1"></i> Pages
                  </>
                }
                id="navbarScrollingDropdown"
              >
                <NavDropdown.Item href="/men">
                  <i className="fas fa-male me-2"></i> Men
                </NavDropdown.Item>
                <NavDropdown.Item href="/women">
                  <i className="fas fa-female me-2"></i> Women
                </NavDropdown.Item>
                <NavDropdown.Item href="/bags">
                  <i className="fas fa-shopping-bag me-2"></i> Bags
                </NavDropdown.Item>
                <NavDropdown.Item href="/shoes">
                  <i className="fas fa-shoe-prints me-2"></i> Shoes
                </NavDropdown.Item>
                <NavDropdown.Item href="/Glasses">
                  <i className="fas fa-glasses me-2"></i> Glasses
                </NavDropdown.Item>
                <NavDropdown.Item href="/myaccount">
                  <i className="fas fa-user-circle me-2"></i> My Account
                </NavDropdown.Item>
                <NavDropdown.Divider />
              </NavDropdown>

              <NavDropdown
                title={
                  <>
                    <i className="fas fa-blog me-1"></i> Blog
                  </>
                }
                id="blog-dropdown"
              >
                <NavDropdown.Item href="/blog">
                  <i className="fas fa-newspaper me-2"></i> Blog Page
                </NavDropdown.Item>
                <NavDropdown.Item href="/singleblog">
                  <i className="fas fa-file-alt me-2"></i> Single Page
                </NavDropdown.Item>
                <NavDropdown.Divider />
              </NavDropdown>

              <Nav.Link href="/ContactUs">
                <i className="fas fa-envelope me-1"></i> Contact
              </Nav.Link>

              {/* Login/Sign Up Link */}
              <Nav.Link onClick={handleShow} style={{ cursor: "pointer" }}>
                <i className="fas fa-user me-1"></i> Login / Sign Up
              </Nav.Link>
            </Nav>

            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">
                <i className="fas fa-search me-1"></i> Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Modal for Login/Sign Up Form */}
      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Login / Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter username"
                required
                autoFocus
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formMobile">
              <Form.Label>Mobile Number</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Enter mobile number"
                required
                pattern="[0-9]{10}"
              />
              <Form.Text className="text-muted">
                Please enter a 10-digit mobile number.
              </Form.Text>
            </Form.Group>

            {/* Submit Button with FAB icon */}
            <Button variant="primary" type="submit" className="w-100">
              <i className="fas fa-paper-plane me-2"></i> Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default NavScrollExample;
