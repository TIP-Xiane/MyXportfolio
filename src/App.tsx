import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

// Pages & Components
import Index from "./pages/Index.tsx";
import AboutMe from "./pages/AboutMe.tsx";
import NotFound from "./pages/NotFound.tsx";
import UnderConstruction from "./pages/UnderConstruction.tsx";
import ScrollToTop from "@/components/ScrollToTop"; // Fixed alias import!

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        {/* Instantly scrolls to the top on every route change */}
        <ScrollToTop /> 
        
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutMe />} />
          
          <Route path="/under-construction" element={<UnderConstruction />} />    {/* Temporary placeholder routes for pages you are still building */}
          <Route path="/projects" element={<UnderConstruction />} />
          <Route path="/contact" element={<UnderConstruction />} />
          <Route path="/experience" element={<UnderConstruction />} />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;