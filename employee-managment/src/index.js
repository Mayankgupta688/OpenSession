import React from "react";
import ReactDOM from "react-dom";

 function HeaderComponent() {
     return (
         <div>
             <h1>This is my React Header Application</h1><hr/>
         </div>
     )
 }

function FooterComponent() {
    return (
        <div>
            <h2>About TechnoFunnel - Training Company</h2><hr/>
        </div>
    )
}

function ContentComponent() {
    return (
        <div>
            <h3>React Training</h3><hr/>
        </div>
    )
}

function SubContentComponent() {
    return (
        <div>
            <h3>This is The Fiirst Session...</h3><hr/>
        </div>
    )
}

ReactDOM.render((
    <div>
        <HeaderComponent></HeaderComponent>
        <ContentComponent></ContentComponent>
        <SubContentComponent></SubContentComponent>
        <FooterComponent></FooterComponent>
    </div>
), document.getElementById("root"));