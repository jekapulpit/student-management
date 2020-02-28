export async function getCompanyList() {
    return fetch('/api/v1/companies', {
        headers: {
            'Content-Type': 'application/json',
        },
    }).then((response) => { return response.json() })
}

export async function updateCompany(companyAttributes) {
    return fetch(`/api/v1/companies/${companyAttributes.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(companyAttributes)
    }).then((response) => {
        return response.json()
    })
}

export async function createCompany(companyAttributes) {
    return fetch('/api/v1/companines/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(companyAttributes)
    }).then((response) => {
        return response.json()
    })
}

export async function deleteCompany(companyId) {
    return fetch(`/api/v1/companies/${companyId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    }).then((response) => {
        return response.json()
    })
}
