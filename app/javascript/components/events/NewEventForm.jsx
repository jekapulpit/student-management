import React from 'react';
import {Button, ButtonToolbar, Form, Jumbotron} from 'react-bootstrap';
import { createEvent } from "../../services/eventsServices";
import { mapFieldsToValues } from "../../services/mapperService";

const NewEventForm = props => {
    let eventAttributes = {};
    let companyOptions = props.companies.map((company) => {
        return <option key={company.id} value={company.id}>{company.attributes.name}</option>;
    });

    return (
        <Jumbotron style={{ padding: '2rem 2rem' }}>
            <div>
                <Form.Group controlId="companySelect">
                    <Form.Label>Related Company</Form.Label>
                    <Form.Control
                        ref={input => eventAttributes.company_id = input}
                        as="select">
                        {companyOptions}
                    </Form.Control>
                </Form.Group>
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
                            user_id: props.selectedStudent.id
                        }).then((event) => {props.toggleAddEvent(event.data)})
                    }}>save</Button>
                    <Button variant="danger" onClick={() => props.toggleHandleNewEvent(props.event)}>cancel</Button>
                </ButtonToolbar>
            </div>
        </Jumbotron>
    );
};

export default NewEventForm;