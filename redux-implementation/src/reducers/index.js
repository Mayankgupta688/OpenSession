import { combineReducers } from "redux";
import employees from "./employees";
import flights from "./flights";

var rootReducer = combineReducers({
    employees: employees,
    flights: flights
})

export default rootReducer;