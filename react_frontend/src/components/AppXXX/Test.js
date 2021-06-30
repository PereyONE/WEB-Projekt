import React from 'react'
import axios from 'axios';

export default class Test extends React.Component {

    state =
        {
            username: '',
            email: '',
            password: '',
        };

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleSubmit = event => {
        event.preventDefault();

        const user = {
            name: this.state.username,
            email: this.state.email,
            password: this.state.password,
        };

        axios
            .post('http://localhost:8080/api/registration', { user })
            .then(res => {
                console.log(res);
                console.log(res.data);
            });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        User
                        <input type="text" name="username" onChange={this.handleChange} />

                    </label>
                    <label>
                        mail
                        <input type="text" name="email" onChange={this.handleChange} />
                    </label>
                    <label>
                        pass
                        <input type="text" name="password" onChange={this.handleChange} />
                    </label>
                    <button type="submit">Add</button>
                </form>

            </div>
        )
    }
}


