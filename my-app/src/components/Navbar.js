import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Nabvar extends Component {
    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <ul className="nav navbar-nav">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/getmovies">Get Movies</Link></li>
                        <li><Link to="/addmovie">Add Movies</Link></li>
                    </ul>
                    <ul className="nav navbar-nav navbar-right">
                        <li><a href=""><span className="glyphicon glyphicon-log-in"></span> Sign In</a></li>
                    </ul>
                </div>
            </nav>
        );
    }
}