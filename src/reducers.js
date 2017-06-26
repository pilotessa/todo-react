import {combineReducers} from "redux";
import todoReducer from "./reducers-and-actions/todo/todoReducer";

const rootReducer = combineReducers({
    todo: todoReducer
});

export default rootReducer;
