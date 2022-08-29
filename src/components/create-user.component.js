import React, { Component } from 'react';
import axios from 'axios';

export default class CreateUser extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: '',
    };
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value,
    });
  }
  onSubmit(e) {
    e.preventDefault();

    const user = {
      username: this.state.username,
    };

    axios
      .post(`https://exercise-tracker-api-026.herokuapp.com/users/add`, user)
      .then(res => alert(res.data))
      .catch(err => console.log(err));

    this.setState({
      username: '',
    });
  }

  render() {
    return (
      <div>
        <h3>Create New User</h3>
        <form onSubmit={this.onSubmit}>
          <div className='form-group'>
            Username:
            <input
              type='text'
              required
              className='form-control'
              value={this.state.username}
              onChange={this.onChangeUsername}
            />
            <button type='submit' className='btn btn-primary mt-10'>
              Create user
            </button>
          </div>
        </form>
      </div>
    );
  }
}
