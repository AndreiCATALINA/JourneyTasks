//Your code comes  here
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
function movieTitles(movies,titleLogger){
   let time = 1000; 
	movies.forEach(value => {
		setTimeout(() => {
        titleLogger(value.title);
    },time)
	time+=1000})
}

function titleLogger(subject){
	console.log(subject)
}

movieTitles(favMovies, titleLogger)





































// DO NOT MODIFY THE CODE BELOW THIS LINE
let toExport;

try {
	toExport = [
		{name: "favMovies", content: favMovies, type: "array"},
		{name: "moviesList", content: moviesList, type: "function"},
		{name: "titleLogger", content: titleLogger, type: "function"},
	]
} catch (error) {

	toExport = {error: error.message}

}

export {toExport};
