import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Courses from "./pages/Courses/Courses";
import Gallery from "./pages/Garrelry/gallery";
import Footer from "./components/FOOTER/Footer";
import Contact from "./pages/contact/Contact";
import Facilities from "./pages/Facility/Facility";
function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/facilities" element={<Facilities />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;