import React from "react";
import Axios from "axios";
import { connect } from "react-redux";

import * as actions from "../actions/employees"

class AppComponent extends React.Component {

    componentDidMount() {
        debugger;
        Axios.get("https://5c055de56b84ee00137d25a0.mockapi.io/api/v1/employees").then((response) => {
            this.props.addEmployeeData(response.data)
        })
    }

    deleteEmployee = (event) => {
        this.props.deleteEmployeeData(event.target.id);
    }

    render() {
        debugger;
        return (
            <div>
                <h1>Employee List is Given Below:</h1><hr/>
                {this.props.employees.map((employee) => {
                    return (
                        <div>
                            <h1>Employee Name is: {employee.name}</h1>
                            <input type="button" id={employee.id} value={`Delete ${employee.name}`} onClick={this.deleteEmployee} />
                            <hr/>
                        </div>
                    )
                })}
            </div>
        )
    }
}

function mapStateToProps(store) {
    return ({
        employees: store.employees
    })
}

export default connect(mapStateToProps, actions)(AppComponent)


