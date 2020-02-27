import React from 'react';
import { addEvent } from '../../actions'
import { connect } from "react-redux";
import Event from './Event'
import { handleEditEvent, updateEvent } from '../../actions'
import { createEvent } from '../../services/eventsServices';

const EventList = props => {
    let eventList = props.events.map((event) => {
        return(<Event
            companies={props.companies}
            toggleHandleEditEvent={props.toggleHandleEditEvent}
            toggleUpdateEvent={props.toggleUpdateEvent}
            event={event}
            key={event.id}/>)
    });

    let title = (props.selectedStudent.attributes ?
        <h1>Events for {props.selectedStudent.attributes.profile.first_name} {props.selectedStudent.attributes.profile.last_name}</h1> :
            (<h1>Select a student</h1>)
    );

    return (
        <div>
            {title}
            {eventList}
        </div>
    );
};

const mapStateToProps = state => ({
    selectedStudent: state.students.selectedStudent,
    events: state.students.events,
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
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(EventList);