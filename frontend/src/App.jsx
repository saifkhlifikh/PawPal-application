import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Features from './pages/Features';
import FindSitter from './pages/FindSitter';
import SitterProfile from './pages/SitterProfile';
import BecomeSitter from './pages/BecomeSitter';
import SignupLogin from './pages/SignupLogin';
import OwnerDashboard from './pages/OwnerDashboard';
import SitterDashboard from './pages/SitterDashboard';
import Chat from './pages/Chat';
import Booking from './pages/Booking';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import Legal from './pages/Legal';
import Download from './pages/Download';

import './styles/App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/features" element={<Features />} />
        <Route path="/find-sitter" element={<FindSitter />} />
        <Route path="/sitter/:id" element={<SitterProfile />} />
        <Route path="/become-sitter" element={<BecomeSitter />} />
        <Route path="/auth" element={<SignupLogin />} />
        <Route path="/dashboard/owner" element={<OwnerDashboard />} />
        <Route path="/dashboard/sitter" element={<SitterDashboard />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/legal" element={<Legal />} />
        <Route path="/download" element={<Download />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
