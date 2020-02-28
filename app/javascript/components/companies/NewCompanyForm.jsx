import React from 'react';
import {Form, Button, ButtonToolbar, Accordion, Row, Col, Container} from 'react-bootstrap';
import { createCompany } from "../../services/companiesServices";
import { mapFieldsToValues } from "../../services/mapperService";

const NewCompanyForm = props => {
    let companyAttributes = {
        contact: {},
    };

    return (
        <Form>
            <Container>
                <Row>
                    <Col xs={12}>
                        <Form.Group controlId="formBasicCompanyName">
                            <Form.Label>Company Name</Form.Label>
                            <Form.Control
                                placeholder='Enter Company Name'
                                type="text"
                                ref={input => companyAttributes.name = input} />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <Form.Group controlId="formEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder='Enter E-mail'
                                ref={input => companyAttributes.contact.email = input}/>
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    <Col xs={12}>
                        <Form.Group controlId="formAddress">
                            <Form.Label>Address</Form.Label>
                            <Form.Control
                                as="textarea"
                                placeholder='Enter Address'
                                ref={input => companyAttributes.contact.address = input}
                                rows="3" />
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    <Col xs={12}>
                        <ButtonToolbar>
                            <Accordion.Toggle
                                as={Button}
                                variant="success"
                                onClick={() => {
                                    createCompany({
                                        ...companyAttributes,
                                        contact: mapFieldsToValues(companyAttributes.contact),
                                    }).then((company) => { props.toggleCreateCompany(company.data) });
                                }}
                                eventKey="0">
                                save
                            </Accordion.Toggle>
                            <Accordion.Toggle
                                as={Button}
                                onClick={() => props.toggleHandleNewCompany()}
                                variant="danger"
                                eventKey="0">
                                cancel
                            </Accordion.Toggle>
                        </ButtonToolbar>
                    </Col>
                </Row>
            </Container>
        </Form>
    );
};

export default NewCompanyForm;
