import React from "react";
import ReactDOM from "react-dom";

import WorkingWithProps from "./components/workingWithProps";

ReactDOM.render((
    <div>
        <WorkingWithProps userName="Mayank" userAge="20"></WorkingWithProps>
        <WorkingWithProps userName="Ankit" userAge="30"></WorkingWithProps>
        <WorkingWithProps userName="Anshul" userAge="40"></WorkingWithProps>
        <WorkingWithProps userName="Aniket" userAge="50"></WorkingWithProps>
        <WorkingWithProps userName="TechnoFunnel" userAge="60"></WorkingWithProps>
    </div>
), document.getElementById("root"));