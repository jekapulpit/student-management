import studentsReducer from "./reducers/studentsReducer";
import { createStore, combineReducers } from "redux"; // импорт из Redux-библиотеки
import initialState from './initialState';

export default createStore(
    combineReducers({
        students: studentsReducer,
    }),
    initialState);
