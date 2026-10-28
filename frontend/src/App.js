import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import "@/App.css";
import { Toaster } from "sonner";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Marquee } from "@/components/site/Marquee";
import { Services } from "@/components/site/Services";
import { Pricing } from "@/components/site/Pricing";
import { Process } from "@/components/site/Process";
import { Booking } from "@/components/site/Booking";
import { Footer } from "@/components/site/Footer";
import { MobileBar } from "@/components/site/MobileBar";

function App() {
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.2, smoothWheel: true });
    window.__lenis = lenis;
    let id;
    const raf = (t) => { lenis.raf(t); id = requestAnimationFrame(raf); };
    id = requestAnimationFrame(raf);
    return () => { cancelAnimationFrame(id); lenis.destroy(); window.__lenis = null; };
  }, []);

  return (
    <div className="grain min-h-screen bg-[#0B0C0E] text-[#F9FAFB]">
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <Pricing />
        <Process />
        <Booking />
      </main>
      <Footer />
      <MobileBar />
      <Toaster theme="dark" position="top-center" />
    </div>
  );
}

export default App;
