import React, {Component} from 'react';
import {Link, Route} from 'react-router-dom';
import Product from './Product';

class Products extends Component {
  render() {
    return (
    <div className="products">
      <p>All Products</p>
        <div className="bicycle">
          <Link to="/products/1" style={{color: 'red', textDecoration: 'none', marginLeft: '20px'}}>Bicycle</Link>
        </div>

        <div className="tv">
        <Link to="/products/2" style={{color: 'red', textDecoration: 'none', marginLeft: '20px'}}>TV</Link>
        </div>

        <div className="Pencil">
        <Link to="/products/3" style={{color: 'red', textDecoration: 'none', marginLeft: '20px'}}>Pencil</Link>
        </div>

        <Route exact path="/products/:id" component={Product} />
    </div>
    );
  }
}

export default Products;