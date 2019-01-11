import React, { Component } from 'react';
import { Container, Row, Col, Button, Modal, ModalHeader, ModalFooter, ModalBody } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-table/react-table.css';

//Really should just be the product itself
class Shirt extends React.Component {
    constructor(props) {
     super(props);
     this.state = {
       modal: false,
       addedToCart: false
     };
 }
  render() {
    const product_style= {
        backgroundColor: 'white',
	    borderRadius: '5px',
        borderWidth: '1px',
        border: '2px solid black',
        padding: '20px',
        marginBottom: '100px',
        width: '300px',
        height: '400px'
		};
    return (
    	<div style={product_style}>
        <h4>{this.props.shirt.title}</h4>
        <img src={require(`../static/products/${this.props.shirt.sku}_1.jpg`)} width={110} />
        <h4> Price: ${this.props.shirt.price} </h4>
        <button outline color="primary">Add to Cart</button>
        </div>

    );
  }
}


export default Shirt;