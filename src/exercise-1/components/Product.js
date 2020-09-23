import React, {Component} from 'react';
// import { useParams } from 'react-router';
import data from '../../exercise-2/mockups/data.json';

class Product extends Component {
  render() {
    const keys = Object.keys(data);
    const id = keys[this.props.match.params.id - 1];
    return (
      <div className="product">
        <p>Product detail</p>
        <p>Name: {data[id].name}</p>
        <p>Id: {data[id].id}</p>
        <p>Price: {data[id].price}</p>
        <p>Quantity: {data[id].quantity}</p>
        <p>Desc: {data[id].desc}</p>
        <p>URL: products/{this.props.match.params.id}</p>
      </div>
    );
  }
}

export default Product;