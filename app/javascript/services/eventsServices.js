export async function getEventList(userId) {
    return fetch(`/api/v1/events`, {
        headers: {
            'Content-Type': 'application/json',
        },
    }).then((response) => { return response.json() })
}

export async function updateEvent(eventAttributes) {
    return fetch(`/api/v1/events/${eventAttributes.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(eventAttributes)
    }).then((response) => {
        return response.json()
    })
}

export async function createEvent(eventAttributes) {
    return fetch('/api/v1/events/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(eventAttributes)
    }).then((response) => {
        return response.json()
    })
}

export async function deleteEvent(eventId) {
    return fetch(`/api/v1/events/${eventId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    }).then((response) => {
        return response.json()
    })
}
