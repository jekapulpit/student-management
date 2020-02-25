import React from 'react';
import {Form, Button, ButtonToolbar, Accordion, Row, Col, Container} from 'react-bootstrap';
import DatePicker from "react-datepicker";
import { createStudent } from "../../services/studentsServices";
import { mapFieldsToValues } from "../../services/mapperService";
import ListView from "../Application";

const NewStudentForm = props => {
    let studentAttributes = {
        profile: {},
        contact: {},
        education_process: {},
    };
    let specList = props.specs.map((spec) => {
        return <option key={spec.id} value={spec.id}>{spec.attributes.name}</option>
    });

    return (
        <Form>
            <Container>
                <Row>
                    <Col xs={6}>
                        <Form.Group controlId="formBasicFirstName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control
                                placeholder='Enter First Name'
                                type="text"
                                ref={input => studentAttributes.profile.first_name = input} />
                        </Form.Group>
                    </Col>
                    <Col xs={6}>
                        <Form.Group controlId="formBasicLastName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text"
                                          ref={input => studentAttributes.profile.last_name = input}
                                          placeholder='Enter Last Name' />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <Form.Group controlId="SpecSelect">
                            <Form.Label>Student's spec</Form.Label>
                            <Form.Control
                                placeholder='Choose Spec'
                                ref={input => studentAttributes.education_process.spec_id = input}
                                as="select">
                                {specList}
                            </Form.Control>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col xs={6}>
                        <Form.Group controlId="edStartDate">
                            <Form.Label>Since</Form.Label>
                            <Form.Control
                                ref={input => studentAttributes.education_process.start_time = input}
                                placeholder='Studying since' />
                        </Form.Group>
                    </Col>
                    <Col xs={6}>
                        <Form.Group controlId="edEndDate">
                            <Form.Label>Until</Form.Label>
                            <Form.Control
                                ref={input => studentAttributes.education_process.end_time = input}
                                placeholder='Studying until' />
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    <Col xs={6}>
                        <Form.Group controlId="DateOfBirth">
                            <Form.Label>Date of Birth</Form.Label>
                            <Form.Control
                                ref={input => studentAttributes.profile.date_of_birth = input}
                                placeholder='Enter Date of Birth' />
                        </Form.Group>
                    </Col>
                    <Col xs={6}>
                        <Form.Group controlId="formPhoneNumber">
                            <Form.Label>Phone number</Form.Label>
                            <Form.Control
                                ref={input => studentAttributes.contact.phone_number = input}
                                placeholder='Enter Phone Number' />
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
                                ref={input => studentAttributes.contact.email = input}/>
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
                                ref={input => studentAttributes.contact.address = input}
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
                                    createStudent({
                                        profile: mapFieldsToValues(studentAttributes.profile),
                                        contact: mapFieldsToValues(studentAttributes.contact),
                                        education_process: mapFieldsToValues(studentAttributes.education_process),
                                    }).then((student) => { props.toggleCreateStudent(student.data) });
                                }}
                                eventKey="0">
                                save
                            </Accordion.Toggle>
                            <Accordion.Toggle
                                as={Button}
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

export default NewStudentForm;
