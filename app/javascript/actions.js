//students
export const addStudent = student => ({
    type: 'ADD_STUDENT',
    student: student
});

export const handleNewStudent = () => ({
    type: 'NEW_STUDENT',
});

export const updateStudent = student => ({
    type: 'UPDATE_STUDENT',
    student: student
});

export const selectStudent = student => ({
    type: 'SELECT_STUDENT',
    student: student
});

export const deleteStudent = student => ({
    type: 'DELETE_STUDENT',
    student: student
});

export const setStudents = students => ({
    type: 'SET_STUDENTS',
    students: students
});

export const setSpecs = specs => ({
    type: 'SET_SPECS',
    specs: specs
});

export const handleEditStudent = () => ({
    type: 'HANDLE_EDIT_STUDENT',
});
//students

//tabs
export const setTab = tab => ({
    type: 'SET_TAB',
    newTab: tab
});
//tabs

//events
export const setEvents = events => ({
    type: 'SET_EVENTS',
    events: events
});

export const addEvent = event => ({
    type: 'ADD_EVENT',
    event: event
});

export const handleNewEvent = () => ({
    type: 'NEW_EVENT',
});

export const updateEvent = event => ({
    type: 'UPDATE_EVENT',
    event: event
});

export const deleteEvent = event => ({
    type: 'DELETE_EVENT',
    event: event
});

export const handleEditEvent = (event) => ({
    type: 'HANDLE_EDIT_EVENT',
    event: event
});
//events

//companies
export const setCompanies = companies => ({
    type: 'SET_COMPANIES',
    companies: companies
});
//companies