import React from 'react';
import BadgeDetails from './BadgeDetails';
import PageLading from '../components/PageLoading';
import PageError from '../components/PageError';
import api from '../api';

class BadgeDetailsContainer extends React.Component {
  state = {
    loading: true,
    error: null,
    data: undefined,
    modalIsOpen: false,
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

  handleOpeneModal = (event) => {
    this.setState({ modalIsOpen: true });
  };

  handleCloseModal = (event) => {
    this.setState({ modalIsOpen: false });
  };

  handleDeleteBdge = async (event) => {
    this.setState({ loading: true, error: null });

    try {
      await api.badges.remove(this.props.match.params.badgeId);
      this.setState({ loading: false});
      this.props.history.push('/badges');
    } catch (error) {}
  };
  render() {
    if (this.state.loading) {
      return <PageLading />;
    }
    if (this.state.error) {
      return <PageError error={this.state.error} />;
    }

    // const badge = this.state.data;
    return (
      <BadgeDetails
        onCloseModal={this.handleCloseModal}
        onOpenModal={this.handleOpeneModal}
        modalIsOpen={this.state.modalIsOpen}
        onDeleteBadge={this.handleDeleteBdge}
        badge={this.state.data}
      />
    );
  }
}

export default BadgeDetailsContainer;
