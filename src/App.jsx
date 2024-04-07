import Navbar from "./Navbar";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import * as bootstrap from "bootstrap";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
