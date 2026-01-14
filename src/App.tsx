import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import EnglishLearning from "./pages/EnglishLearning";
import CareerCounselling from "./pages/CareerCounselling";
import IeltsBusiness from "./pages/IeltsBusiness";
import Pricing from "./pages/Pricing";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Behala from "./pages/locations/Behala";
import Ballygunge from "./pages/locations/Ballygunge";
import Tollygunge from "./pages/locations/Tollygunge";
import RashbehariAvenue from "./pages/locations/RashbehariAvenue";
import Gariahat from "./pages/locations/Gariahat";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/english-learning" element={<EnglishLearning />} />
          <Route path="/career-counselling" element={<CareerCounselling />} />
          <Route path="/ielts-business" element={<IeltsBusiness />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* Location Pages */}
          <Route path="/spoken-english-behala" element={<Behala />} />
          <Route path="/spoken-english-ballygunge" element={<Ballygunge />} />
          <Route path="/spoken-english-tollygunge" element={<Tollygunge />} />
          <Route path="/spoken-english-rashbehari-avenue" element={<RashbehariAvenue />} />
          <Route path="/spoken-english-gariahat" element={<Gariahat />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
