// // import 'styles/styles.scss';
//
// import React from 'react';
// import ReactDOM from 'react-dom';
// // import HelloWorld from 'components/HelloWorld';
//
// // const App = () => "<p>HelloWorld</p>";
//
// ReactDOM.render(
//   <p>HelloWorld</p>,
//   document.getElementById('app')
// );

'use strict';

import _ from 'lodash'; //ES6 import to check our babel loader

const array = [1];
const other = _.concat(array, 2, [3], [[4]]);

console.log(other); //[1, 2, 3, [4]]

console.log("It Works?");
