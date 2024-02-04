import {toExport as movies} from "./data.js";

// You can use the `movies` array here
// Please write every correction and modification of the data to this file by updating the `movies` array
// using bracket and dot notation

let item1 = movies[0];
item1.plot = 'The spirits of a deceased couple are harassed by an unbearable family that has moved into their home, and hire a malicious spirit to drive them out.';
let item2 = movies[21];
item2.plot = 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.';
let item3 = movies[51];
item3.plot ='The Hobbit: The Desolation of Smaug continues the adventure of the title character Bilbo Baggins as he journeys with the Wizard Gandalf and thirteen Dwarves';
let item4 = movies[52];
item4.plot ='The plot centers on two American women, Vicky and Cristina, who spend a summer in Barcelona, where they meet an artist, Juan Antonio, who is attracted to both of them';
let item5 = movies[104];
item5.plot ='The end credits explain that Kemp makes it back to New York, marries Chenault, and becomes a successful journalist, having finally found his voice as a writer.';


let year1 = movies[17];
year1.year = 2000;
let year2 = movies[26];
year2.year = 1999;
let year3 = movies[53];
year3.year = 2008;
let year4 = movies[80];
year4.year = 2008;
let year5 = movies[101];
year5.year = 2013;

let actor1 = movies[2];
actor1.actors[0] = "Tim Robbins";
let actor2 = movies[12];
actor2.actors[3] = "Woody Harrelson";
let actor3 = movies[34];
actor3.actors[0] = "Leonardo DiCaprio";
let actor4 = movies[65];
actor4.actors[1] = "Thomas Kretschmann";
let actor5 = movies[143];
actor5.actors[2] = "Jennifer Jason Leigh";

let director1 = movies[7];
director1.director = "Christopher Nolan";
let director2 = movies[30];
director2.director = "Guy Ritchie";
let director3 = movies[37];
director3.director = "Woody Allen";
let director4 = movies[63];
director4.director = "Bobcat Goldthwait";
let director5 = movies[81];
director5.director = "Martin Scorsese";


let genres1 = movies[95];
genres1.genres = [" Comedy , Crime , Mystery , Thriller"];
let genres2 = movies[145];
genres2.genres = ["Financial thriller"];


let midle = {
    id:90,
    title:"V for Vendetta",
    year:2005,
    runtime: 132,
    genres: ["SF , Action , Drama"],
    director: "James McTeigue",
    actors: ["Hugo Weaving V , Naralie Portman , Stephen Fry"],
    plot: "It is the year 2020. A virus runs wild in the world, most Americans are dead, and Britain is ruled by a fascist dictator who promises security but not freedom.",
}
movies[89] = midle;


// DO NOT MODIFY THE CODE BELOW THIS LINE
let toExport;

toExport = [...movies];

export {toExport}
