import React from 'react';
import { addStudent, deleteStudent, selectStudent, updateStudent } from '../../actions'
import { connect } from "react-redux";
import { getStudentList } from '../../services/studentsServices';

class StudentList extends React.Component {
  componentDidMount() {
    getStudentList().then(students => this.props.toggleAddStudent(students.data));
  }

  render() {
    console.log(this.props.students);
    return (
        <div>hello world</div>
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
    toggleDeleteStudent: (student) => {
      dispatch(deleteStudent(student))
    },
    toggleSelectStudent: (student) => {
      dispatch(selectStudent(student))
    },
    toggleUpdateStudent: (student) => {
      dispatch(updateStudent(student))
    },
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(StudentList);