import React from "react"

export default class WorkingWithEventState extends React.Component {
    constructor() {
        super();
        this.state = {
            userName: "Mayank Gupta"
        }
    }

    clickButtonFunction = () => {
        this.setState({
            userName: "Anshul Gupta"
        })
    }

    render() {
        return (
            <div>
                <h1>The User Name is {this.state.userName}</h1>
                <DisplayData userName={this.state.userName}></DisplayData> 
                <input type="button" value="Click to Update" onClick={this.clickButtonFunction} />
            </div>
        )
    }
}

function DisplayData(props) {
    return <h1>The Data is Displayed for {props.userName}</h1>
}