export function addEmployeeData(employeeList) {
    return {
        type: "ADD_EMPLOYEE",
        payload: employeeList
    }
}


export function deleteEmployeeData(employeeId) {
    debugger;
    return {
        type: "DELETE_EMPLOYEE",
        payload: employeeId
    }
}


export function updateEmployeeData(updatedData) {
    return {
        type: "UPDATE_EMPLOYEE",
        payload: updatedData
    }
}