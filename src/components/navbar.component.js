import React, { Component } from 'react';

export default class Navbar extends Component {
  render() {
    return (
      <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
        <a href='/' className='navbar-brand'>
          ExcerciseTracker
        </a>
        <a href='/' className='navbar-item nav-link text-white'>
          Exercises
        </a>
        <a href='/create' className='navbar-item nav-link text-white'>
          Create Exercise Log
        </a>

        <a href='/user' className='navbar-item nav-link text-white'>
          Create User
        </a>
      </nav>
    );
  }
}
