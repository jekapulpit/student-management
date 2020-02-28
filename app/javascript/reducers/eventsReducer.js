export default (state = { events: [] }, action) => {
    switch (action.type) {
        case 'SET_EVENTS':
            return { ...state, events: action.events };
        case 'HANDLE_EDIT_EVENT':
            let events = state.events.map(event => {
                if(event.id === action.event.id)
                    return { ...event, editable: !event.editable };
                return event
            });
            return { ...state, events: events };
        case 'ADD_EVENT':
            let newEvents = state.events.concat(action.event);
            return { ...state, events: newEvents, addingNewEvent: false };
        case 'NEW_EVENT':
            return { ...state, addingNewEvent: !state.addingNewEvent };
        case 'CANCEL_NEW_EVENT':
            return { ...state, addingNewEvent: false };
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
