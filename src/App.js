
import './App.css';
import Dashboard from './pages/Dashboard/dashboard';
import Navbar from "./Components/navbar";
import Createadd from "./pages/Create-add/createadd";
import Form from "./pages/Form/form";
import { BrowserRouter,Routes,Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <Routes>
    
    <Route path='/'element={<Navbar></Navbar>}></Route> 
    <Route path='/dashboard'element={<Dashboard></Dashboard> }></Route> 
    <Route path='/form'element={<Form></Form> }></Route> 
    <Route path='/createadd'element={<Createadd></Createadd> }></Route> 
   </Routes>
    </BrowserRouter>
   
  )
}

export default App;
