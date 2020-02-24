export const addStudent = student => ({
    type: 'ADD_STUDENT',
    student: student
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

export const setStudent = students => ({
    type: 'SET_STUDENTS',
    students: students
});