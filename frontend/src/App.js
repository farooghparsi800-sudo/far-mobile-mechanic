import React from 'react';
import { Header } from './components/site/Header';
import { Hero } from './components/site/Hero';
import { Marquee } from './components/site/Marquee';
import { Services } from './components/site/Services';
import { Process } from './components/site/Process';
import { Booking } from './components/site/Booking';

function App() {
  return (
    <div className="min-h-screen bg-[#0B0C0E] text-[#F9FAFB] font-sans selection:bg-[#FF5500] selection:text-white">
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <Process />
        <Booking />
      </main>
      <footer className="py-8 border-t border-white/10 text-center font-mono text-xs text-white/40">
        <p>&copy; {new Date().getFullYear()} F.A.R Mobile Mechanic. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
