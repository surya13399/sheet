import ReactDOM from 'react-dom';
import xlsx from "xlsx";
import './App.css';
import React, { useState } from 'react';

class Table extends React.Component {
  constructor(props) {
     super(props)
     this.state = {
        products: [
           { id: 1, Product: 'Dry Fruits', Available: 21},
           { id: 2, Product: 'kellogs', Available: 19},
           { id: 3, Product: 'Olive oil', Available: 16},
           { id: 4, Product: 'Pasta', Available: 25}
        ]
     }
  }

  renderTableHeader() {
     let header = Object.keys(this.state.products[0])
     return header.map((key, index) => {
        return <th key={index}>{key.toUpperCase()}</th>
     })
  }

  renderTableData() {
     return this.state.products.map((product, index) => {
        const { id,Product,Available } = product //destructuring
        return (
           <tr key={id}>
              <td>{id}</td>
              <td>{Product}</td>
              <td>{Available}</td>
      
           </tr>
        )
     })
  }

  render() {
     return (
        <div>
           <h1 id='title'>SUPER MARKET</h1>
           <table id='students'>
              <tbody>
                 <tr>{this.renderTableHeader()}</tr>
                 {this.renderTableData()}
              </tbody>
           </table>
        </div>
     )
  }
}

export default Table;