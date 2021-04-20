export default function WorkingWithArrays() {
    var userData = [{
        userName: "Anshul",
        userAge: 10
    }, {
        userName: "Mayank Gupta",
        userAge: 50
    }, {
        userName: "Meha",
        userAge: 25
    }, {
        userName: "Aniket",
        userAge: 180
    }]

    debugger;

    var filteredData = userData.sort((a, b) => {
        return b.userAge - a.userAge
    })

    function dataToRender() {
        if(filteredData.length > 0) {
            return (
                <div>
                    {filteredData.length > 0 && (
                        filteredData.map((employee) => {
                            return (
                                <div>
                                    <h1>The User Name is {employee.userName}</h1>
                                </div>
                            )
                        })
                    )}
                </div>
            )
        } else {
            return <h1>No Employee To Display</h1>
        }
    }

    return (
        <div>{dataToRender()}</div>
    )
}