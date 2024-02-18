import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Navi from './components/Nav';






function App() {
  return (
    <div className="App">
      <Navi />
      <Routes>

      <Route path='/' element={ <Home /> }  />
      <Route path='/aboutus' element={ <AboutUs /> }  />



          
    
    
    
      </Routes>
    </div>
  );
}

export default App;
