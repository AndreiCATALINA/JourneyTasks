import {toExport as movies} from "./data.js";

// You can use the `movies` array here
// Please write every correction and modification of the data to this file by updating the `movies` array
// using for loops, conditionals and bracket and dot notation

for(let i=0; i<movies.length;i++){
  if (movies[i].director === ''){
    movies[i].director = 'Martin Scorsese';
  }
}

for(let i=0; i<movies.length;i++){
   if(movies[i].year < 900){
    movies[i].year += 2000
   }
   if(movies[i].year < 1900){
    movies[i].year += 1000
   }
}

for(let i=0; i<movies.length;i++){
    let people = movies[i].actors;
    for(let j=0;j<people.length;j++){
        if(people[j]==='Leonardo da Vinci'){
            people[j] = 'Leonardo DiCaprio';
        }
    }
}

for(let i=0;i<movies.length;i++){
    let dram = movies[i].genres
    for(let j=0;j<dram.length;j++){
        if(dram[j]===""){
            dram[j]= "Drama";
        }
    }
}

let allActors = [];

for(const movie of movies){
  allActors.push(movie.actors)
}
let result = Array.prototype.concat(...allActors)
 
let thing = new Set(result)

console.log(thing)





// DO NOT MODIFY THE CODE BELOW THIS LINE
let toExport;

toExport = [...movies];

export {toExport}
