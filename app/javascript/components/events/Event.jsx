import React from 'react';
import { Button, ButtonToolbar, ButtonGroup, Jumbotron } from 'react-bootstrap';
import { updateEvent, deleteEvent } from "../../services/eventsServices";
import { mapFieldsToValues } from "../../services/mapperService";
import EventForm from "./EventForm";

const Event = props => {
    let eventContent = (props.event.editable ?
        (<EventForm
            companies={props.companies}
            toggleHandleEditEvent={props.toggleHandleEditEvent}
            toggleUpdateEvent={props.toggleUpdateEvent}
            event={props.event}
        />) :
        (
            <div>
                <h2>
                    {props.event.attributes.event_type} - {props.event.attributes.company.name}, {props.event.attributes.event_time}
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
        ));
    return (
        <Jumbotron style={{ padding: '2rem 2rem' }}>
            {eventContent}
        </Jumbotron>
    );
};

export default Event;