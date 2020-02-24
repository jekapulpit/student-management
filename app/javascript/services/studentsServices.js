export async function getStudentList() {
    return fetch('/api/v1/students', {
        headers: {
            'Content-Type': 'application/json',
        },
    }).then((response) => { return response.json() })
}
