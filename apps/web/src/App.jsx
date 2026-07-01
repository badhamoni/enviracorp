
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import { Toaster } from '@/components/ui/sonner';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* For a Single Page Scrollable site, other routes can redirect or be added as needed. */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster richColors position="top-right" />
    </Router>
  );
}

function NotFound() {
  return (
    <div className="min-h-screen bg-[#07142D] flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-8xl font-bold text-primary mb-4">404</h1>
      <p className="text-2xl text-white mb-8">The page you are looking for doesn't exist.</p>
      <a
        href="/"
        className="inline-block bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(0,102,255,0.3)]"
      >
        Return Home
      </a>
    </div>
  );
}

export default App;
