import React from 'react';
import store from '../store'
import { Provider } from 'react-redux'
import ListView from "./ListView";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Header";

const Application = props => {
  return (
      <Provider store={store}>
        <Header/>
        <ListView />
      </Provider>
  );
};

export default Application;