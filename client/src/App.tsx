import { HelmetProvider } from 'react-helmet-async';
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileNavigation from "@/components/MobileNavigation";
import Home from "@/pages/Home";
import Menu from "@/pages/Menu";
import Branches from "@/pages/Branches";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Catering from "@/pages/Catering";
import Order from "@/pages/Order";
import Book from "@/pages/Book";
import Terms from "@/pages/Terms";
import Privacy from "@/pages/Privacy";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/menu" component={Menu} />
      <Route path="/branches" component={Branches} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/catering" component={Catering} />
      <Route path="/order" component={Order} />
      <Route path="/book" component={Book} />
      <Route path="/terms" component={Terms} />
      <Route path="/privacy" component={Privacy} />
      {/* Fallback to 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <div className="min-h-screen flex flex-col">
            <Header />
            <div className="flex-1">
              <Router />
            </div>
            <Footer />
            <MobileNavigation />
          </div>
          <Toaster />
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
