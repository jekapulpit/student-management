export default (state = { selectedStudent: {} }, action) => {
    switch (action.type) {
        case 'SELECT_STUDENT':
            let newSelectedStudent = action.student;
            return { ...state, selectedStudent: newSelectedStudent };
        case 'HANDLE_EDIT_STUDENT':
            return { ...state, selectedStudent: { ...state.selectedStudent, editable: !state.selectedStudent.editable } };
        case 'SET_STUDENTS':
            return { ...state, students: action.students };
        case 'ADD_STUDENT':
            let newStudents = state.students.concat(action.student);
            return { ...state, students: newStudents };
        case 'UPDATE_STUDENT':
            let updatedStudents = state.students.map(student => {
                return (student.id === action.student.id ? action.student : student)
            });
            return { ...state, students: updatedStudents };
        case 'DELETE_STUDENT':
            return { ...state, students: state.students.filter((student) => { return action.student.id !== student.id }) };
        default:
            return state;
    }
};
