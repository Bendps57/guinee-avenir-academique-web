
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Programs from "./pages/Programs";
import ProgramDetail from "./pages/ProgramDetail";
import International from "./pages/International";
import Connexion from "./pages/Connexion";
import Preinscription from "./pages/Preinscription";
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/a-propos" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/formations" element={<Programs />} />
        <Route path="/formations/:id" element={<ProgramDetail />} />
        <Route path="/international" element={<International />} />
        <Route path="/connexion" element={<Connexion />} />
        <Route path="/preinscription" element={<Preinscription />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <Toaster />
    </Router>
  );
}

export default App;
