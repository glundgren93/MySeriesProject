import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import ShowTrailerDetail from '../components/show_trailer_detail';
import Panel from '../components/panel';

class ShowDetail extends Component {

  render() {
    if(!this.props.show) {
      return (
        <div className="page-header">
          <h3>Select a Show to get started.</h3>
          <div className="text-xs-right pull-right"> <Link to="/" className="btn btn-primary">Back</Link></div>
        </div>
      );
    }

    return (
      <div>
        <div className="page-header">
          <h3>
            { this.props.show.Title }
            <small> { this.props.show.imdbRating }/10
              <span className="glyphicon glyphicon-star" aria-hidden="true"></span>
            </small>
          </h3>
            <div className="media">
              <div className="media-left media-top">
                  <img className="media-object img-thumbnail" src={ this.props.show.Poster } />
              </div>
              <div className="media-body">
                <Panel  title="Description" body={ this.props.show.Plot }/>
                <Panel  title="Cast" body={ this.props.show.Actors }/>
                <div className="panel panel-info">
                  <div className="panel-heading">
                    <h3 className="panel-title">Trailer</h3>
                  </div>
                  <div className="panel-body">
                    <ShowTrailerDetail show={this.props.show.Title}/>
                  </div>
                </div>
              </div>
            </div>
        </div>
        <div className="text-xs-right pull-right"> <Link to="/" className="btn btn-primary">Back</Link></div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    show: state.selectedShow
  }
}

export default connect(mapStateToProps)(ShowDetail);
