export default function employees(state = [], action) {
    debugger;
    if(action.type === "ADD_EMPLOYEE") {
        return action.payload;
    } 

    if(action.type === "DELETE_EMPLOYEE") {
        debugger
        return state.filter((employees) => {
            return employees.id !== action.payload
        })
    }

    return state;
}