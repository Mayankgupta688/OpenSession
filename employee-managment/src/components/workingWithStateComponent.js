import React from "react";
import Axios from "axios";

export default class WorkingWithStateComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            employees: [],
            age: 0
        }

        setTimeout(() => {
            
            fetch("http://localhost:4000/employees").then((response) => {
                response.json().then((res) => {
                    this.setState({
                        employees: res
                    })
                });
            });

            Axios.get("http://localhost:4000/employees").then((response) => {
                this.setState({
                    employees: response.data
                });
            });
        }, 1000)
    }

    deleteCustomer = (event) => {
        var userToDelete = event.target.id;
        Axios.delete("http://localhost:4000/employees/" + userToDelete).then((res) => {
            if(res.status === 200) {
                var deletedData = this.state.employees.filter((employee) => {
                    return employee.id !== userToDelete;
                })

                this.setState({
                    employees: deletedData
                })
            }
        })
    }

    shouldComponentUpdate(nextProps, nextState) {
        if(nextState.age > 18 && nextState.employees.length > 0) {
            return true
        }

        return false;
     }

    render() {
        return (
            <div>
                <h1>The List of Employees is Given Below:</h1><hr/>
                {this.state.employees.map((employee) => {
                    return (
                        <RenderUser deleteCustomer={this.deleteCustomer} employee={employee}></RenderUser>
                    )
                })}
            </div>
        )
    }
}

function RenderUser(props) {
    debugger;
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