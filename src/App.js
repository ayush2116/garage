
import './App.css';
import LandingPage from './components/LandingPage';
import Available from './components/Available';
import {Route ,  BrowserRouter , Routes}  from 'react-router-dom'
function App() {
  return (

    <BrowserRouter>
    
    <Routes className='.App'>
   
    <Route path='/' element={<LandingPage/>}/>
    <Route path='/garage' element={<Available/>}/>
    
    </Routes>
  
    </BrowserRouter>
  );
}

export default App;
