import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Footer from './components/Footer'
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* אפשר להוסיף עוד נתיבים לעמודי פרסומים נוספים */}
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
