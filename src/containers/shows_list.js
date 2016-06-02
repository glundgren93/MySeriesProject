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

    const plot = show.Plot != "N/A" ? show.Plot : "We didn't find a plot :(";
    const poster = show.Poster;
    const imdbID = show.imdbID;

    if(show.Response == "False" || show.Plot == "N/A"){
      return (
        <tr>
          <td>Show not found</td>
        </tr>
      );
    }

    return (
      <tr key={ imdbID } onClick={ () => this.props.selectShow(show) }>
        <td><img src={ poster } alt="We didn't find the show poster :("/></td>
        <td>{ plot }</td>
        <td><div className="text-xs-right"> <Link to="/show" className="btn btn-primary" >Check</Link></div></td>
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
            <th>Actions</th>
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
const mapDispatchToProps = (dispatch) => ({
  /*
    Whenever selectSeries is called the result should be passed to all of our reducers.
    The only part of the application that cares about the returned value from selectSeries
    are the reducers, so we use bindActionCreators to make sure that the returned value
    flows to all reducers.
  */
  selectShow(show) {
   dispatch(selectShow(show));
  }
})

// Connects a React component to a Redux store
export default connect(mapStateToProps, mapDispatchToProps)(ShowList);
