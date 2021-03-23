import React from 'react'
import Table  from 'react-bootstrap/Table';

const Inventory = () => {
    return (
        <Table striped bordered hover>
        <thead>
            <tr>
            <th>Store</th>
            <th>Model 1</th>
            <th>Model 2</th>
            <th>Model 3</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td>Store 1</td>
            <td>number for model 1</td>
            <td>number for model 3</td>
            <td>number for model 4</td>
            </tr>
            <tr>
            <td>Store 2</td>
            <td>number for model 1</td>
            <td>number for model 2</td>
            <td>number for model 3</td>
            </tr>
            <tr>
            <td>store 33</td>
            <td colSpan="2">Dont know yet</td>
            <td>@average ?</td>
            </tr>
        </tbody>
        </Table>
    )
};

// var ws = new WebSocket('ws://localhost:8080/');

// ws.onmessage = function(event) {
//     // const { store, model, inventory } = JSON.parse(event.data);
// };

// ws.onopen = function (event) {
//     ws.send("Here's some text that the server is urgently awaiting!");
//   };


export default Inventory