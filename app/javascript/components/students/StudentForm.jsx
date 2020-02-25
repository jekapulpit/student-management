import React from 'react';
import { connect } from "react-redux";
import { Form, FormControl, Button, ButtonToolbar } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import { updateStudent } from "../../services/studentsServices";
import { mapFieldsToValues } from "../../services/mapperService";

const StudentForm = props => {
    let studentDisplayName = `${props.student.attributes.profile.first_name} ${props.student.attributes.profile.last_name}, ${props.student.attributes.spec.name}`;
    let studentAttributes = {
        id: props.student.id,
        profile: {},
        contact: {},
        education_process: {},
    };
    let specList = props.specs.map((spec) => {
        return <option key={spec.id} value={spec.id}>{spec.attributes.name}</option>
    });

    return (
        <Form>
            <Form.Group controlId="formBasicFirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                    type="text"
                    ref={input => studentAttributes.profile.first_name = input}
                    defaultValue={props.student.attributes.profile.first_name} />
            </Form.Group>
            <Form.Group controlId="formBasicLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text"
                              ref={input => studentAttributes.profile.last_name = input}
                              defaultValue={props.student.attributes.profile.last_name} />
            </Form.Group>
            <Form.Group controlId="SpecSelect">
                <Form.Label>Student's spec</Form.Label>
                <Form.Control
                    defaultValue={props.student.attributes.spec.id}
                    ref={input => studentAttributes.education_process.spec_id = input}
                    as="select">
                    {specList}
                </Form.Control>
            </Form.Group>
            <Form.Group controlId="DateOfBirth">
                <Form.Label>Date of Birth</Form.Label>
                <Form.Control
                    ref={input => studentAttributes.profile.date_of_birth = input}
                    defaultValue={props.student.attributes.profile.date_of_birth} />
            </Form.Group>
            <Form.Group controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                    type="email"
                    defaultValue={props.student.attributes.contact.email}
                    ref={input => studentAttributes.contact.email = input}/>
            </Form.Group>
            <Form.Group controlId="formPhoneNumber">
                <Form.Label>Phone number</Form.Label>
                <Form.Control
                    ref={input => studentAttributes.contact.phone_number = input}
                    defaultValue={props.student.attributes.contact.phone_number} />
            </Form.Group>
            <Form.Group controlId="formAddress">
                <Form.Label>Address</Form.Label>
                <Form.Control
                    as="textarea"
                    defaultValue={props.student.attributes.contact.address}
                    ref={input => studentAttributes.contact.address = input}
                    rows="3" />
            </Form.Group>
            <ButtonToolbar>
                <Button variant="success" onClick={() => {
                    updateStudent({
                        ...studentAttributes,
                        profile: mapFieldsToValues(studentAttributes.profile),
                        contact: mapFieldsToValues(studentAttributes.contact),
                        education_process: mapFieldsToValues(studentAttributes.education_process),
                    }).then((student) => { props.toggleUpdateStudent(student.data) });
                }}>save</Button>
                <Button variant="danger" onClick={() => props.toggleHandleEditStudent()}>cancel</Button>
            </ButtonToolbar>
        </Form>
    );
};

export default StudentForm;
