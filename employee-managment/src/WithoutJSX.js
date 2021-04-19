import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render( 
    React.createElement("div", {}, 
        [
            React.createElement("h1", {}, "Hello World..."),
            React.createElement("h2", {}, "Getting Started..."),
            React.createElement("div", {}, 
                React.createElement("p", {} , React.createElement("h3", {}, "Sample Text...")))
        ])
, document.getElementById("root"));

