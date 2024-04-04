
import Navbar from './Navbar'
import Projects from './Pages/Projects'
import Contact from './Pages/Contact'
import Home from './Pages/Home'
import { Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import * as bootstrap from 'bootstrap';

function App() {
  return (
    <>
<Navbar/>
      <div className='content container container-fluid vh-80'>
        <Routes>
<Route path="/Home" element={<Home />}></Route>
<Route path="/projects" element={<Projects />}></Route>
<Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </div>
    </>
  )
}

export default App;
