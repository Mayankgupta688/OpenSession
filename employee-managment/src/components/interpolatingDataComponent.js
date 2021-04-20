export default function InterpolatingDataComponent() {
    var firstName = "Mayank";
    var lastName= "Gupta"
    var userAge = 20;

    function getData() {

        // Function within a Function...

        function getSalutation(a, b) {
            return `${a} ${b} Aged As: ${userAge}`
        }

        return getSalutation(firstName, lastName);
        
    }

    return <h1>Hello {getData()} from TechnoFunnel</h1>
}