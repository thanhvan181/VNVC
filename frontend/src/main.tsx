import React from 'react'
import ReactDOM from 'react-dom'
import { PersistGate } from 'redux-persist/integration/react'
import { BrowserRouter } from 'react-router-dom'
import { store } from './redux/store';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import persistStore from './redux/store';



ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistStore}>
        <App />
      </PersistGate>
    </Provider>

  </BrowserRouter>,
  document.getElementById('root')
)
