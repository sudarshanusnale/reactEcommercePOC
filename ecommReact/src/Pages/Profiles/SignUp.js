import React, {Component} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import {Button, Container, Col, Row, Image, Form, Label, Control, Check, Alert} from 'react-bootstrap'

class SignUp extends Component {
      constructor(props){
      super(props)
      this.state = {
          name: '',
          email: '',
          password: '',
          address: '',
          pincode:'',
          state: '',
          city: '',
          mobileno: '',
          age:'',
          gender:'',
          toggle: false

          
     }       
     }
   
     changeHandler = (e) => {
          this.setState({[e.target.name]: [e.target.value]})
     } 
       
       submitHandler = (e) => {
          e.preventDefault()
            const data ={
                 name: this.state.name[0],
                 email: this.state.email[0],
                 password: this.state.password[0],
                 gender: this.state.gender[0],
                 Address: {
                         street: this.state.address[0],
                         city: this.state.city[0],
                         state: this.state.state[0],
                         pincode: this.state.pincode[0] 
                       }
              } 
            
           console.log(data)
           axios.post('http://localhost:8080/api/users',data)
           .then((res) => { 
            console.log("Successfully Signed In!")
            this.setState({toggle: true})
             })
          .catch((error) => {
              console.log(error);
            })
     }

    render () {
         const{ name, email, password, address, pincode, state, city, mobileno, age, gender } = this.props
        return (
            <div>
                 { this.state.toggle ? [
                                      'primary'
                                       ].map((variant, idx) => (
                                         <Alert key={idx} variant={variant}>
                                          <Link to="/">Go To Home Page</Link>Successfully Signed In!
                                           </Alert>)) : null}
                
             <Form onSubmit={this.submitHandler}>
               <Form.Group controlId="formGridAddress1">
             <Form.Label>Full Name</Form.Label>
             <Form.Control placeholder="Enter your Name" name="name" value={name} onChange={this.changeHandler}/>
             </Form.Group>
             
             <Form.Row>
               <Form.Group as={Col} controlId="formGridEmail">
             <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" name="email" value={email} onChange={this.changeHandler} />
            </Form.Group>

             <Form.Group as={Col} controlId="formGridPassword">
             <Form.Label>Password</Form.Label>
             <Form.Control type="password" placeholder="Password" name="password" value={password} onChange={this.changeHandler} />
             </Form.Group>
             </Form.Row>

             <Form.Group controlId="formGridAddress1">
             <Form.Label>Address</Form.Label>
             <Form.Control placeholder="Enter the street name" name="address" value={address} onChange={this.changeHandler}/>
             </Form.Group>

             <Form.Row>
             <Form.Group as={Col} controlId="formGridCity">
             <Form.Label>City</Form.Label>
             <Form.Control  placeholder="Enter the City name" name="city" value={city} onChange={this.changeHandler} />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
               <Form.Label>State</Form.Label>
              <Form.Control placeholder="Enter the state name" name="state" value={state} onChange={this.changeHandler}>
             </Form.Control>
             </Form.Group>

             <Form.Group as={Col} controlId="formGridZip">
               <Form.Label>Pin Code</Form.Label>
             <Form.Control  placeholder="Enter the Pin Code" name="pincode" value={pincode} onChange={this.changeHandler} />
             </Form.Group>
             </Form.Row>
              
                <Form.Row>
                <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>Mobile No.</Form.Label>
                <Form.Control  placeholder="Enter your mobile no." name="mobileno" value={mobileno} onChange={this.changeHandler} />
                </Form.Group>

               <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Age</Form.Label>
                <Form.Control placeholder="Enter your age" name="age" value={age} onChange={this.changeHandler}>
                </Form.Control>
               </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label>Gender</Form.Label>
                 <Form.Control as="select" defaultValue="Male" name="gender" value={gender} onChange={this.changeHandler}>
                      <option>Male</option>
                      <option>Female</option>
                 </Form.Control>
                 </Form.Group>
                 </Form.Row>
  

               <Button variant="primary" type="submit">
               Submit
                </Button>
            </Form>
            </div>

        )
    }
}

export default SignUp;