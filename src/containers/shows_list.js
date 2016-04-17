/*
  Container responsible for creating Shows List.
*/

import React, { Component } from 'react';
import { connect } from 'react-redux';

class ShowList extends Component {

  renderShows(show){
    const plot = show.Plot;
    const poster = show.Poster;
    const imdbID = show.imdbID;

    return (
      <tr key={ imdbID }>
        <td> <img src={ poster }/> </td>
        <td >{ plot }</td>
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

// Connects a React component to a Redux store
export default connect(mapStateToProps)(ShowList);
