import React from 'react';
import { Component } from 'react';

export default class Panel extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="panel panel-info">
        <div className="panel-heading">
          <h3 className="panel-title">{this.props.title}</h3>
        </div>
        <div className="panel-body">
          {this.props.body}
        </div>
      </div>
    );
  }
}
