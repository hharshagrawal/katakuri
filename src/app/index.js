'use strict';

import _ from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>First App</h1>
            </div>
        );
    };
}

ReactDOM.render(
    <App/>,
    document.getElementById('app')
);

console.log("It Works?");
