// WRITE YOUR CODE BELOW THIS LINE
var favMovies = [
	{
	 title:"The Wolf of Wall Street",
	 year:2013, 
	 rating:8 ,
	 description: "The Wolf of Wall Street is a 2013 American dark comedy film directed by Martin Scorsese, based on Jordan Belfort's memoir of the same name." 
	 },
	 {
		title: "Avengers: Endgame",
		year:2019,
		rating:9,
		description: "Avengers: Endgame is a 2019 American superhero film based on the Marvel Comics team The Avengers, produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures."
	 },
	 {
		title:"Johnny English",
		year: 2003,
		rating:6,
		description:"Johnny English is a parody of the James Bond secret agent, starring Rowan Atkinson as the incompetent British spy and starring John Malkovich, Natalie Imbruglia and Ben Miller. The film features unique car chases."
	 },
	 {
		title:"The Super Mario Bros. Movie",
		year:2023,
		rating:7,
		description:"The movie Super Mario Bros. is a 2023 American computer-animated adventure film based on Nintendo's Mario video game franchise. Produced by Illumination, Universal Pictures and Nintendo and distributed by Universal, it was directed by Aaron Horvath and Michael Jelenic and written by Matthew Fogel."
	 }
]
console.log(favMovies);

console.log(favMovies[0].title)
console.log(favMovies[1].year)
console.log(favMovies[2].rating)
console.log(favMovies[3].description)

console.log("The title of the first movie is: "+favMovies[0].title)
console.log("The release year of the second movie is: "+favMovies[1].year)
console.log("The IMDB rating of the third movie is: "+favMovies[2].rating)
console.log("The short description of the fourth movie is: "+favMovies[3].description)


var favMovies = [
	{
	 title:"The Wolf of Wall Street",
	 year:2013, 
	 rating:8 ,
	 description: "The Wolf of Wall Street is a 2013 American dark comedy film directed by Martin Scorsese, based on Jordan Belfort's memoir of the same name." ,
	 directors:"Rodrigo Prieto",
	 writers:"Martin Scorsese",
	 stars:" Leonardo DiCaprio",
	 geners:"Drama/Comedy"
	 },
	 {
		title: "Avengers: Endgame",
		year:2019,
		rating:9,
		description: "Avengers: Endgame is a 2019 American superhero film based on the Marvel Comics team The Avengers, produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures.",
		directors:"Anthony Russo",
		writers:"Christopher Markus",
		stars:" Robert Downey Jr.",
		geners:"SF"
	 },
	 {
		title:"Johnny English",
		year: 2003,
		rating:6,
		description:"Johnny English is a parody of the James Bond secret agent, starring Rowan Atkinson as the incompetent British spy and starring John Malkovich, Natalie Imbruglia and Ben Miller. The film features unique car chases.",
		directors:"Peter Howitt",
		writers:" Peter Howitt",
		stars:" Rowan Atkinson",
		geners:"Comedy"
	 },
	 {
		title:"The Super Mario Bros. Movie",
		year:2023,
		rating:7.6,
		description:"The movie Super Mario Bros. is a 2023 American computer-animated adventure film based on Nintendo's Mario video game franchise. Produced by Illumination, Universal Pictures and Nintendo and distributed by Universal, it was directed by Aaron Horvath and Michael Jelenic and written by Matthew Fogel.",
		directors:"Chris Meledandr",
		writers:"Aaron Horvath",
		stars:" Chris Pratt",
		geners:"Adventure"
	 }
]
console.log(favMovies)

console.log("The lead director of the first movie is: " + favMovies[0].directors)
console.log("The lead writer of the second movie is: " + favMovies[1].writers)
console.log("The lead star of the third movie is: " + favMovies[2].stars)
console.log("The main genre of the fourth movie is: " + favMovies[3].geners)

let averageRating = (favMovies[0].rating + favMovies[1].rating+favMovies[2].rating+favMovies[3].rating)/favMovies.length
console.log(averageRating)

let averageAge =( ((2023- favMovies[0].year)+(2023- favMovies[1].year)+(2023-favMovies[2].year)+(2023-favMovies[3].year))/favMovies.length)
console.log(averageAge)

// DO NOT MODIFY THE CODE BELOW THIS LINE
let toExport;

try {
	toExport = [
		{name: "favMovies", content: favMovies, type: "array"},
        {name: "averageRating", content: averageRating, type: "number"},
        {name: "averageAge", content: averageAge, type: "number"}
	]
} catch (error) {
	toExport = {error: error.message}
}

export {toExport};
