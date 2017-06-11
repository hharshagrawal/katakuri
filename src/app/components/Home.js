import React from 'react';

export class Home extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="jumbotron">
                    <h1>Hello, world!</h1>
                    <p>...</p>
                    <p><a className="btn btn-primary btn-lg" href="about" role="button">Learn more</a></p>
                </div>
            </div>
        )
    }
}