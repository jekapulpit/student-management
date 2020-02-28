export default (state = { selectedCompany: {} }, action) => {
    switch (action.type) {
        case 'SELECT_COMPANY':
            let newSelectedCompany = (action.company.id === state.selectedCompany.id ? {} : action.company);
            return {
                ...state,
                addingNew: false,
                addingNewEvent: false,
                selectedCompany: { ...newSelectedCompany, editable: false },
            };
        case 'HANDLE_EDIT_COMPANY':
            return { ...state, selectedCompany: { ...state.selectedCompany, editable: !state.selectedCompany.editable } };
        case 'SET_COMPANIES':
            return { ...state, companies: action.companies };
        case 'ADD_COMPANY':
            let newCompanies = state.companies.concat(action.company);
            return { ...state, companies: newCompanies, selectedCompany: action.company, addingNew: false };
        case 'NEW_COMPANY':
            return { ...state, addingNew: !state.addingNew, selectedCompany: {}, events: [] };
        case 'UPDATE_COMPANY':
            let updatedCompanies = state.companies.map(company => {
                return (company.id === action.company.id ? action.company : company)
            });
            return { ...state, companies: updatedCompanies, selectedCompany: action.company };
        case 'DELETE_COMPANY':
            return { ...state, companies: state.companies.filter((company) => { return action.company.id !== company.id }) };
        default:
            return state;
    }
};
