import React, {Component} from 'react'

import axios from 'axios'
import {Link} from 'react-router-dom'
import {Button, Container, Col, Row, Form} from 'react-bootstrap'
import Footer from '../components/Footer'

class About extends Component {
   
   
      constructor(props){
      super(props)
      this.state = {
          productData: [],
         imgPath: [],
         name: [],
         price: [],
         description: [],
         quantity: [],
         id: [],
          quant: 0
     }       
     }
    
     

     

    componentDidMount() {
     axios.get('http://localhost:8080/api/product')
     .then((res) => { 
        console.log(res.data) 
        res.data.map((item,index) => {
        if(this.props.match.params.id === item._id){
        this.setState({ id: [...this.state.id, item._id],
                        imgPath: [...this.state.imgPath, item.imagePath],
                        name: [...this.state.name, item.productName],
                        price: [...this.state.price, item.price],
                        quantity: [...this.state.quantity, item.quantity],
                        description: [...this.state.description, item.description] })
        }
        }
        )
        
     })
     .catch((error) => {
       console.log(error);
     })
   }

          changeHandler = (e) => {
          this.setState({[e.target.name]: [e.target.value]})
     }    
    
     submitHandler = (e) => {
          e.preventDefault()
           axios.interceptors.request.use(
              config => {
                 config.headers.authorization = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjAwZDMxN2Q5ZWFmNTBkOTAzZDk4ODciLCJpYXQiOjE1OTM5NzM2MTd9.ijI7z85RdmAmmZmlclnporILjGn5z5fjNyC27LP_pIA'
                 return config;
            },
            error => {
                   return Promise.reject(error)
              }
          )     
           const data ={
                 productName : this.state.name[0],
                 quantity : this.state.quant[0],
                 price : this.state.price[0],
                 total : (this.state.price[0] * this.state.quant[0])
              } 
            console.log(data)
           
           axios.post('http://localhost:8080/api/addToCart',data)
           .then((res) => { 
            console.log("Successfully added into cart!")
            console.log(res)
     })
     .catch((error) => {
       console.log(error);
     })
     }

    render () {
        const{ email, password,quant } = this.props
        console.log(this.props.match.params.id)
        console.log(this.state.imgPath[0])
       
        return (
            <div>
                    
                    <Container>
                  <Row>
                   <Col xs={6} md={4}>
                         <br></br>
                         <h3>{this.state.name}</h3>
                         <br></br>
                         <img className="img-fluid" src={'../../assets/Img/papaya.jpg'} alt="logo" />
                        
                        <br></br>
                         <h5>Price: Rs {this.state.price}</h5>
                         <h5>In Stock : True </h5>
                         <h5> Avaialable Quantities: {this.state.quantity}</h5>
                         <br></br>

                          <Form onSubmit={this.submitHandler}>
                          <Form.Group controlId="formBasicEmail">
                           <Form.Label>Enter The Quantities</Form.Label>
                           <Form.Control type="quantity" placeholder="Quantity" name="quant" value={quant} onChange={this.changeHandler} />
                           </Form.Group>
                            <Button variant="primary" type="submit">
                           Add To Cart
                           </Button> 
                           </Form>

                         <br></br>
                         </Col>
                         </Row>
                        </Container>
                         <div className="container" >
                         <h2><mark>Description</mark></h2>
                        <h5>{this.state.name}</h5>
                      <h5><mark>How to use:</mark></h5>
                      <p>{this.state.description}</p>
                       
                         
                          
                         <Link to="/"> <Button >Go to Home Page</Button> </Link> 
                     </div>
                       

                     <Footer/>
            </div>

        )
    }
}

export default About;