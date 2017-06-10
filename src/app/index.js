'use strict';

import _ from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';

import { Header } from './components/Header/Header';
import { Home } from './components/Home';

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Header/>            
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Home/>
                    </div>
                </div>
            </div>
        );
    };
}

ReactDOM.render(
    <App/>,
    document.getElementById('app')
);

console.log("It Works?");
