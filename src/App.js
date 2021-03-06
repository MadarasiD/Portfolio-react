import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import {BrowserRouter as Router} from "react-router-dom";
import AnimatedRoutes from './components/AnimatedRoutes';


function App() {
  return (
      <Router>
        <Navbar />
            <AnimatedRoutes />
        <Footer />
      </Router>
  );
}

export default App;
