export default (state = { selectedStudent: {} }, action) => {
    switch (action.type) {
        case 'SELECT_STUDENT':
            let newSelectedStudent = (action.student.id === state.selectedStudent.id ? {} : action.student);
            let eventList = (newSelectedStudent.attributes ? newSelectedStudent.attributes.events : []);
            return { ...state, addingNew: false, selectedStudent: { ...newSelectedStudent, editable: false }, events: eventList };
        case 'HANDLE_EDIT_STUDENT':
            return { ...state, selectedStudent: { ...state.selectedStudent, editable: !state.selectedStudent.editable } };
        case 'SET_STUDENTS':
            return { ...state, students: action.students };
        case 'SET_SPECS':
            return { ...state, specs: action.specs };
        case 'ADD_STUDENT':
            let newStudents = state.students.concat(action.student);
            return { ...state, students: newStudents, selectedStudent: action.student, addingNew: false };
        case 'NEW_STUDENT':
            return { ...state, addingNew: !state.addingNew, selectedStudent: {}, events: [] };
        case 'UPDATE_STUDENT':
            let updatedStudents = state.students.map(student => {
                return (student.id === action.student.id ? action.student : student)
            });
            return { ...state, students: updatedStudents, selectedStudent: action.student };
        case 'DELETE_STUDENT':
            return { ...state, students: state.students.filter((student) => { return action.student.id !== student.id }) };
        case 'HANDLE_EDIT_EVENT':
            let events = state.events.map(event => {
                if(event.id === action.event.id)
                    return { ...event, editable: !event.editable };
                return event
            });
            return { ...state, events: events };
        case 'ADD_EVENT':
            let newEvents = state.events.concat(action.event);
            return { ...state, events: newEvents };
        case 'NEW_EVENT':
            return { ...state, addingNew: !state.addingNew };
        case 'UPDATE_EVENT':
            let updatedEvents = state.events.map(event => {
                return (event.id === action.event.id ? action.event : event)
            });
            return { ...state, events: updatedEvents };
        case 'DELETE_EVENT':
            return { ...state, events: state.events.filter((event) => { return action.event.id !== event.id }) };
        default:
            return state;
    }
};
