import React, {Component} from 'react';
import {  Navbar, Nav, Container, Button} from 'react-bootstrap';
import logo from './images/logo.jpg'
import bg from './images/bg.jpg'

class Home extends Component {
    render() {
        return (
            <div >
                <>
                

  
  <div style={{ 
    backgroundImage: `url(${bg})`,
      height: "1000 px" ,
      paddingBottom: "4rem"

    }}>
        {/* <div style={{color: "danger", padding:" 40px", textAlign: "center"}}>
        <h2> Sai Bank</h2>
        </div> */}
        <Button style={{margin: "200px",width: "200px"}} variant="outline-warning" href="/users">Users List</Button>{' '}
        <Button style={{marginLeft: "0px",width: "200px"}}variant="outline-danger" href="/transfer">Transfer</Button>{' '}
        <Button style={{marginLeft: "180px", width: "200px"}}variant="outline-info" href="/transactions">Transaction History
        </Button>{' '}
    </div>
</>
            </div>
        )
    }
}
export default Home

