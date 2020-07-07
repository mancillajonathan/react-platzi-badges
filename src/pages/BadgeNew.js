import React from 'react';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
import api from '../api';

import '../components/styles/BadgeNew.css';
import PageLoaging from '../components/PageLoading';
import confHeader from '../images/logo-conf.svg';

class BadgeNew extends React.Component {
  state = {
    loading: false,
    error: null,
    form: {
      firstName: '',
      lastName: '',
      email: '',
      jobTitle: '',
      twitter: '',
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

  handleSubmit = async (event) => {
    event.preventDefault();
    this.setState({ loading: true, error: null });

    try {
      await api.badges.create(this.state.form);
      this.setState({ loading: false });
      this.props.history.push('/badges');
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    if (this.state.loading) {
      return <PageLoaging />;
    }
    return (
      <React.Fragment>
        <div className='BadgeNew__hero'>
          <img
            className='BadgeNew__image img-fluid'
            src={confHeader}
            alt='logo'
          />
        </div>

        <div className='container'>
          <div className='row'>
            <div className='col-6'>
              <Badge
                firstName={this.state.form.firstName || 'FIRST_NAME'}
                lastName={this.state.form.lastName || 'LAST_NAME_NAME'}
                jobTitle={this.state.form.jobTitle || 'JOB_TITLE'}
                github={this.state.form.twitter || 'github-username'}
                email={this.state.form.email || 'E-MAIL'}
                avatar='http://2.gravatar.com/avatar/ec358c02b5152e576d503f79d72f5312'
              />
            </div>
            <div className='col-6'>
              <BadgeForm
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                formValues={this.state.form}
                error={this.state.error}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BadgeNew;
