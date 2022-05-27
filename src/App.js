import './App.css';
import Home from './pages/Home';
import Skills from './pages/Skills';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import {BrowserRouter as Router, Route, Routes} from "react-router-dom";


function App() {
  return (
    <div className="App">

      <Router>
        <Navbar />
          
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Home" element={<Home />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/about" element={<About />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/Contact" element={<Contact />} />
          </Routes>
        <Footer />

      </Router>
     
    </div>
  );
}

export default App;
