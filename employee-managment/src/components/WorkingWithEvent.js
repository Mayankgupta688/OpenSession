export default function WorkingWithEvent() {

    function inputFocussed() {
        alert("User Entered inside the Text Content")
    }

    function buttonClicked(event) {
        debugger;
        alert("User Clicked the Button in the Application.... " + event.target.id + " " + event.target.value)
        event.target.value= "Button Clicked";
        event.target.className= "asjgfdlasjgdl";
    }

    return (
        <div>
            <h1 style={{border: "1px solid red", padding: "5px"}}>This is my Sample Header Event....</h1>

            <input type="button" id="button_1" value="Click Button 1" onClick={buttonClicked} /><br/><br/>
            <input type="button" id="button_2" value="Click Button 2" onClick={buttonClicked} /><br/><br/>
            <input type="button" id="button_3" value="Click Button 3" onClick={buttonClicked} /><br/><br/>
            <input type="button" id="button_4" value="Click Button 4" onClick={buttonClicked} /><br/><br/>
            <input type="button" id="button_5" value="Click Button 5" onClick={buttonClicked} /><br/><br/>

            <input type="text" onChange={inputFocussed} />
        </div>
    )
}