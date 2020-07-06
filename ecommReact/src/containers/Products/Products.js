import React, { Component } from 'react';

import axios from 'axios'
import {Link} from 'react-router-dom'
import {Button, Container, Col, Row, Image} from 'react-bootstrap'
import Aux from '../../hoc/Auxiliary';

import Logo from '../../components/Logo/Logo'
import imgcabbage from '../../assets/Img/cabbage.jpg'
import imgcucumber from '../../assets/Img/cucumber.jpg'
import imgtomato from '../../assets/Img/tomato.jpg'
import imggrapes from '../../assets/Img/grapes.jpg'
import imgmango from '../../assets/Img/mango.jpg'



class BurgerBuilder extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {...}
    // }
    state = {
         productData: [],
         imgPath: [],
         name: [],
         price: [],
         description: [],
         quantity: [],
         id: []
    }
    componentDidMount() {
     axios.get('http://localhost:8080/api/product')
     .then((res) => { 
        console.log(res.data) 
        res.data.map((item,index) => {
        this.setState({ id: [...this.state.id, item._id],
                        name: [...this.state.name, item.productName],
                        price: [...this.state.price, item.price],
                        quantity: [...this.state.quantity, item.quantity],
                        description: [...this.state.description, item.description] })
        }
        )
        
     })
     .catch((error) => {
       console.log(error);
     })
   }
    
    render () {
           
           console.log(this.state.id) 
           console.log(this.state.price) 
           console.log(this.state.description)    
          const mango = require('../../assets/Img/mango.jpg')
          const papaya = require('../../assets/Img/papaya.jpg')
          const watermelon = require('../../assets/Img/watermelon.jpg')
          const pineapple = require('../../assets/Img/pineapple.jpg')
          

        // {salad: true, meat: false, ...}
        return (
             
            <Aux>
                <Container>
                  <Row>
                   <Col xs={6} md={4}>
                         <br></br>
                         <br></br>
                        <Link to={'/' + this.state.id[0]}><Image src={imgtomato} 
                        fluid height="200%" width="200%" /></Link>
                         <br></br>
                         <h5> {this.state.name[0]}</h5>
                         <h5>Price: Rs{this.state.price[0]}</h5>
                         <br></br>
                         <br></br>
                         <br></br>
                   </Col>
                    <Col xs={6} md={4}>
                         <br></br>
                         <br></br>
                         <Link to={'/' + this.state.id[2]}><Image src={imgcucumber} fluid height="120%" width="90%" /></Link>
                         <h5> {this.state.name[1]}</h5>
                         <h5>Price: Rs {this.state.price[1]}</h5>
                         
                         <br></br>
                         <br></br>
                         <br></br>
                    </Col>
                    <Col xs={6} md={4}>
                         <br></br>
                         <br></br>
                          <Link to={'/' + this.state.id[3]}> <Image src={pineapple} fluid height="300%" width="250%" crop="fill" /> </Link>
                         <h5>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   {this.state.name[3]} </h5>
                         <h5>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   Price: Rs {this.state.price[1]}</h5>
                    </Col>
                   </Row>
                   <Row>
                   <Col xs={6} md={4}>
                        <Link to={'/' + this.state.id[1]}><Image src={mango} fluid height="200%" width="200%"  /> </Link>
                         <h5> {this.state.name[2]}</h5>
                         <h5>Price: Rs {this.state.price[2]}</h5>
                   </Col>
                    <Col xs={6} md={4}>
                         <Link to={'/' + this.state.id[6]}><Image src={papaya} fluid height="200%" width="200%" /> </Link>
                         <h5> {this.state.name[6]}</h5>
                         <h5>Price: Rs {this.state.price[6]}</h5>
                    </Col>
                    <Col xs={6} md={4}>
                         <Link to={'/' + this.state.id[4]}><Image src={watermelon } fluid height="185%" width="185%" /> </Link>
                         <h5> {this.state.name[4]} </h5>
                         <h5>Price: Rs {this.state.price[4]}</h5>
                    </Col>
                   </Row>
                
                 </Container>
            </Aux>
        );
    }
}

export default BurgerBuilder;