import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Pricing from './Pages/Pricing';
import Services from './Pages/Services';
import Reseach from './Pages/Reseach';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/services" element={<Services />} />
      <Route path="/research" element={<Reseach />} />
      {/* Add more routes as needed */}
    </Routes>
  </Router>
);


export default App;