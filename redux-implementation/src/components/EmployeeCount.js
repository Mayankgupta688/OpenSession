import React from "react";
import { connect } from "react-redux";


function EmployeeCount(props) {
    debugger;
    return (<div><h1>Employee Count: {props.employees.length}</h1><hr/></div>)
}

function mapStateToProps(store) {
    return ({
        employees: store.employees,
        flight: store.flights
    })
}

export default connect(mapStateToProps, null)(EmployeeCount)