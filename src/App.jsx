import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Faq from "./pages/Faq";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="faq" element={<Faq />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
