/*
  Container responsible for creating Shows List.
*/

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectShow } from '../actions/index';
import { Link } from 'react-router';

class ShowList extends Component {

  constructor(props) {
    super(props);

    // bind to ShowList context
    this.renderShows = this.renderShows.bind(this);
  }

  renderShows(show){
    const plot = show.Plot;
    const poster = show.Poster;
    const imdbID = show.imdbID;

    return (
      <tr key={ imdbID } onClick={ () => this.props.selectShow(show) }>
        <td><img src={ poster }/></td>
        <td>{ plot }</td>
        <td> <Link to="/show">fasfa</Link> </td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Show</th>
            <th>Plot</th>
            <th>Plot</th>
          </tr>
        </thead>
        <tbody>
          {this.props.shows.map(this.renderShows)}
        </tbody>
      </table>
    );
  }
}

// Anything returned from this function will end up as props on ShowList
const mapStateToProps = ({ shows })  => {
  return { shows }; // { shows } === { shows: shows }
}

// Anything returned from this function will end up as props on SeriesList Container
const mapDispatchToProps = (dispatch) => {
  /*
    Whenever selectSeries is called the result should be passed to all of our reducers.
    The only part of the application that cares about the returned value from selectSeries
    are the reducers, so we use bindActionCreators to make sure that the returned value
    flows to all reducers.
  */
  return bindActionCreators( { selectShow }, dispatch);
}

// Connects a React component to a Redux store
export default connect(mapStateToProps, mapDispatchToProps)(ShowList);
