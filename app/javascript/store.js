import studentsReducer from "./reducers/studentsReducer";
import tabsReducer from "./reducers/tabsReducer";
import companiesReducer from "./reducers/companiesReducer";
import eventsReducer from "./reducers/eventsReducer";
import { createStore, combineReducers } from "redux"; // импорт из Redux-библиотеки
import initialState from './initialState';

export default createStore(
    combineReducers({
        students: studentsReducer,
        tabs: tabsReducer,
        companies: companiesReducer,
        events: eventsReducer
    }),
    initialState);
