import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Navi from './components/Nav';
import Footer from './components/Footer';
import OpenMics from './pages/OpenMics';
import ComedyClass from './pages/ComedyClass';






function App() {
  return (
    <div className="App">
      <Navi />
      <Routes>

      <Route path='/' element={ <Home /> }  />
      <Route path='/aboutus' element={ <AboutUs /> }  />
      <Route path='/openmics' element={ <OpenMics /> }  />
      <Route path='/comedyclass' element={ <ComedyClass /> }  />



          
    
    
    
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
