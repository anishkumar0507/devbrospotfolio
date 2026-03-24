import { BrowserRouter, Routes, Route } from "react-router-dom";
import ParticleBackground from "./components/ParticleBackground";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Services from "./pages/Services";
import Team from "./pages/Team";
import Projects from "./pages/Projects";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <ParticleBackground />
      <Navbar />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/team" element={<Team />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
