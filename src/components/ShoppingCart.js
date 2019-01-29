import React, { Component } from 'react';
import { Container, Row, Col, Button, Modal, ModalHeader, ModalFooter, ModalBody } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-table/react-table.css';
import { FaShoppingCart } from  'react-icons/fa';


class ShoppingCart extends Component {
  constructor(props) {
     super(props);
     this.state = {
       modal: false
     };

     this.toggle = this.toggle.bind(this);
   }

   toggle() {
     this.setState({
       modal: !this.state.modal
     });
   }


  render() {
    const style = {
      alignItems: 'center',
      textAlign: 'center',
      marginLeft:'75%',
      width: '25%',
      display: 'flex',
      paddingBottom: '35px',
      borderRadius:'5px'
    }
    return (
      <div style = {style}>
        <Button color = "success" onClick={this.toggle} style = {{width: '100%'}}> <FaShoppingCart/> View My Cart </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
            <ModalHeader toggle={this.toggle}>My Shopping Cart</ModalHeader>
              <ModalBody>
                Cart Items
              </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Check Out</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}



export default ShoppingCart;