import React, { useState, useEffect } from 'react';
import { addEvent } from '../../actions'
import { connect } from "react-redux";
import Event from './Event'
import {Button} from 'react-bootstrap';
import { handleEditEvent, updateEvent, handleNewEvent } from '../../actions'
import { createEvent } from '../../services/eventsServices';
import NewEventForm from "./NewEventForm";

const EventList = props => {
    const [addingNewEvent, handleNewEvent] = useState(false);

    let eventList = props.events.map((event) => {
        return(<Event
            companies={props.companies}
            toggleHandleEditEvent={props.toggleHandleEditEvent}
            toggleUpdateEvent={props.toggleUpdateEvent}
            event={event}
            key={event.id}/>)
    });

    let newEventForm = props.addingNewEvent ? (
        <NewEventForm
            companies={props.companies}
            toggleHandleNewEvent={props.toggleHandleNewEvent}
            toggleAddEvent={props.toggleAddEvent}
            selectedStudent={props.selectedStudent}
            key={0}
        />
    ) : (null);

    let title = (props.selectedStudent.attributes ?
        <h1>
            Events for {props.selectedStudent.attributes.profile.first_name} {props.selectedStudent.attributes.profile.last_name}
            <Button onClick={() => { props.toggleHandleNewEvent() }} variant="link">{props.addingNewEvent ? 'cancel' : 'add'}</Button>
        </h1> :
            (<h1>Select a student</h1>)
    );

    return (
        <div>
            {title}
            {newEventForm}
            {eventList}
        </div>
    );
};

const mapStateToProps = state => ({
    selectedStudent: state.students.selectedStudent,
    events: state.students.events,
    addingNewEvent: state.students.addingNewEvent,
    companies: state.companies.companies
});

const mapDispatchToProps = function(dispatch, ownProps) {
    return {
        toggleAddEvent: (event) => {
            dispatch(addEvent(event))
        },
        toggleHandleEditEvent: (event) => {
            dispatch(handleEditEvent(event))
        },
        toggleUpdateEvent: (event) => {
            dispatch(updateEvent(event))
        },
        toggleHandleNewEvent: () => {
            dispatch(handleNewEvent())
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(EventList);