import React from 'react';
import { addStudent, setSpecs, setStudents, setCompanies } from '../../actions'
import { connect } from "react-redux";
import { getStudentList, getSpecList } from '../../services/studentsServices';
import { getCompanyList } from '../../services/eventsServices';
import { Container, Row, Button, Accordion, Card } from 'react-bootstrap';
import Student from "./Student";
import NewStudent from "./NewStudent";

class StudentList extends React.Component {
  componentDidMount() {
    getStudentList().then(students => this.props.toggleSetStudents(students.data));
    getSpecList().then(specs => this.props.toggleSetSpecs(specs.data));
    getCompanyList().then(companies => this.props.toggleSetCompanies(companies.data));
  }

  render() {
    let studentList = this.props.students.map((student) => {
      return(<Student student={student} key={student.id}/>)
    });

    let activeKey = (this.props.createInProcess ? "0" : this.props.selectedStudent.id);

    return (
        <Accordion style={{
          overflowY: 'scroll',
          height: '90%'
        }} activeKey={activeKey}>
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
    toggleSetCompanies: (companies) => {
      dispatch(setCompanies(companies))
    },
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(StudentList);