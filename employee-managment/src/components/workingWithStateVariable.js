import React from "react";

export default class WorkingWithStateVariable extends React.Component {
    
    constructor() {
        super();
        this.state = {
            timeDisplay: `${new Date().getHours()} : ${new Date().getMinutes()}: ${new Date().getSeconds()}`,
            counter: 0
        }

        setInterval(() => {
            this.setState({
                timeDisplay: `${new Date().getHours()} : ${new Date().getMinutes()}: ${new Date().getSeconds()}`,
                counter: this.state.counter + 1
            })
        }, 1000)
    }
    
    render() {
        return (
            <div>
                <h1>The Current Time: {this.state.timeDisplay}</h1>
                <DisplayCounter counter={this.state.counter} timeDisplay={this.state.timeDisplay}></DisplayCounter>
            </div>
        )
    }
}

function DisplayCounter(props) {
    return <h2>The Current Counter is: {props.counter}</h2>
}


function DisplayCounterOne(props) {
    return <h2>The Current Counter is: {props.counter}</h2>
}