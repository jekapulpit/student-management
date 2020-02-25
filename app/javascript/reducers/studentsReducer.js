export default (state = { selectedStudent: {} }, action) => {
    switch (action.type) {
        case 'SELECT_STUDENT':
            let newSelectedStudent = (action.student.id === state.selectedStudent.id ? {} : action.student);
            return { ...state, selectedStudent: { ...newSelectedStudent, editable: false } };
        case 'HANDLE_EDIT_STUDENT':
            return { ...state, selectedStudent: { ...state.selectedStudent, editable: !state.selectedStudent.editable } };
        case 'SET_STUDENTS':
            return { ...state, students: action.students };
        case 'SET_SPECS':
            return { ...state, specs: action.specs };
        case 'ADD_STUDENT':
            let newStudents = state.students.concat(action.student);
            return { ...state, students: newStudents };
        case 'UPDATE_STUDENT':
            let updatedStudents = state.students.map(student => {
                return (student.id === action.student.id ? action.student : student)
            });
            return { ...state, students: updatedStudents, selectedStudent: action.student };
        case 'DELETE_STUDENT':
            return { ...state, students: state.students.filter((student) => { return action.student.id !== student.id }) };
        default:
            return state;
    }
};
