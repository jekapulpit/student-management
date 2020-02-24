import React from 'react';
import store from '../store'
import { Provider } from 'react-redux'
import ListView from "./ListView";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Header";
import {Col, Container, Row} from "react-bootstrap";

const Application = props => {
  return (
      <Provider store={store}>
        <Header/>
          <Container>
              <Row>
                  <Col xs={4}>
                      <ListView />
                  </Col>
                  <Col xs={8}>

                  </Col>
              </Row>
          </Container>
      </Provider>
  );
};

export default Application;