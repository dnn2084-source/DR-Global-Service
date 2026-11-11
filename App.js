import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Lenis from "lenis";
import "@/App.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Home from "@/pages/Home";
import Servicios from "@/pages/Servicios";
import SobreNosotros from "@/pages/SobreNosotros";
import ComoTrabajamos from "@/pages/ComoTrabajamos";
import PreguntasFrecuentes from "@/pages/PreguntasFrecuentes";
import Contacto from "@/pages/Contacto";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error) {
    console.error(error);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="grid min-h-screen place-items-center bg-beige px-6 text-center font-sans">
          <div>
            <p className="font-serif text-3xl font-semibold text-navy">D&R Global Services</p>
            <p className="mt-3 text-slate-500">Se ha producido un error. Recarga la página.</p>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

const LenisProvider = () => {
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.09, smoothWheel: true });
    window.__lenis = lenis;
    let rafId;
    const loop = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(loop);
    };
    rafId = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      window.__lenis = null;
    };
  }, []);
  return null;
};

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    if (window.__lenis) {
      window.__lenis.scrollTo(0, { immediate: true });
    }
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <LenisProvider />
        <ScrollToTop />
        <div className="min-h-screen bg-beige font-sans text-slate-900">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/servicios" element={<Servicios />} />
              <Route path="/sobre-nosotros" element={<SobreNosotros />} />
              <Route path="/como-trabajamos" element={<ComoTrabajamos />} />
              <Route path="/preguntas-frecuentes" element={<PreguntasFrecuentes />} />
              <Route path="/contacto" element={<Contacto />} />
            </Routes>
          </main>
          <Footer />
          <WhatsAppFloat />
        </div>
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;
