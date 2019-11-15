import React from 'react';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import IcebergCounter from './IcerbergCounter';
import Footer from './components/Footer';

import reducer from './connect/reducer';

import './App.css';
// Create global state here, in a larger app you would pass in a combination of all your reducers. 
// You do this using combineReducers
const store = createStore(reducer)

function App() {
  return (
    <Provider store={store} >
      <div className="wrapper">
        <div className="hold-counter">
         <IcebergCounter />
        </div>
      </div>
      <Footer/>
    </Provider>
  );
}

export default App;
