import React from 'react';
import store from '../store'
import { Provider } from 'react-redux'
import StudentList from "./students/StudentList";

const Application = props => {
  return (
      <Provider store={store}>
        <StudentList />
      </Provider>
  );
};

export default Application;