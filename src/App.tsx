import { useEffect, useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Lottie from "lottie-react";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// IMPORT YOUR LOTTIE ANIMATION FILE
import preloaderAnimation from "@/assets/preloader.json";

const queryClient = new QueryClient();

const App = () => {
  const [loading, setLoading] = useState(true);

  // Loader timeout (simulate loading)
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />

        {loading ? (
          // ⭐ PRELOADER SCREEN
          <div className="fixed inset-0 flex items-center justify-center bg-background z-50">
            <Lottie
              animationData={preloaderAnimation}
              loop={true}
              className="w-48 h-48"
            />
          </div>
        ) : (
          // ⭐ NORMAL APP CONTENT
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        )}
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
