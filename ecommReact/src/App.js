import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect, BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios'

import Layout from './components/Layout/Layout';
import Products from './containers/Products/Products';
import ProductDetail from './Pages/ProductDetail'
import Profile from './Pages/Profile'
import SingIn from './Pages/Profiles/SigIn'
import SignUp from './Pages/Profiles/SignUp'
import SignOut from './Pages/Profiles/SignOut'


class App extends Component {  

  render () {
    return (
      <div>
        <BrowserRouter>
        <Layout>
          <Switch>
            
          <Route path="/profile" component={Profile}  />
          <Route path="/SignIn" component={SingIn}  />
          <Route path="/SignUp" component={SignUp}  />
          <Route path="/SignOut" component={SignOut}  />
          <Route path="/cart"  />
          <Route path="/allProducts" exact component={Products} />
         <Route path="/:id" exact component={ProductDetail} />
          <Route path="/"  component={Products} />
          
          <Redirect to="/" />
          </Switch>

        </Layout>
        
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
