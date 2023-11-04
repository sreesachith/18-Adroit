import './App.css';
import { Routes,Route } from 'react-router-dom';
import Home from './pages/home'
import Landing from './pages/landing'
import Signup from './pages/signup'
import About from './pages/about'


function App() {
  return (

    <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path='home' element={<Home/>}/>
      <Route path='signup' element={<Signup/>}/>
      <Route path='about' element={<About/>}/>
    </Routes>
    
    
  );
}

export default App;
