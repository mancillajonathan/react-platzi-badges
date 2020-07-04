import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './global.css';
import Badge from './components/Badge';

const container = document.getElementById('app');

ReactDOM.render(
  <Badge
    avatar='https://www.gravatar.com/avatar/ec358c02b5152e576d503f79d72f5312=identicon'
    firstName='Juan'
    lastName='Colleman'
    jobTitle='Front-end developer'
    github='mancillajonathan'
  />,
  container
);
