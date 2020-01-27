import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import configureStore from './store';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <BrowserRouter>
      <Provider store={configureStore()}>
        <App />
      </Provider>
    </BrowserRouter>,
  document.getElementById("root")
);

serviceWorker.unregister();
