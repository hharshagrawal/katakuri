import React from 'react';
import { Link } from 'react-router-dom';

export class Header extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="container">
                    <div className="navbar-header">
                        <ul className="nav navbar-nav">
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/login">About</Link></li>
                            </ul>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}