import React from 'react';
import { Button, ButtonToolbar, Form } from 'react-bootstrap';
import { updateEvent } from "../../services/eventsServices";
import { mapFieldsToValues } from "../../services/mapperService";

const EventForm = props => {
    let eventAttributes = {};
    let options;
    let relationInput;
    switch (props.currentTab) {
        case 'students':
            options = props.companies.map((company) => {
                return <option key={company.id} value={company.id}>{company.attributes.name}</option>;
            });
            relationInput = <Form.Group controlId="companySelect">
                <Form.Label>Related Company</Form.Label>
                <Form.Control
                    defaultValue={props.event.attributes.company.id}
                    ref={input => eventAttributes.company_id = input}
                    as="select">
                    {options}
                </Form.Control>
            </Form.Group>;
            break;
        case 'companies':
            options = props.students.map((student) => {
                return <option key={student.id}
                               value={student.id}>{student.attributes.profile.first_name} {student.attributes.profile.last_name}</option>;
            });
            relationInput = <Form.Group controlId="studentSelect">
                <Form.Label>Related Student</Form.Label>
                <Form.Control
                    defaultValue={props.event.attributes.user.id}
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
        <div>
            {relationInput}
            <Form.Group controlId="eventTypeSelect">
                <Form.Label>Event Type</Form.Label>
                <Form.Control
                    defaultValue={props.event.attributes.event_type}
                    ref={input => eventAttributes.event_type = input}
                    as="select">
                    <option value="interview">interview</option>
                    <option value="discussion">discussion</option>
                </Form.Control>
            </Form.Group>
            <Form.Group controlId="eventDate">
                <Form.Label>Event Date</Form.Label>
                <Form.Control
                    ref={input => eventAttributes.event_time = input}
                    defaultValue={props.event.attributes.event_time} />
            </Form.Group>
            <Form.Group controlId="resultsInput">
                <Form.Label>Description or results</Form.Label>
                <Form.Control
                    ref={input => eventAttributes.description = input}
                    defaultValue={props.event.attributes.description} />
            </Form.Group>
            <ButtonToolbar>
                <Button variant="success" onClick={() => {
                    updateEvent({
                        ...mapFieldsToValues(eventAttributes),
                        id: props.event.id
                    }).then((event) => {props.toggleUpdateEvent(event.data)})
                }}>save</Button>
                <Button variant="danger" onClick={() => props.toggleHandleEditEvent(props.event)}>cancel</Button>
            </ButtonToolbar>
        </div>
    );
};

export default EventForm;