import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class ShowDetail extends Component {

  render() {
    if(!this.props.show) {
      return <div>Select a Serie to get started.</div>;
    }

    return (
      <div>
        <h3>Show name: {this.props.show.Title}</h3>
        <div className="text-xs-right"> <Link to="/" className="btn btn-primary">Back</Link></div>
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
