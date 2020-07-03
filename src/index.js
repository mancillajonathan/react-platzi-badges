import React from 'react';
import ReactDOM from 'react-dom';
import Badge from './components/Badge'

// const element = (
//   <div>
//     <h1>Hola, soy Jair</h1>
//     <p>Soy ingeniero frontend</p>
//     <Badge />
//   </div>
// );
const container = document.getElementById('app');
const libro = document.getElementById('Hola');

ReactDOM.render(<Badge />, container);
