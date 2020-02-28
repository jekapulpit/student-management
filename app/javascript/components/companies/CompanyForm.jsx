import React from 'react';
import {Form, FormControl, Button, ButtonToolbar, Row, Col, Container} from 'react-bootstrap';
import { updateCompany } from "../../services/companiesServices";
import { mapFieldsToValues } from "../../services/mapperService";``

const CompanyForm = props => {
    let companyAttributes = {
        id: props.company.id,
        contact: {},
    };
    let specList = props.specs.map((spec) => {
        return <option key={spec.id} value={spec.id}>{spec.attributes.name}</option>
    });

    return (
        <Form>
            <Container>
                <Row>
                    <Col xs={12}>
                        <Form.Group controlId="formBasicCompanyName">
                            <Form.Label>Company Name</Form.Label>
                            <Form.Control
                                type="text"
                                ref={input => companyAttributes.name = input}
                                defaultValue={props.company.attributes.name} />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <Form.Group controlId="formEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                defaultValue={props.company.attributes.contact.email}
                                ref={input => companyAttributes.contact.email = input}/>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <Form.Group controlId="formPhoneNumber">
                            <Form.Label>Phone number</Form.Label>
                            <Form.Control
                                ref={input => companyAttributes.contact.phone_number = input}
                                defaultValue={props.company.attributes.contact.phone_number} />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <Form.Group controlId="formAddress">
                            <Form.Label>Address</Form.Label>
                            <Form.Control
                                as="textarea"
                                defaultValue={props.company.attributes.contact.address}
                                ref={input => companyAttributes.contact.address = input}
                                rows="3" />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <ButtonToolbar>
                            <Button variant="success" onClick={() => {
                                updateCompany({
                                    ...companyAttributes,
                                    contact: mapFieldsToValues(companyAttributes.contact),
                                }).then((company) => { props.toggleUpdateCompany(company.data) });
                            }}>save</Button>{' '}
                            <Button variant="danger" onClick={() => props.toggleHandleEditCompany()}>cancel</Button>
                        </ButtonToolbar>
                    </Col>
                </Row>
            </Container>
        </Form>
    );
};

export default CompanyForm;
