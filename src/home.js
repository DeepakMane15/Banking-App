import React, {Component} from 'react';
import {  Navbar, Nav, Container, Button,Row , Col} from 'react-bootstrap';
import logo from './images/logo.jpg'
import bg from './images/bg.jpg'

class Home extends Component {
    render() {
        return (
            <div >
                <>
                

  
  <div  className = "content" style={{ 
    backgroundColor: "#d6f2ff",
      paddingBottom: "4rem"

    }}>
       <Container>
           <Row style={{padding: "200px"}}>
               <Col>
               <Button  style={{width: "180px"}} variant="outline-warning" href="/users">Users List</Button>{' '}
               </Col>
               <Col>
               <Button style={{width: "180px"}} variant="outline-danger" href="/transfer">Transfer</Button>{' '}
               </Col>
               <Col>
               <Button style={{width: "180px"}} variant="outline-info" href="/transactions">Transaction History</Button>{' '}
               </Col>
           </Row>
           </Container> 
        
        
        
        
    </div>
</>
            </div>
        )
    }
}
export default Home

