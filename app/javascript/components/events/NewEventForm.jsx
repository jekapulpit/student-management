import React from 'react';
import {Button, ButtonToolbar, Form, Jumbotron} from 'react-bootstrap';
import { createEvent } from "../../services/eventsServices";
import { mapFieldsToValues } from "../../services/mapperService";

const NewEventForm = props => {
    let eventAttributes = {};
    let options;
    let relationInput;
    let secondRelation;
    switch (props.currentTab) {
        case 'students':
            secondRelation = { user_id: props.selectedStudent.id }
            options = props.companies.map((company) => {
                return <option key={company.id} value={company.id}>{company.attributes.name}</option>;
            });
            relationInput = <Form.Group controlId="companySelect">
                <Form.Label>Related Company</Form.Label>
                <Form.Control
                    ref={input => eventAttributes.company_id = input}
                    as="select">
                    {options}
                </Form.Control>
            </Form.Group>;
            break;
        case 'companies':
            secondRelation = { company_id: props.selectedCompany.id }
            options = props.students.map((student) => {
                return <option key={student.id}
                               value={student.id}>{student.attributes.profile.first_name} {student.attributes.profile.last_name}</option>;
            });
            relationInput = <Form.Group controlId="studentSelect">
                <Form.Label>Related Student</Form.Label>
                <Form.Control
                    ref={input => eventAttributes.user_id = input}
                    as="select">
                    {options}
                </Form.Control>
            </Form.Group>;
            break;
        default:
            relationInput = null;
    }

    return (
        <Jumbotron style={{ padding: '2rem 2rem' }}>
            <div>
                {relationInput}
                <Form.Group controlId="eventTypeSelect">
                    <Form.Label>Event Type</Form.Label>
                    <Form.Control
                        ref={input => eventAttributes.event_type = input}
                        as="select">
                        <option value="interview">interview</option>
                        <option value="discussion">discussion</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="eventDate">
                    <Form.Label>Event Date</Form.Label>
                    <Form.Control
                        ref={input => eventAttributes.event_time = input} />
                </Form.Group>
                <Form.Group controlId="resultsInput">
                    <Form.Label>Description or results</Form.Label>
                    <Form.Control
                        ref={input => eventAttributes.description = input} />
                </Form.Group>
                <ButtonToolbar>
                    <Button variant="success" onClick={() => {
                        createEvent({
                            ...mapFieldsToValues(eventAttributes),
                            ...secondRelation
                        }).then((event) => {props.toggleAddEvent(event.data)})
                    }}>save</Button>
                    <Button variant="danger" onClick={() => props.toggleHandleNewEvent(props.event)}>cancel</Button>
                </ButtonToolbar>
            </div>
        </Jumbotron>
    );
};

export default NewEventForm;