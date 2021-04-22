export default function flights(state = [], action) {
    debugger;
    if(action.type === "ADD_Flights") {
        return action.payload;
    } 

    if(action.type === "DELETE_Flights") {
        debugger
        return state.filter((flight) => {
            return flight.id !== action.payload
        })
    }

    return state;
}