import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';




import NavScrollExample from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

import Home from "./components/Home";
import About from "./Pages/About";
import BlogPage from "./Pages/Blog.page";
import SingleBlog from "./Pages/Singleblog";
import ContactUs from "./Pages/ContactUs";
import MyAccount from "./Pages/MyAccont";
import Bags from "./Pages/Bags";
import Shoes from "./Pages/Shoes";
import Men from "./Pages/Men";
import WomenClothes from "./Pages/Women";
import Shop from "./components/Pages";
import GlassesCollection from "./Pages/Glasses Collection";
import DetailPage from "./Pages/DetailPage";


const App = () => {
  return (
    <Router>
      <NavScrollExample />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/singleblog" element={<SingleBlog />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/myaccount" element={<MyAccount />} />
        <Route path="/bags" element={<Bags />} />
        <Route path="/shoes" element={<Shoes />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<WomenClothes />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/Glasses" element={<GlassesCollection />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
