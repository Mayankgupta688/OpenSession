import React from "react";

export default class ForceUpdateComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            userName: "Mayank",
            counter: 0
        }

        setInterval(() => {
            this.setState({
                counter: this.state.counter + 1
            })
        }, 1000)
    }

    updateUserName = () => {
        debugger
        this.setState({
            userName: "Anshul"
        })
    }

    getUserName = () => {
        alert(this.state.userName)
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextState.counter % 3 === 0;
    }

    render() {
        debugger;
        return (
            <div>
                <h1>This is the Application for {this.state.userName}</h1>
                <h2>The Counter Value is {this.state.counter}</h2>
                <input type="button" value="Update Name" onClick={this.updateUserName} />
                <input type="button" value="Get Name" onClick={this.getUserName} /><hr/>
                <ShowCounter counter={this.state.counter} ></ShowCounter>
            </div>
        )
    }
}

function ShowCounter(props) {
    return <h3>The Counter Value is {props.counter}</h3>
}