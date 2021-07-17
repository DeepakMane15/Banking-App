import React, { Component } from 'react';
import { Navbar, Nav, Container, Button, Table } from 'react-bootstrap';
import axios from 'axios';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';

class Transactions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trans: []
    };
  }


  componentDidMount = () => {
    this.getUsers();
  };

  getUsers = () => {
    axios.get('http://localhost:4000/app/transactions')
      .then((response) => {
        const data = response.data;
        this.setState({ trans: data });
        console.log("data received")
      })
      .catch(() => {
        alert("error occured");
      });
  }

  renderTableData() {
    return this.state.trans.map((post, index) => {
      const { Sender, Receiver, Amount, Date,Time } = post //destructuring
      return (
        <tr>
          <td>{Sender}</td>
          <td>{Receiver}</td>
          <td>{Amount}</td>
          <td>{Date}</td>
          <td>{Time}</td>
        </tr>
      )
    })
  }
  render() {
    return (
      <Container className="transaction">

      <h3>Transaction History</h3>

        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Sender</th>
              <th>Receiver</th>
              <th>Amount No.</th>
              <th>Date</th>
              <th>Time</th>
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
export default Transactions