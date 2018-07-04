import React, { Component } from 'react';
import axios from 'axios';
export default class Forminput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            year: '',
            rating: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }
    handleSubmit(event) {
        event.preventDefault();
        const val = {
            name: this.state.name,
            year: this.state.year,
            rating: this.state.rating
        }
        console.log(val);
        axios({
            method:'post',
            url:'http://localhost:3003/movies',
            data:val
        })
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
            .catch(res=>{
                console.log(res);
            } )

    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Movie Name:
            </label>
                <input type="text" name="name" onChange={this.handleChange} />
                <label>
                    Year of Release:
            </label>
                <input type="text" name="year" onChange={this.handleChange} />

                <label>
                    Rating:
            </label>
                <input type="text" name="rating" onChange={this.handleChange} />
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

