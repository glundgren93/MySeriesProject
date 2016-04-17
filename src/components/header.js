/*
  Component responsible for showing app header.
*/

import React, { Component } from 'react';

export default class Header extends Component{
  render() {
    return (
      <div className="page-header">
        <h1>TV Show React <small>Made for study purposes</small></h1>
      </div>
    );
  }
}
