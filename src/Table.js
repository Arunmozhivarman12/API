import React, { useEffect, useState } from "react";
import {Col, Container, Row, Button} from "react-bootstrap"
import image from "./images2.jpeg";
import { Link } from "react-router-dom";




function Tab(){

  const [users, setUsers] = useState([])

  const fetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setUsers(data)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

    return(
        <div>
          <h1 className="text-center">Workers Profile</h1>
  <Container  className=" mt-2 ">
    <Row >
      {users.map((detail,id) =>(
         <Col lg="5" className="me-2 ms-2 mt-5 bg-dark text-white text-center box " key={id}>
          <img src={image} alt={"profile"} className="img1"></img><br></br>
          <label>Name:</label><span>{detail.name}</span><br></br>
          <label>Email:</label><span>{detail.email}</span><br></br>
          <label>City:</label><span>{detail.address.city}</span><br></br>
          <Button><Link to={`details/${detail.id}`}>More details</Link></Button>

            </Col>
        ) )
      }
    </Row>
    </Container>
    </div>
    )
}

export default Tab;