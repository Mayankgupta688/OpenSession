import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppComponent from "./components/AppComponent";
import EmployeeCount from "./components/EmployeeCount";
import { createStore } from "redux";

import rootReducer from "./reducers/index";
var applicationStore = createStore(rootReducer);

ReactDOM.render((
    <Provider store={applicationStore}>
        <EmployeeCount></EmployeeCount>
        <AppComponent></AppComponent>
    </Provider>
), document.getElementById("root"))