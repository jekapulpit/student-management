export default (state = { selectedCompany: {} }, action) => {
    switch (action.type) {
        case 'SET_COMPANIES':
            return { ...state, companies: action.companies };
        default:
            return state;
    }
};
