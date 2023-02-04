import React, { useState,useEffect } from "react";
import {Container,Row,Col,Table} from "react-bootstrap"
import { useParams } from "react-router-dom";
import image from "./images3.jpeg";




function Details() {
const [user,setUser] = useState([]);


    const {id} = useParams();
   const profile=id;
   
    const fetchData = () => {
      fetch(`https://jsonplaceholder.typicode.com/users?id=${profile}`)
        .then(response => {
          return response.json()
        })
        .then(data => {
          setUser(data)
          
        })
    }
      
  useEffect(() => {
    fetchData()
  }, [])
  return (
    <div >
        <h1 className="text-center mt-2">Worker:{id}</h1>
 <Container className="mt-2">
 
  {user.map(info =>(
    <Container key={id}  className="bg-dark  box2">
      <Row>
        <Col lg='4'>
       <img src={image} alt={"profile"} className='comp'></img>
       </Col>
       <Col lg="8">
       <h1 className="text-white mt-5">{info.name}</h1>
        <Table className="text-white mt-5">
          <tbody>
          <tr>
          <td><label>UserName:</label></td><td>{info.username}</td>
          </tr>
          <tr>
          <td>
          <label>Email:</label></td><td>{info.email}</td>
          </tr>
          <tr>
          <td>
          <label>Address:</label></td> 
          <td>
          <ul>  
          <li>{info.address.street},</li>
          <li>{info.address.suite},</li>
          <li>{info.address.city}</li>
          <li>{info.address.zipcode}</li>
          </ul> </td>
          </tr>
          <tr>
          <td><label>Phone:</label></td><td>{info.phone}</td>
          </tr>
          <tr>
          <td>
          <label>Website:</label></td><td>{info.website}</td></tr>
          <tr>
          <td> <label>Company:</label></td>
         <td>
         <ul>
         <li>{info.company.name}</li>
         <li>{info.company.catchPhrase}</li>
         <li>{info.company.bs}</li>
          </ul>
          </td> 
          </tr>
          </tbody>
          </Table>
          </Col>
</Row>
    </Container>

  ))}
 </Container>
 

</div>
  );
}

export default Details;
