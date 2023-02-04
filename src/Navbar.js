
import './App.css';
import {Navbar,Button } from "react-bootstrap";
import {Link} from "react-router-dom"



function Header() {
  return (
    <div className='text-center'>
 <Navbar className='bg-dark'>
  <Navbar.Brand className=' text-white ms-2'>
    API
  </Navbar.Brand>
 </Navbar>
 <h1 className='mt-5'>Workers Information</h1>
 <Button className='ms-auto me-auto d-block mt-5'><Link to="cards">view details</Link></Button>
 

</div>
  );
}

export default Header;