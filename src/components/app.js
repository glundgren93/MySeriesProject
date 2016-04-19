/*
  Component responsible for rendering every component.
*/

import React from 'react';
import { Component } from 'react';
import SearchBar from '../containers/search_bar';
import ShowList from '../containers/shows_list';
import Header from './header';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <SearchBar />
        <ShowList />
        {this.props.children}
      </div>
    );
  }
}
