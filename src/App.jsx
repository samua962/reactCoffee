import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Menu from "./pages/Menu";
import Infocenter from "./pages/InfoCenter";
import Reservations from "./pages/Reservations";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import News from "./pages/News";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/infocenter" element={<Infocenter />} />
          <Route path="/about" element={<About />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/News" element={<News/>} />

          {/* Catch-all route for unmatched paths */}
          <Route
            path="*"
            element={
              <div className="p-8 text-center text-red-600 text-2xl font-semibold">
                404 - Page Not Found
              </div>
            }
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
export default App;
