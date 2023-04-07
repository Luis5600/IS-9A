import { Provider } from 'react-redux';
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { store } from './store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}> 
      <App />
  </Provider>
)
