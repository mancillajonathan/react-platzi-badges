import React from 'react';
import Navbar from '../components/Navbar';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';

import '../components/styles/BadgeNew.css';
import confHeader from '../images/badge-header.svg';

class BadgeNew extends React.Component {
  state = {
    form: {
      firstName: '',
      lastName: '',
      email: '',
      jobtitle: '',
      github: '',
    },
  };

  handleChange = (event) => {
    this.setState({
      form: {
        ...this.state.form,
        [event.target.name]: event.target.value,
      },
    });
  };

  render() {
    return (
      <div>
        <Navbar />
        <div className='BadgeNew__hero'>
          <img className='img-fluid' src={confHeader} alt='logo' />
        </div>

        <div className='container'>
          <div className='row'>
            <div className='col-6'>
              <Badge
                firstName={this.state.form.firstName}
                lastName={this.state.form.lastName}
                jobTitle={this.state.form.jobtitle}
                github={this.state.form.github}
                email={this.state.form.email}
                avatar='http://2.gravatar.com/avatar/ec358c02b5152e576d503f79d72f5312'
              />
            </div>
            <div className='col-6'>
              <BadgeForm
                onChange={this.handleChange}
                formValues={this.state.form}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeNew;
