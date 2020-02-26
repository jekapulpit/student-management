import React from 'react';
import { connect } from "react-redux";
import { getCompanyList, getEventList, createEvent, deleteEvent, updateEvent } from '../../services/eventsServices';
import { Container, Row, Button, Accordion, Card } from 'react-bootstrap';

const StudentView = props => {
    console.log(props.events);
    return (
        <div>
            hello
        </div>
    );
};

const mapStateToProps = state => ({
    selectedStudent: state.students.selectedStudent,
    events: state.students.events
});

export default connect(mapStateToProps, null)(StudentView);