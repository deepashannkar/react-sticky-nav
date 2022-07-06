import { BrowserRouter as Router, Routes, Route, Redirect,} from "react-router-dom";
import Sidenav from './components/sidenav';
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';
import './App.css';


function App() {
  return (
   <Router>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/sidenav" element={<Sidenav />} />
      <Route  path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
   </Router>
  );
}

export default App;
