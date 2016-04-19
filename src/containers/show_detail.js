import React, { Component } from 'react';
import { connect } from 'react-redux';

class ShowDetail extends Component {

  render() {
    if(!this.props.show) {
      return <div>Select a Serie to get started.</div>;
    }

    return (
      <h3>Show name: {this.props.show.Title}</h3>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    show: state.selectedShow
  }
}

export default connect(mapStateToProps)(ShowDetail);
