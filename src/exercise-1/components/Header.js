import React, {Component} from 'react';
import {BrowserRouter as Router, NavLink, Switch, Route} from 'react-router-dom';
import AboutUs from './AboutUs';
import HomePage from './HomePage';
import MyProfile from './MyProfile';
import Product from './Product';
import Products from './Products';

class Header extends Component {
  render() {
    return (
      <Router>
        <div className="header">
          <div className="header-list">
            <NavLink exact to="/"
            style={{color: 'gray', textDecoration: 'none', marginRight: '40px'}}
            activeStyle={{textDecoration: 'underline'}}>
              Home
            </NavLink>

            <NavLink exact to="/products"
            style={{color: 'gray', textDecoration: 'none', marginRight: '40px'}}
            activeStyle={{textDecoration: 'underline'}}>
              Products
            </NavLink>
            
            <NavLink exact to="/my-profile"
            style={{color: 'gray', textDecoration: 'none', marginRight: '40px'}}
            activeStyle={{textDecoration: 'underline'}}>
              My Profile
              </NavLink>
              
              <NavLink exact to="/about-us"
              style={{color: 'gray', textDecoration: 'none', marginRight: '40px'}}
              activeStyle={{textDecoration: 'underline'}}>
                About us
                </NavLink>
          </div>

        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>

          <Route exact path="/products">
            <Products />
          </Route>

          <Route exact path="/my-profile">
            <MyProfile />
          </Route>

          <Route exact path="/about-us">
            <AboutUs />
          </Route>

          <Route exact path="/products/:id" component={Product}/>
        </Switch>
      </div>
      </Router>
      
    );
  }
}

export default Header;