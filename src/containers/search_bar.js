/*
  Container responsible for creating a SearchBar.
*/

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchShows } from '../actions/index';

class SearchBar extends Component {

  constructor(props) {
    super(props);

    this.state = { term: ''};

    // bind to SearchBar context
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState( { term: event.target.value } );
  }

  onFormSubmit(event) {
    event.preventDefault();

    // make API request with term inserted in searchbar
    this.props.fetchShows(this.state.term);
    this.setState({ term: '' });
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="Search for your favorite Tv show"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange} />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary"> Search </button>
        </span>
      </form>
    );
  }
}

// Anything returned from this function will end up as props on ShowList
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchShows }, dispatch);
}

// Connects a React component to a Redux store
export default connect(null, mapDispatchToProps)(SearchBar);
