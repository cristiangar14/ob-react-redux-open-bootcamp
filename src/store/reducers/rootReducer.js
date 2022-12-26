import { combineReducers } from "redux";
import { filterReducer } from "./filterReducer";
import { todosReducer } from "./todosReducer";
import { userReducer } from "./userReducer";

export const rootReducer = combineReducers({
    //state : reucer that will control it
    todosState: todosReducer,
    filterState: filterReducer,
    //ASYN Example (login user)
    userState: userReducer
    // ... add more sattes nand reducers to include them in the store
})