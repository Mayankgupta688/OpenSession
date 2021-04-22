import React, { useState, useEffect } from "react";
import Axios from "axios";

export default function WorkingWithHooksEmployees() {

    var [employeeList, setEmployeeList] = useState([]);

    useEffect(() => {
        debugger;
        Axios.get("https://5c055de56b84ee00137d25a0.mockapi.io/api/v1/employees").then((response) => {
            setEmployeeList(response.data)
        })
    }, [])

    function deleteCustomer(event) {
        var userToDelete = event.target.id;
        Axios.delete("https://5c055de56b84ee00137d25a0.mockapi.io/api/v1/employees/" + userToDelete).then((res) => {
            if(res.status === 200) {
                var deletedData = employeeList.filter((employee) => {
                    return employee.id !== userToDelete;
                })

                this.setState({
                    employees: deletedData
                })
            }
        })
    }

    return (
        <div>
            <h1>The List of Employees is Given Below:</h1><hr/>
            {employeeList.map((employee) => {
                return (
                    <RenderUser deleteCustomer={deleteCustomer}  employee={employee}></RenderUser>
                )
            })}
        </div>
    )
}


function RenderUser(props) {
    return (
        <div>
            <h1>User name is {props.employee.name}</h1>
            <h2>Employee Id is: {props.employee.id}</h2>
            <h3>Employee Created On: {props.employee.createdAt}</h3>
            <h3>Employee Avatar is: {props.employee.avatar}</h3>
            <input type="button" id={props.employee.id} value={`Delete ${props.employee.name}`} onClick={props.deleteCustomer}  />
            <hr/>
        </div>
    )
}