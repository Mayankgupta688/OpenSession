import "../styles/commonStyle.css";

export default function WorkingWithClasses() {

    var appData = {
        color: "grey", 
        border: "1px solid red", 
        padding: "5px", 
        margin: "5px"
    };

    return (
        <div>
            <h1>This is First react Styling Application...</h1>
            <h1>This is Another H1 Element</h1>
            <h2>This is my OIther Heaer Component...</h2>
            <h3 style={appData}>This is Inline Style in the Application...</h3>
        </div>
    )
}