import React, { Component } from 'react';
import { Navbar, Nav, Container, Button, Form } from 'react-bootstrap';
import axios from 'axios';
import logo from './images/logo.jpg'
import bg from './images/bg.jpg'

class Transfer extends Component {

    state = {
        fields: false,
        amt: false,
        senderEr: false,
        receiverEr: false,
        success: false,
        sender: "",
        receiver: "",
        amount: ""
    }

    transfer = (e) => {
        console.log(this.state)
        e.preventDefault();
        if (this.state.sender === "" || this.state.receiver === "" || this.state.amount === "") {

            this.setState({
                fields: true

            })
            
            return
        }
        else if(this.state.amount==="0") {
            this.setState({
                amt: true

            })
            
            return
        }
        var today = new Date()
        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()
        var time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds()


        const credentials = {
            Sender: this.state.sender,
            Receiver: this.state.receiver,
            Amount: this.state.amount,
            Date: date,
            Time: time

        }
        const transactUpdate = {
            Sender: this.state.sender,
            Receiver: this.state.receiver,
            Amount: this.state.amount

        }
        console.log(credentials)
        axios.post('http://localhost:4000/app/transfer', credentials)
            .then(response => console.log(response.data))

        axios.post('http://localhost:4000/app/update', transactUpdate)
            .then(response => console.log(response.data))
            .catch(() => {
               this.setState({
                   receiverEr: true
               })
            })

        axios.post('http://localhost:4000/app/updates', transactUpdate)
            .then(response => console.log(response.data))
            .catch(() => {
                this.setState({
                    senderEr: true
                })
             })

        this.setState({ sender: "", receiver: "", amount: "" })
    }

    success =() => {
        this.setState({
            success: true
        })
}

    render() {
        return (
            <Container className="transt">

                {
                    this.state.fields ?
                        <div className="alert alert-primary" role="alert" style={{ textAlign: "center" }}>
                            <strong> One or more fields are blank!</strong><a href="/users" class="alert-link"></a>
                        </div>
                        : null
                }
                {
                    this.state.senderEr ?
                        <div className="alert alert-primary" role="alert" style={{ textAlign: "center" }}>
                            <strong> Invalid Sender Name, please enter an existing name</strong><a href="/users" class="alert-link"></a>
                        </div>
                        : null
                }
                {
                    this.state.receiverEr ?
                        <div className="alert alert-primary" role="alert" style={{ textAlign: "center" }}>
                            <strong> Invalid Receiver Name, please enter an existing name</strong><a href="/users" class="alert-link"></a>
                        </div>
                        : null
                }

                {
                    this.state.amt ?
                        <div className="alert alert-info" role="alert" style={{ textAlign: "center" }}>
                            <strong> Invalid amount entered, please enter a valid amount to transfer!</strong><a href="/users" class="alert-link"></a>
                        </div>
                        : null
                }
                {
                    this.state.success ?
                    <div className="alert alert-info" role="alert" style={{ textAlign: "center" }}>
                            <strong>Amount transferred successfully!</strong><a href="/users" class="alert-link"></a>
                        </div>
                        : null
                }
                <h3 style={{ textAlign: "center", color: "brown" }}>Money Transfer</h3>
                <Form onSubmit={this.transfer}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Sender Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter sender's name" onChange={(e) => this.setState({ sender: e.target.value })}
                            value={this.state.sender} />

                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Receiver Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter receiver's email" onChange={(e) => this.setState({ receiver: e.target.value })}
                            value={this.state.receiver} />

                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Amount</Form.Label>
                        <Form.Control type="text" placeholder="Amount" onChange={(e) => this.setState({ amount: e.target.value })}
                            value={this.state.amount} />

                    </Form.Group>

                    <Button variant="primary" type="submit"onClick={this.success}>
                        Submit
                    </Button>
                </Form>
            </Container>
        )
    }
}
export default Transfer

