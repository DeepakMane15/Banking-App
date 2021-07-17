import React, { Component } from 'react';
import { Navbar, Nav, Container, Button, Table } from 'react-bootstrap';
import axios from 'axios';
import Transfer from './transfer'


class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      posts: []
    };
  }


  componentDidMount = () => {
    this.getUsers();
  };

  getUsers = () => {
    axios.get('http://localhost:4000/app/users')
      .then((response) => {
        const data = response.data;
        this.setState({ posts: data });
        console.log("data received")
        console.log(this.state.posts.Name)
      })
      .catch(() => {
        this.setState({
          error: true
        })
        console.log("error occured")
      });
  }

  renderTableData() {
    return this.state.posts.map((post, index) => {
      const { Name, Email, AcNo, Balance } = post //destructuring
      return (
        <tr>
          <td>{Name}</td>
          <td>{Email}</td>
          <td>{AcNo}</td>
          <td>{Balance}</td>
          {/* <td><Button href="/transfer ">Transact</Button></td> */}
        </tr>
      )
    })
  }
  render() {
    return (
      <Container className="table" >

      
      {
        this.state.error ?
        <div className="alert alert-primary" role="alert" style={{ textAlign: "center" }}>
                            <strong> error occured</strong><a href="/users" class="alert-link"></a>
                        </div>
        : null
      }

<h3 style={{padding: "10px", textAlign: "center"}}>Customer List</h3>
        <Table striped bordered hover size="sm" >
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Account No.</th>
              <th>Balance</th>
              {/* <th>Operation</th> */}
            </tr>
          </thead>
          <tbody>
            {this.renderTableData()}
          </tbody>
        </Table>
      </Container>
    )
  }
}
export default Users

