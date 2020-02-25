import React from 'react';
import { addStudent, setSpecs, setStudents } from '../../actions'
import { connect } from "react-redux";
import { getStudentList, getSpecList } from '../../services/studentsServices';
import { Container, Row, Button, Accordion, Card } from 'react-bootstrap';
import Student from "./Student";
import NewStudent from "./NewStudent";

class StudentList extends React.Component {
  componentDidMount() {
    getStudentList().then(students => this.props.toggleSetStudents(students.data));
    getSpecList().then(specs => this.props.toggleSetSpecs(specs.data));
  }

  render() {
    let studentList = this.props.students.map((student) => {
      return(<Student student={student} key={student.id}/>)
    });

    let activeKey = (this.props.createInProcess ? "0" : this.props.selectedStudent.id);

    return (
        <Accordion activeKey={activeKey}>
          <NewStudent />
          {studentList}
        </Accordion>
    );
  }
}

const mapStateToProps = state => ({
  selectedStudent: state.students.selectedStudent,
  students: state.students.students,
  createInProcess: state.students.addingNew,
});

const mapDispatchToProps = function(dispatch, ownProps) {
  return {
    toggleAddStudent: (student) => {
      dispatch(addStudent(student))
    },
    toggleSetStudents: (students) => {
      dispatch(setStudents(students))
    },
    toggleSetSpecs: (specs) => {
      dispatch(setSpecs(specs))
    },
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(StudentList);