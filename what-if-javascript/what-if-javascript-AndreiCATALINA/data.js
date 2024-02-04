// WRITE YOUR CODE BELOW THIS LINE

let favMovies = [
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

for(var movies of favMovies){
	console.log(movies.title);
}

for(let i=0; i<favMovies; i++){
	var movie = favMovies[i];
	console.log(movie.title);
}

let totalRate = 0;
for( let rate of favMovies){
	totalRate += rate.rating;
}
let averageRate = totalRate/ favMovies.length;
console.log(averageRate)

let newestMovie = favMovies[0];
for(var status of favMovies){
	if( status.year > newestMovie.year){
		newestMovie = status;
	}
}
console.log(newestMovie.title)




let starsByMovies = "";
for(var status of favMovies){
	starsByMovies += status.title + "\n\n" ;
	for(let strumf of status.stars){
		starsByMovies += strumf
	}
	starsByMovies += "\n_\n\n"
}
console.log(starsByMovies)

// DO NOT MODIFY THE CODE BELOW THIS LINE
let toExport;

try {
	toExport = [
		{name: "favMovies", content: favMovies, type: "array"},
		{name: "averageRate", content: averageRate, type: "number"},
		{name: "newestMovie", content: newestMovie, type: "object"},
		{name: "starsByMovies", content: starsByMovies, type: "string"}
	]
} catch (error) {
	toExport = {error: error.message}
}

export {toExport};
