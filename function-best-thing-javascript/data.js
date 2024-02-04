// WRITE YOUR CODE BELOW THIS LINE
let favoriteBook = {
    title:"Harry Potter and the Azkaban prisoner",
    author:"J. K. Rowling",
    year:1999,
    characters:["Harry Potter","Dobby","Hermione Granger","Albus Dumbledore"],
	age: function(currentYear){
		return currentYear -favoriteBook.year
	}
}
let ageOfMyFavBook = favoriteBook.age(2023)

console.log(console)

console.log(console.log)

for(let i=0; i<5 ;i++){
	console.count("sheep")
}

console.log(Object.keys(favoriteBook))

let aNumber = 5;
console.log(aNumber.toString())

let writers="George Orwell, Ernest Hemingway, Jane Austen, Agatha Christie, Oscar Wilde"

let writersArray = writers.split(", ")
console.log(writersArray[0])

let joinWriters = writersArray.join(" + ")
console.log(joinWriters)

writersArray.push("Andrei Catalina")
writersArray.push("Iohanis")




// DO NOT MODIFY THE CODE BELOW THIS LINE
let toExport;


try {
	toExport = [
		{name: "favoriteBook", content: favoriteBook, type: "object"},
		{name: "ageOfMyFavBook", content: ageOfMyFavBook, type: "number"},
		{name: "aNumber", content: aNumber, type: "number"},
		{name: "writers", content: writers, type: "string"},
		{name: "writersArray", content: writersArray, type: "array"},
		{name: "joinWriters", content: joinWriters, type: "string"}
	]
} catch (error) {

	toExport = {error: error.message}

}

export {toExport};
