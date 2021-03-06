import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import Shirt from './Shirt.js';
import ShoppingCart from './ShoppingCart.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-table/react-table.css';


class ProductTable extends Component {
  render() {
    return (
      <div>
      <ShoppingCart/>
      <Container>
      <Row>
        {this.props.products.map(function(shirt, i){
          return <Col><Shirt shirt = {shirt} /></Col>
        })}
       </Row>
      </Container>
      </div>
    );
  }
}

export default ProductTable;