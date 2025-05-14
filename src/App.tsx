
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Programs from "./pages/Programs";
import About from "./pages/About";
import International from "./pages/International";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Preinscription from "./pages/Preinscription";
import Connexion from "./pages/Connexion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Chatbot from "./components/Chatbot";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/formations" element={<Programs />} />
            <Route path="/a-propos" element={<About />} />
            <Route path="/international" element={<International />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/preinscription" element={<Preinscription />} />
            <Route path="/connexion" element={<Connexion />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Chatbot />
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
