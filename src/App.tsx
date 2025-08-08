import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import About from "./pages/About";
import Home from "./pages/Home";
import Footer from "./Footer";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/om-ki-merket" element={<About />} />
        <Route path="/kontakt" element={<Contact />} />
        {/* Add other routes here */}
      </Routes>
      <Footer />
    </Router>
  );
}
