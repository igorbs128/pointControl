import React from 'react';
import { Provider } from 'react-redux'
import {Store} from './store'
import Register from './components/Register/Register'
import Point from './components/PointRegistration/PointRegistration'

function App() {
  return (
    <Provider store={Store}>
    <div className="App">
      <Register />
      <Point />
    </div>
    </Provider>
  );
}

export default App;
