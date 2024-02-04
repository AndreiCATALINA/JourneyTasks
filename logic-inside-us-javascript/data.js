// WRITE YOUR CODE BELOW THIS LINE
let favoriteBooks = [ 
    {
    title:"Harry Potter and the Azkaban prisoner",
    author:"J. K. Rowling",
    year:1999,
    isNewerThan2000:false,
    age:24,
    characters:["Harry Potter","Dobby","Hermione Granger","Albus Dumbledore"]
    },
    {
        title:"Harry Potter and the Philosopher's Stone",
        author:"J. K. Rowling",
        year:1997,
        isNewerThan2000:false,
        age:26,
        characters:["Harry Potter","Sirius Black","Hermione Granger","Albus Dumbledore"]
        }
]
console.log(favoriteBooks)

for (let book of favoriteBooks){
	console.log(book.title)
}

for( let i=0; i<favoriteBooks.length;i++ ){
	console.log(favoriteBooks[i].author)
}

if (favoriteBooks[0].isNewerThan2000 == true){
	console.log(favoriteBooks[0].title)
}
if (favoriteBooks[1].isNewerThan2000 == true){
	console.log(favoriteBooks[1].title)
}
if (favoriteBooks[0].isNewerThan2000 == true){
	console.log("This book is newer than 2000:"+favoriteBooks[0].title)
}
 else {
	console.log(" This book is older than 2000:"+ favoriteBooks[0].title)
 }
if (favoriteBooks[1].isNewerThan2000 == true){
	console.log("This book is newer than 2000:"+favoriteBooks[1].title)
}
else {
	console.log(" This book is older than 2000:"+ favoriteBooks[1].title)
}

if (favoriteBooks[0].isNewerThan2000 === true){
	console.log("This book is newer than 2000:"+favoriteBooks[0].title)
}
 else if(favoriteBooks[0].isNewerThan2000 !== true){
	console.log(" This book is older than 2000:"+ favoriteBooks[0].title)
 }
if (favoriteBooks[1].isNewerThan2000 === true){
	console.log("This book is newer than 2000:"+favoriteBooks[1].title)
}
else if(favoriteBooks[1].isNewerThan2000 !== true) {
	console.log(" This book is older than 2000:"+ favoriteBooks[1].title)
}


if (favoriteBooks[0].isNewerThan2000 >= true){
	console.log("This book is newer than 2000:"+favoriteBooks[0].title)
}
 else {
	console.log(" This book is older than 2000:"+ favoriteBooks[0].title)
 }
if (favoriteBooks[1].isNewerThan2000 >= true){
	console.log("This book is newer than 2000:"+favoriteBooks[1].title)
}
else {
	console.log(" This book is older than 2000:"+ favoriteBooks[1].title)
}

for (let book of favoriteBooks){
	if (book.year >= 2000 ){
		console.log("This book is newer than 2000:"+book.title)
	}
	else {
		console.log(" This book is older than 2000:"+ book.title)
	}
}

// DO NOT MODIFY THE CODE BELOW THIS LINE
let toExport;

try {
	toExport = [
		{name: "favoriteBooks", content: favoriteBooks, type: "array"}
	]
} catch (error) {
	toExport = {error: error.message}
}

export {toExport}
