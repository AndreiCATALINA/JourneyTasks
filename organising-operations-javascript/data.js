//Your code comes here

let thisText = "Party"
function logIntoTerminal(toLog,secondToLog){
    let localText = "Now";
    console.log(thisText)
    console.log(localText)
    function fourthFunction(){
        console.log("Start")
    }
    fourthFunction()
    console.log(toLog,secondToLog)
}


function anotherFunction(){
    let a = 1;
    logIntoTerminal("It is from another function ",a);

}
 
const thirdFunction = function thirdFunction(){
    let b =3;
    logIntoTerminal("It is from tird function",b)
}

function greetings(firstName){
    return 'Greetings,' + firstName

}
console.log(greetings("Paul"))
console.log(greetings("Radu"))
console.log(greetings("Bogdan"))
console.log(greetings("Ana"))
console.log(greetings("Mihai"))
// DO NOT MODIFY THE CODE BELOW THIS LINE
let toExport;

try {
	toExport = [
		{name: "thisText", content: thisText, type: "string"},
        {name: "logIntoTerminal", content: logIntoTerminal, type: "function"},
        {name: "anotherFunction", content: anotherFunction, type: "function"},
        {name: "thirdFunction", content: thirdFunction, type: "function"},
        {name: "greetings", content: greetings, type: "function"},

	]
} catch (error) {
	toExport = {error: error.message}
}

export {toExport};
