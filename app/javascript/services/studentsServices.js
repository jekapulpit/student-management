export async function getStudentList() {
    return fetch('/api/v1/students', {
        headers: {
            'Content-Type': 'application/json',
        },
    }).then((response) => { return response.json() })
}

export async function getSpecList() {
    return fetch('/api/v1/specs', {
        headers: {
            'Content-Type': 'application/json',
        },
    }).then((response) => { return response.json() })
}

export async function updateStudent(studentAttributes) {
    return fetch(`/api/v1/students/${studentAttributes.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(studentAttributes)
    }).then((response) => {
        return response.json()
    })
}
