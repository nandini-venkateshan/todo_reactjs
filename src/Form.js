import React, { Component } from 'react';
import './index.css';

class Form extends Component {
    constructor(props) {
        super(props);

        this.initialState = {
            name: ''

        };

        this.state = this.initialState;
    }
    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    submitForm = () => {
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }
    render() {
      

        return (
            <form className="form">

                <input
                    type="text"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleChange}
                    placeholder="Enter Item" />
                <input
                    type="button"
                    value="Add Item"
                    onClick={this.submitForm} />
            </form>
        );
    }
}
export default Form;