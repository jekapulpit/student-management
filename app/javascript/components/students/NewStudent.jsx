import React from 'react';
import { connect } from "react-redux";
import { Button, Card, Accordion } from 'react-bootstrap';
import { handleNewStudent, addStudent } from "../../actions";
import NewStudentForm from "./NewStudentForm";

const NewStudent = props => {
    let createInProcess = (props.createInProcess ? 'Cancel' : 'Add new student');
    return (
        <Card>
            <Card.Header>
                <Accordion.Toggle
                    as={Button}
                    onClick={() => props.toggleHandleNewStudent()}
                    variant="text"
                    eventKey="0">
                    {createInProcess}
                </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
                <Card.Body>
                    <NewStudentForm
                        specs={props.specs}
                        toggleHandleNewStudent={props.toggleHandleNewStudent}
                        toggleCreateStudent={props.toggleCreateStudent}/>
                </Card.Body>
            </Accordion.Collapse>
        </Card>
    );
};

const mapStateToProps = state => ({
    createInProcess: state.students.addingNew,
    specs: state.students.specs
});

const mapDispatchToProps = function(dispatch, ownProps) {
    return {
        toggleHandleNewStudent: () => {
            dispatch(handleNewStudent())
        },
        toggleCreateStudent: (student) => {
            dispatch(addStudent(student))
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(NewStudent);
