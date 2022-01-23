import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from 'store';
import GlobalStyle from 'GlobalStyle';

import Tournaments from 'screens/Tournaments';

const App = () => <Tournaments />;

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    <App />
  </Provider>,
  document.getElementById('root')
);
