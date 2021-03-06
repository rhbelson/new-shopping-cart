import React, { Component } from 'react';
import './index.scss';
import data from './static/data/products.json';
import ProductTable from './components/ProductTable.js';
import { Container, Row, Col, Button } from 'reactstrap';



class App extends Component {
  render() {
    return (
      <div className="App" style = {{backgroundColor: 'gray'}}>
        <ProductTable products={data.products} />
      </div>
    );
  }
}


export default App;