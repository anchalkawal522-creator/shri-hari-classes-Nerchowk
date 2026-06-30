import { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Navbar from "./components/NAVBAR/Navbar";

import Home from "./pages/Home/home";
import About from "./pages/About/About";
import Courses from "./pages/Courses/courses";
import Gallery from "./pages/Gallery/gallery";
import Footer from "./components/FOOTER/footer";
import Contact from "./pages/contact/Contact";
import Facilities from "./pages/Facility/Facility";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // change to "auto" if you don't want animation
    });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

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