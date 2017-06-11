'use strict';

import _ from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import { Header } from './components/Header/Header';
import { Home } from './components/Home';
import { Login } from './components/Login/Login';

class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Header/>
                    <Route exact path='/' component={Home} />
                    <Route path='/login' component={Login} />
                </div> 
            </Router>
            
        );
    };
}

ReactDOM.render(
    <App/>,
    document.getElementById('app')
);

console.log("It Works?");
// <div className="container">
            //     <div className="row">
            //         <div className="col-xs-10 col-xs-offset-1">
            //             <Header/>            
            //         </div>
            //     </div>
            //     <div className="row">
            //         <div className="col-xs-10 col-xs-offset-1">
            //             <Home/>
            //         </div>
            //     </div>
            // </div>