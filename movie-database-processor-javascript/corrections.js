import {toExport as movies} from "./data.js";


// YOUR CODE COMES HERE

function dramas(movies){
	let arr = []
	for(let i=0;i<movies.length;i++){
		if(movies[i].genres.includes("Drama")){
			arr.push(movies[i].title)
		}
	}
	return arr
}

//console.log(dramas(movies))

function findByGenre(genres, movies) {
	const result = [];
  
	for (const movie of movies) {
	  if ((Array.isArray(genres) && genres.every(genre => movie.genres.includes(genre))) ||
		  movie.genres.includes(genres)) {
		result.push(movie.title);
	  }
	}
  
	return result;
  }

//console.log(findByGenre(["Drama","Action"],movies))

function longestMovie(movies){
	let thing = movies[0];
	for(let i=1;i<movies.length;i++){
	 if(movies[i].runtime>thing.runtime)
	 thing = movies[i]
	}
	return thing
}

//console.log(longestMovie(movies))

function longestMovieByGenre(genre,movies){
let result = movies[0]
	for(let i=0; i<movies.length;i++){
		if(movies[i].genres.includes(genre) && movies[i].runtime> result.runtime){
          result = movies[i]
		}
	}
	return result
}

//console.log(longestMovieByGenre("Horror",movies))





// DO NOT MODIFY THE CODE BELOW THIS LINE

let toExport;

try {
	toExport = [
		{name: "dramas", content: dramas, type: "function"},
        {name: "findByGenre", content: findByGenre, type: "function"},
        {name: "longestMovie", content: longestMovie, type: "function"},
        {name: "longestMovieByGenre", content: longestMovieByGenre, type: "function"}
	]
} catch (error) {
	toExport = {error: error.message}
}

export {toExport}
