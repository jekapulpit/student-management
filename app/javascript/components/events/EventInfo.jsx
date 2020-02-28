import React from 'react';
import {Button, ButtonToolbar, Form} from 'react-bootstrap';
import { updateEvent, deleteEvent } from "../../services/eventsServices";

const EventInfo = props => {
    let displayName;
    switch (props.currentTab) {
        case 'students':
            displayName = props.event.attributes.company.name;
            break;
        case 'companies':
            displayName = `${props.event.attributes.profile.first_name} ${props.event.attributes.profile.last_name}`;
            break;
        default:
            displayName = null;
    }
    return (
        <div>
            <h2>
                {props.event.attributes.event_type} - {displayName}, {props.event.attributes.event_time}
            </h2>
            <p>{props.event.attributes.description}</p>
            <ButtonToolbar className="justify-content-between">
                <Button variant="secondary" onClick={() => props.toggleHandleEditEvent(props.event)}>edit</Button>
                <Button variant="danger" onClick={() => {
                    deleteEvent(props.event.id).then((success) => {
                        if(success)
                            props.toggleDeleteEvent(props.event)
                    })
                }}>remove</Button>
            </ButtonToolbar>
        </div>
    );
};

export default EventInfo;