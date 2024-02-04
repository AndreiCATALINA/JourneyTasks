import {toExport as movies} from "./data.js";


// YOUR CODE COMES HERE

function dramas(movies) {
let arr = [];
movies.forEach(movie => {
    if(movie.genres.includes("Drama")){
        arr.push(movie.title)
    }
});
return arr
}
//console.log(dramas(movies))

function findByGenre(genre, movies) {
  const result = [];
  movies.forEach(movie => {
    if (movie.genres.includes(genre)) {
      result.push(movie.title);
    }
  });
  return result;
}

//console.log(findByGenre("Horror",movies))

function longestMovie(movies){
    let longest = movies[0];
    movies.forEach(movie => {
      if (movie.runtime > longest.runtime) {
        longest = movie; 
      }
    });
  
    return longest.title;
  }

//console.log(longestMovie(movies))

function longestMovieByGenre(genre,movies){
  let max=0;
  let index;
  movies.forEach(movie=>{
      movie.genres.forEach(gen =>{
          if(gen===genre){
              if(movie.runtime>max){
                  max=movie.runtime;
                  index=movie;
              }
          }
      })
  })
  return index;
}

//console.log(longestMovieByGenre("Drama", movies))





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
