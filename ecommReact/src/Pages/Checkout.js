import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {Button, Container, Col, Row, Image, Form, Label, Control, Check} from 'react-bootstrap'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

class Checkout extends Component {
    render () {
        return (
            <div>
                    <Form>
        <Form.Row className="align-items-center">
       <Col xs="auto" className="my-1">
       <Form.Label className="mr-sm-2" htmlFor="inlineFormCustomSelect" srOnly>
        Preference
      </Form.Label>
      <Form.Control
        as="select"
        className="mr-sm-2"
        id="inlineFormCustomSelect"
        custom
      >
        <option value="0">Choose...</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
        <option value="4">Four</option>
        <option value="5">Five</option>
      </Form.Control>
    </Col>
       <Col xs="auto" className="my-1">
      <Button type="submit">Add To Cart</Button>
       </Col>
      </Form.Row>
   </Form>
            </div>

        )
    }
}

export default Checkout;