

import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import About from "./components/About"
import ContactUs from "./components/ContactUs"
import ContactUs2 from "./components/ContactUs2";

/*begin React App*/
function App() {
  return (    
    <BrowserRouter>            
      <NavBar/>  
      <Routes>       
        <Route path="/" element={<Home/>}/>
        <Route path="/contactus" element={<ContactUs/>}/>
        <Route path="/contactus2" element={<ContactUs2/>}/>
        <Route path="/about" element={<About/>}/>      
      </Routes>
    </BrowserRouter>    
  );
}
export default App