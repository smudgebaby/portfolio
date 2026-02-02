
import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import ErrorBoundary from './components/ErrorBoundary';
import Home from './pages/Home';
import CategoryView from './pages/CategoryView';
import About from './pages/About';
import Contact from './pages/Contact';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/category/:slug" element={<CategoryView />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          
          <footer className="py-20 px-6 border-t border-white/10 mt-20">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="text-2xl font-bold serif tracking-tighter">XINYI</div>
              <div className="text-neutral-500 text-sm tracking-widest uppercase flex gap-8">
                <a href="https://www.instagram.com/xzeeeze?igsh=bmIzZjlvN2xlMTZ6&utm_source=qr" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a>
                {/* <a href="#" className="hover:text-white transition-colors">Twitter</a> */}
                {/* <a href="#" className="hover:text-white transition-colors">Vimeo</a> */}
              </div>
              <div className="text-neutral-600 text-[10px] tracking-[0.2em] uppercase">
                © 2026 Your Personal Archive. All rights reserved.
              </div>
            </div>
          </footer>
        </div>
      </Router>
    </ErrorBoundary>
  );
};

export default App;
