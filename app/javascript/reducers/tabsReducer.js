export default (state = { currentTab: 'students' }, action) => {
    switch (action.type) {
        case 'SET_TAB':
            return { ...state, currentTab: action.newTab };
        default:
            return state;
    }
};
