import React from 'react';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
import api from '../api';

import '../components/styles/BadgeEdit.css';
import PageLoaging from '../components/PageLoading';
import confHeader from '../images/logo-conf.svg';

class BadgeEdit extends React.Component {
  state = {
    loading: true,
    error: null,
    form: {
      firstName: '',
      lastName: '',
      email: '',
      jobTitle: '',
      twitter: '',
    },
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async (event) => {
    this.setState({ loading: true, error: null });

    try {
      const data = await api.badges.read(this.props.match.params.badgeId);

      this.setState({ loading: false, form: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
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
      await api.badges.update(this.props.match.params.badgeId, this.state.form);
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
        <div className='BadgeEdit__hero'>
          <img
            className='BadgeEdit__image img-fluid'
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
              <h1>Edit Attendant</h1>
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

export default BadgeEdit;
