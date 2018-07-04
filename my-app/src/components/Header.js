import React, { Component } from "react";
import axios from 'axios';
export default class Header extends Component {
    constructor() {
        super()
        this.state = { movies: [] };
    }

    componentWillMount() {
        this.getData();
    }

    getData = () => {
        axios.get('/movies')
            .then(res => {
                const movies = res.data;
                this.setState({ movies });
            })
    }

    render() {
        const { movies } = this.state;
        return (
            <div className="container-fluid">
                <div className="App">
                    <h1>Movies</h1>
                    <div className="row">
                        <ul>
                            {movies.map((movie, i) =>
                                <li key={i}>
                                    Name:{movie.name}<br></br>
                                    Year:{movie.year}<br></br>
                                    Rating:{movie.rating}<br></br><br></br>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}