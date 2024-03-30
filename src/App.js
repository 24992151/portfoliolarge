import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import HomePage from './pages/Home/HomePage';
import LandscapingPage from './pages/Landscaping/LandscapingPage';
import ProjectsPage from './pages/Projects/ProjectsPage';
import FaqsPage from './pages/FAQs/FaqsPage';
import ContactPage from './pages/Contact/ContactPage';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <div className="layout">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/landscaping" element={<LandscapingPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/faqs" element={<FaqsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
