import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {Button, Container, Col, Row, Image, Form, Label, Control, Check} from 'react-bootstrap'
import SignUp from './Profiles/SignUp'
import SignIn from './Profiles/SigIn'
import SignOut from './Profiles/SignOut'

class Profile extends Component {
    render () {
        return (
            <div>                    
                    <Container>
                  <Row>
                   <Col xs={6} md={4}>

                         <Link to="/SignIn">
                             <br></br>
                             <br></br>
                             <Button>Sign In</Button>
                         </Link>
                   </Col>
                    <Col xs={6} md={4}> 
                         <Link to="/SignOut">
                             <br></br>
                             <br></br>
                             <Button>Sign Out</Button>
                         </Link>
                    </Col>
                    <Col xs={6} md={4}>
                         <Link to="/SignUp">
                             <br></br>
                             <br></br>
                             <Button>Sign Up</Button>
                         </Link>
                    </Col>
                   </Row>
                
                 </Container>
            </div>

        )
    }
}

export default Profile;