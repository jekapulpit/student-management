import React from 'react';
import { Button, ButtonToolbar, ButtonGroup, Jumbotron } from 'react-bootstrap';
import { mapFieldsToValues } from "../../services/mapperService";
import EventForm from "./EventForm";
import EventInfo from "./EventInfo";

const Event = props => {
    let eventContent = (props.event.editable ?
        (<EventForm
            currentTab={props.currentTab}
            companies={props.companies}
            students={props.students}
            toggleHandleEditEvent={props.toggleHandleEditEvent}
            toggleUpdateEvent={props.toggleUpdateEvent}
            event={props.event}
        />) :
        (
            <EventInfo event={props.event}
                       currentTab={props.currentTab}
                       toggleHandleEditEvent={props.toggleHandleEditEvent}
                       toggleDeleteEvent={props.toggleDeleteEvent}/>
        ));
    return (
        <Jumbotron style={{ padding: '2rem 2rem' }}>
            {eventContent}
        </Jumbotron>
    );
};

export default Event;