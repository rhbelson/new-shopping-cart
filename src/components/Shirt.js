import React, { Component } from 'react';
import { Container, Row, Col, Button, Modal, ModalHeader, ModalFooter, ModalBody } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-table/react-table.css';
import { IoIosAddCircle } from "react-icons/io";

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
        height: '400px',
        textAlign:'center'
		};
    return (
    	<div style={product_style}>
        <h5>{this.props.shirt.title}</h5>
        <img src={require(`../static/products/${this.props.shirt.sku}_1.jpg`)} width={150} />
        <h5> Price: ${this.props.shirt.price} </h5>
        <button outline color="primary"><IoIosAddCircle/>Add to Cart</button>
        </div>

    );
  }
}


export default Shirt;