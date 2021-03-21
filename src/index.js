import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from 'firebase';
import { BrowserRouter  } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/state-redux';

const firebaseConfig = {
  apiKey: "AIzaSyCh7ReP7SphBuVjXu7JEmGrTpHa271sXG0",
  authDomain: "testfirebase-e0e5f.firebaseapp.com",
  databaseURL: "https://testfirebase-e0e5f-default-rtdb.firebaseio.com",
  projectId: "testfirebase-e0e5f",
  storageBucket: "testfirebase-e0e5f.appspot.com",
  messagingSenderId: "439141841835",
  appId: "1:439141841835:web:812707556328086b23b0ee"
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <BrowserRouter>
  <Provider store={store}>
    <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);


