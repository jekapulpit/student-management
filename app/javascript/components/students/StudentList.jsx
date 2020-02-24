import React from 'react';
import { addStudent, deleteStudent, selectStudent, updateStudent, setStudents } from '../../actions'
import { connect } from "react-redux";
import { getStudentList } from '../../services/studentsServices';
import { Container, Row, Button, Accordion, Card } from 'react-bootstrap';
import Student from "./Student";

class StudentList extends React.Component {
  componentDidMount() {
    getStudentList().then(students => this.props.toggleSetStudents(students.data));
  }

  render() {
    let studentList = this.props.students.map((student) => {
      return(<Student student={student} key={student.id}/>)
    });

    return (
        <Accordion>
          {studentList}
        </Accordion>
    );
  }
}

const mapStateToProps = state => ({
  selectedStudent: state.students.selectedStudent,
  students: state.students.students,
});

const mapDispatchToProps = function(dispatch, ownProps) {
  return {
    toggleAddStudent: (student) => {
      dispatch(addStudent(student))
    },
    toggleSetStudents: (students) => {
      dispatch(setStudents(students))
    },
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(StudentList);