// const element = document.createElement('h1')
// element.innerText = 'Hello, React!'

// const container = document.getElementById('app')

// container.appendChild(element);

import React from 'react'
import ReactDOM from 'react-dom'

// const element = <h1>Hello, React from Platzi Badges</h1>
// const jsx = <h1>Hello, React</h1>

// const element = React.createElement('a', { href: 'https://platzi.com' }, 'Ir a Platzi!')

// const name = 'Jair'
// const element = React.createElement('h1', {},`Hola, soy ${name}`)
// const jsx = <h1>Hola me llamo, {name}</h1>

const jsx = 
<div>
    <h1>Hola, soy Jair</h1>
    <p>Soy ingeniero frontend</p>
</div>;

const element = React.createElement(
    'div',
    {},
    React.createElement('h1', {}, 'Hola, mi nombre es Jonathan'),
    React.createElement('p', {}, 'Soy dev frontend')
);

const container = document.getElementById('app')

// ReactDOM.render(__que__, __donde__)
// ReactDOM.render(element, container)
ReactDOM.render(element, container)