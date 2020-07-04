import React, { Component } from 'react';

export class BadgeForm extends Component {
  state = {}; // Inicializando el estado del componente

  handleChange = (event) => {
    // console.log({
    //   name: event.target.name,
    //   value: event.target.value,
    // });
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleClick = (event) => {
    console.log('Button was clicked!');
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form was submitted');
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <h1>New Attendant</h1>

        <form onSubmit={this.handleSubmit}>
          <div className='form-group'>
            <label>First name</label>
            <input
              onChange={this.handleChange}
              className='form-control'
              type='text'
              name='firstName'
              value={this.state.firstName}
            />
          </div>

          <div className='form-group'>
            <label>Last name</label>
            <input
              onChange={this.handleChange}
              className='form-control'
              type='text'
              name='lastName'
              value={this.state.lastName}
            />
          </div>

          <div className='form-group'>
            <label>E-mail</label>
            <input
              onChange={this.handleChange}
              className='form-control'
              type='email'
              name='email'
              value={this.state.email}
            />
          </div>

          <div className='form-group'>
            <label>Job title</label>
            <input
              onChange={this.handleChange}
              className='form-control'
              type='text'
              name='jobtitle'
              value={this.state.jobtitle}
            />
          </div>

          <div className='form-group'>
            <label>GitHub</label>
            <input
              onChange={this.handleChange}
              className='form-control'
              type='text'
              name='github'
              value={this.state.github}
            />
          </div>

          <button
            onClick={this.handleClick}
            className='btn btn-primary'
            
          >
            Save
          </button>
        </form>
      </div>
    );
  }
}

export default BadgeForm;
