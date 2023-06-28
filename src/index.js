import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/index.css'
import { Provider } from 'react-redux';
import configureAppStore from './store/store';

// Define preloadedState
const preloadedState = {
  counter: {
    value: 250
  }
}

const root = ReactDOM.createRoot(
  document.getElementById('root')
)

const store = configureAppStore(preloadedState)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)