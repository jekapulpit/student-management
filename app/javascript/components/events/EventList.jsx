import React, { useState, useEffect } from 'react';
import { addEvent } from '../../actions'
import { connect } from "react-redux";
import Event from './Event'
import {Button} from 'react-bootstrap';
import { handleEditEvent, updateEvent, handleNewEvent, deleteEvent } from '../../actions'
import { createEvent } from '../../services/eventsServices';
import NewEventForm from "./NewEventForm";

const EventList = props => {
    let eventList = props.events.map((event) => {
        return(<Event
            currentTab={props.currentTab}
            students={props.students}
            companies={props.companies}
            toggleDeleteEvent={props.toggleDeleteEvent}
            toggleHandleEditEvent={props.toggleHandleEditEvent}
            toggleUpdateEvent={props.toggleUpdateEvent}
            event={event}
            key={event.id}/>)
    });

    let newEventForm = props.addingNewEvent ? (
        <NewEventForm
            currentTab={props.currentTab}
            companies={props.companies}
            students={props.students}
            toggleHandleNewEvent={props.toggleHandleNewEvent}
            toggleAddEvent={props.toggleAddEvent}
            selectedStudent={props.selectedStudent}
            selectedCompany={props.selectedCompany}
            key={0}
        />
    ) : (null);
    let title;
    switch(props.currentTab) {
        case 'students':
            title = (props.selectedStudent.attributes ?
                    <h1>
                        Events for {props.selectedStudent.attributes.profile.first_name} {props.selectedStudent.attributes.profile.last_name}
                        <Button onClick={() => { props.toggleHandleNewEvent() }} variant="link">{props.addingNewEvent ? 'cancel' : 'add'}</Button>
                    </h1> :
                    (<h1>Select a student</h1>)
            );
            break;
        case 'companies':
            title = (props.selectedCompany.attributes ?
                    <h1>
                        Events for {props.selectedCompany.attributes.name}
                        <Button onClick={() => { props.toggleHandleNewEvent() }} variant="link">{props.addingNewEvent ? 'cancel' : 'add'}</Button>
                    </h1> :
                    (<h1>Select a company</h1>)
            );
            break;
        default: title = <h1>some other tab</h1>;
    }

    return (
        <div>
            {title}
            {newEventForm}
            {eventList}
        </div>
    );
};

const mapStateToProps = state => ({
    currentTab: state.tabs.currentTab,
    selectedStudent: state.students.selectedStudent,
    selectedCompany: state.companies.selectedCompany,
    students: state.students.students,
    events: (state.tabs.currentTab === 'students' ?
        state.events.events.filter((event) => { return event.attributes.user.id == state.students.selectedStudent.id }) :
        state.events.events.filter((event) => { return event.attributes.company.id == state.companies.selectedCompany.id })),
    studentEvents: state.students.events,
    companyEvents: state.companies.events,
    addingNewEvent: state.events.addingNewEvent,
    companies: state.companies.companies
});

const mapDispatchToProps = function(dispatch, ownProps) {
    return {
        toggleAddEvent: (event) => {
            dispatch(addEvent(event))
        },
        toggleDeleteEvent: (event) => {
            dispatch(deleteEvent(event))
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