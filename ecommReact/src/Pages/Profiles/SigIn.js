import React, {Component} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import {Button, Container, Col, Row, Image, Form, Label, Control, Check, Alert} from 'react-bootstrap'

class SignIn extends Component {
    constructor(props){
      super(props)
      this.state = {
          toggle: false,
          email: '',
          password: ''
     }       
     }

     changeHandler = (e) => {
          this.setState({[e.target.name]: [e.target.value]})
     }    
    
     submitHandler = (e) => {
          e.preventDefault()
          
           const data ={
                 email: this.state.email[0],
                 password: this.state.password[0]
              } 
            console.log(data)
           axios.post('http://localhost:8080/api/users/login',data)
           .then((res) => { 
            console.log("Successfully Loged In!")
            console.log(res.data.token)
            this.setState({toggle: true})
     })
     .catch((error) => {
       console.log(error);
     })
     }

    render () {
        console.log(this.props)
        const{ email, password } = this.props
        return (
            <div>
                { this.state.toggle ? [
                                      'primary'
                                       ].map((variant, idx) => (
                                         <Alert key={idx} variant={variant}>
                                          <Link to="/">Go To Home Page</Link>Successfully Loged In!
                                           </Alert>)) : null}
            <Form onSubmit={this.submitHandler}>
            <Form.Group controlId="formBasicEmail">
           <Form.Label>Email address</Form.Label>
           <Form.Control type="email" placeholder="Enter email" name="email" value={email} onChange={this.changeHandler} />
           <Form.Text className="text-muted">
           We'll never share your email with anyone else.
           </Form.Text>
           </Form.Group>

           <Form.Group controlId="formBasicPassword">
           <Form.Label>Password</Form.Label>
           <Form.Control type="password" placeholder="Password" name="password" value={password} onChange={this.changeHandler}/>
           </Form.Group>
  
          <Button variant="primary" type="submit">
            SignIn
           </Button>
           </Form>
            </div>

        )
    }
}

export default SignIn;