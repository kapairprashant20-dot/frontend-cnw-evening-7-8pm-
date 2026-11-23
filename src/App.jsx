import { Route, Routes } from "react-router-dom"
import Contact from "./pages/Contact"
import Navbar from "./components/Navbar"
import Home from "./pages/home"
import About from "./pages/about";
import ProjectParent from "./components/Projects/ProjectParent";
import Footer from "./components/Footer/Footer" 
import Whatsappicon from "./components/Whatsapp/Whatsappicon";
import ScrollToTop from "./components/scroll/ScrollToTop";

function App() {
  return (
    <>
      <Navbar />
        <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<ProjectParent />} />
      </Routes>
      <Whatsappicon/>
      <Footer/>
    </>
  )
}

export default App