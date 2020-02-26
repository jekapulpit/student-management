import React from 'react';
import { connect } from "react-redux";
import {Nav, Navbar, Form, FormControl, Button, Card, Accordion} from 'react-bootstrap';
import {deleteStudent, handleEditStudent, selectStudent, updateStudent} from "../../actions";
import StudentInfo from "./StudentInfo";
import StudentForm from "./StudentForm";

const Student = props => {
    let studentDisplayName = `${props.student.attributes.profile.first_name} ${props.student.attributes.profile.last_name}, ${props.student.attributes.spec.name}`;
    let editable = (props.selectedStudent.id === props.student.id && props.selectedStudent.editable);
    let selected = (props.selectedStudent.id === props.student.id ? 'close' : 'open');
    let fullInformation = (editable ? <StudentForm
        specs={props.specs}
        student={props.student}
        toggleHandleEditStudent={props.toggleHandleEditStudent}
        toggleUpdateStudent={props.toggleUpdateStudent}/> : <StudentInfo
        toggleDeleteStudent={props.toggleDeleteStudent}
        student={props.student}
        toggleHandleEditStudent={props.toggleHandleEditStudent}/>);
    return (
        <Card>
            <Card.Header>
                <Accordion.Toggle
                    onClick={() => props.toggleSelectStudent(props.student)}
                    as={Button}
                    variant="text"
                    eventKey={props.student.id}>
                    {studentDisplayName}
                </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey={props.student.id}>
                <Card.Body>
                    {fullInformation}
                </Card.Body>
            </Accordion.Collapse>
        </Card>
    );
};

const mapStateToProps = state => ({
    selectedStudent: state.students.selectedStudent,
    specs: state.students.specs
});

const mapDispatchToProps = function(dispatch, ownProps) {
    return {
        toggleHandleEditStudent: () => {
            dispatch(handleEditStudent())
        },
        toggleSelectStudent: (student) => {
            dispatch(selectStudent(student))
        },
        toggleDeleteStudent: (student) => {
            dispatch(deleteStudent(student))
        },
        toggleUpdateStudent: (student) => {
            dispatch(updateStudent(student))
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Student);
