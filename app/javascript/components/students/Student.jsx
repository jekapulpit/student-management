import React from 'react';
import { connect } from "react-redux";
import {Nav, Navbar, Form, FormControl, Button, Card, Accordion} from 'react-bootstrap';
import {deleteStudent, handleEditStudent, selectStudent, updateStudent} from "../../actions";

const Student = props => {
    let studentDisplayName = `${props.student.attributes.profile.first_name} ${props.student.attributes.profile.last_name}, ${props.student.attributes.spec.name}`;
    let editable = (props.selectedStudent.id === props.student.id && props.selectedStudent.editable);
    return (
        <Card>
            <Card.Header>
                {studentDisplayName}
                <Accordion.Toggle onClick={() => props.toggleSelectStudent(props.student)} as={Button} variant="text" eventKey={props.student.id}>
                    open
                </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey={props.student.id}>
                <Card.Body>
                    {editable ? 'this one is editable' : 'haaaah'}
                    <Button onClick={() => props.toggleHandleEditStudent()}>aga</Button>
                </Card.Body>
            </Accordion.Collapse>
        </Card>
    );
};

const mapStateToProps = state => ({
    selectedStudent: state.students.selectedStudent
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
