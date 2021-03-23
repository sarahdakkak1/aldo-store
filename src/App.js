// import './App.css';
// import Inventory from './components/inventory'
// import React  from 'react';
// import io from 'socket.io-client';
// import ReactDOM from 'react-dom';
// import { useEffect, useState } from 'react';


// const App = () => {
//   return (
//       <div className='container'>
//         <header className='center'>
//           Aldo
//       </header>    
//       < Inventory className="">
//         </Inventory>
//         <ul className="list">{event}</ul>
//       </div>
//     )
// };

// // const socket = io('http://localhost:8080', {
// //   transports: ['websocket', 'polling']
// // });

// var ws = new WebSocket('ws://localhost:8080/');

// ws.onmessage = function(event) {
//   console.log(event.data);
// };

// export default App;


// export const STORE_STORES = ['ALDO Centre Eaton', 'ALDO Destiny USA Mall', 'ALDO Pheasant Lane Mall', 'ALDO Holyoke Mall', 'ALDO Maine Mall', 'ALDO Crossgates Mall', 'ALDO Burlington Mall', 'ALDO Solomon Pond Mall', 'ALDO Auburn Mall', 'ALDO Waterloo Premium Outlets']
// export const SHOES_MODELS = ['ADERI', 'MIRIRA', 'CAELAN', 'BUTAUD', 'SCHOOLER', 'SODANO', 'MCTYRE', 'CADAUDIA', 'RASIEN', 'WUMA', 'GRELIDIEN', 'CADEVEN', 'SEVIDE', 'ELOILLAN', 'BEODA', 'VENDOGNUS', 'ABOEN', 'ALALIWEN', 'GREG', 'BOZZA' ]

import React from "react";
import WebSockets from "./WebSockets";

const App = () => {
  return (
    <>
      <WebSockets />
    </>
  );
};

export default App;