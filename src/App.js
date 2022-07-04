import Navbar from "./components/Navbar";
import "./styles.css";
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./pages/Home";
import About from './pages/About'
import Work from './pages/Work'
import Contact from './pages/Contact'
import Resume from './pages/Resume'
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar>
          <Routes>
            <Route path="/" element= {<Home/>} />
            <Route path="/about" element= {<About/>} />
            <Route path="/work" element= {<Work/>} />
            <Route path="/contact" element= {<Contact/>} />
            <Route path="/resume" element= {<Resume/>} />
          </Routes>
        </Navbar>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
