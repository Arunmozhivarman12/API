
import './App.css';
import Tab from './Table';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from './Navbar';
import Details from './id comp';




function App() {
  return (
    <div>

 <BrowserRouter>
 <Routes>
  <Route path='/' element={<Header/>}></Route>
  <Route path='cards' element={<Tab/>}/>
  <Route path='cards/details/:id' element={<Details/>}/>
 </Routes>
 </BrowserRouter>

</div>
  );
}

export default App;
