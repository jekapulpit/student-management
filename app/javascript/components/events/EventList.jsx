import React from 'react';
import { addEvent } from '../../actions'
import { connect } from "react-redux";
import Event from './Event'
import { updateEvent, createEvent } from '../../services/eventsServices';

const EventList = props => {
    let eventList = props.events.map((event) => {
        return(<Event event={event} key={event.id}/>)
    });

    return (
        <div>
            <h1>Events:</h1>
            {eventList}
        </div>
    );
};

const mapStateToProps = state => ({
    selectedStudent: state.students.selectedStudent,
    events: state.students.events,
});

const mapDispatchToProps = function(dispatch, ownProps) {
    return {
        toggleAddEvent: (event) => {
            dispatch(addEvent(event))
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(EventList);