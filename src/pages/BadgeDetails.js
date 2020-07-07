import React from 'react';
import { Link } from 'react-router-dom';
import confLogo from '../images/logo-conf.svg';
import './styles/BadgeDetails.css';
import PageLading from '../components/PageLoading';
import PageError from '../components/PageError';
import api from '../api';
import Badge from '../components/Badge';

class BadgeDetails extends React.Component {
  state = {
    loading: true,
    error: null,
    data: undefined,
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null });

    try {
      const data = await api.badges.read(this.props.match.params.badgeId);
      this.setState({ loading: false, data: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };
  render() {
    if (this.state.loading) {
      return <PageLading />;
    }
    if (this.state.error) {
      return <PageError error={this.state.error} />;
    }

    const badge = this.state.data;
    return (
      <div>
        <div className='BadgeDetails__hero'>
          <div className='container'>
            <div className='row'>
              <div className='col-6 d-flex justify-content-center'>
                <img src={confLogo} alt='logo conferencia' />
              </div>
              <div className='col-6 d-flex align-items-center'>
                <div className='BadgeDetails__hero-attendant-name'>
                  <h1>
                    {badge.firstName} {badge.lastName}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='container'>
          <div className='row'>
            <div className='col'>
              <Badge
                firstName={badge.firstName}
                lastName={badge.lastName}
                email={badge.email}
                jobTitle={badge.jobTitle}
                github={badge.twitter}
              />
            </div>
            <div className='col'>
              <h2 className='font-weight-bold'>Actions</h2>
              <div className=''>
                <div className='mb-3'>
                  <Link
                    className='btn btn-primary font-weight-bold'
                    to={`/badges/${badge.id} /edit`}
                  >
                    Edit
                  </Link>
                </div>
                <div className=''>
                  <div className='btn btn-danger font-weight-bold'>Delete</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeDetails;
