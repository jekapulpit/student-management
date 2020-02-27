import React from 'react';
import { connect } from "react-redux";
import { getCompanyList, getEventList, createEvent, deleteEvent, updateEvent } from '../../services/eventsServices';
import { Container, Row, Button, Accordion, Card } from 'react-bootstrap';
import EventList from "../events/EventList";

const StudentView = props => {
    return (
        <EventList />
    );
};

const mapStateToProps = state => ({
    selectedStudent: state.students.selectedStudent,
    events: state.students.events
});

export default connect(mapStateToProps, null)(StudentView);