import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import { Router, browserHistory, Route } from 'react-router';
import App from './components/app';
import ShowDetail from './containers/show_detail';

import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={ browserHistory } >
      <Route path="/" component={App} />
      <Route path="show" component={ShowDetail} />
    </Router>
  </Provider>
  , document.querySelector('.container'));
