//YOUR CODE COMES HERE

let favoriteBooks=[
    {
        title:"Harry Potter and the Azkaban prisoner",
        author:"J. K. Rowling",
        year:1999,
        isNewerThan2000:false,
        age:24,
        characters:["Harry Potter","Dobby","Hermione Granger","Albus Dumbledore"],
        review:"Prima carte citita faca sa fiu obligat."
        },
        {
            title:"Harry Potter and the Philosopher's Stone",
            author:"J. K. Rowling",
            year:1997,
            isNewerThan2000:false,
            age:26,
            characters:["Harry Potter","Sirius Black","Hermione Granger","Albus Dumbledore"],
            review:"E mai bun filmul."
            }
]
let favMovies=[{
    title:"The Wolf of Wall Street",
    year:2013, 
    rating:8 ,
    description: "The Wolf of Wall Street is a 2013 American dark comedy film directed by Martin Scorsese, based on Jordan Belfort's memoir of the same name." ,
    directors:"Rodrigo Prieto",
    writers:"Martin Scorsese",
    stars:" Leonardo DiCaprio",
    geners:"Drama/Comedy",
    review:"Cel mai smecher film care exista!"
    },
    {
       title: "Avengers: Endgame",
       year:2019,
       rating:9,
       description: "Avengers: Endgame is a 2019 American superhero film based on the Marvel Comics team The Avengers, produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures.",
       directors:"Anthony Russo",
       writers:"Christopher Markus",
       stars:" Robert Downey Jr.",
       geners:"SF",
       review:"A durat cam mult."
    },
    {
       title:"Johnny English",
       year: 2003,
       rating:6,
       description:"Johnny English is a parody of the James Bond secret agent, starring Rowan Atkinson as the incompetent British spy and starring John Malkovich, Natalie Imbruglia and Ben Miller. The film features unique car chases.",
       directors:"Peter Howitt",
       writers:" Peter Howitt",
       stars:" Rowan Atkinson",
       geners:"Comedy",
       review:"Comedia clasica inca prinde."
    },
    {
       title:"The Super Mario Bros. Movie",
       year:2023,
       rating:7.6,
       description:"The movie Super Mario Bros. is a 2023 American computer-animated adventure film based on Nintendo's Mario video game franchise. Produced by Illumination, Universal Pictures and Nintendo and distributed by Universal, it was directed by Aaron Horvath and Michael Jelenic and written by Matthew Fogel.",
       directors:"Chris Meledandr",
       writers:"Aaron Horvath",
       stars:" Chris Pratt",
       geners:"Adventure",
       review:"Mai bun decat ma asteptam."
    }];
    let bestSellingAlbums = [
        {
            artist: "Michael Jackson",
            title: "Thriller",
            year: 1982,
            genres: ["pop", "post-disco", "funk", "rock"],
            sale: 70000000,
        },
        {
            artist: "AC/DC",
            title: "Back in Black",
            year: 1980,
            genres: ["hard rock"],
            sale: 50000000,
        },
        {
            artist: "Whitney Houston",
            title: "The Bodyguard",
            year: 1992,
            genres: ["r&b", "soul", "pop", "soundtrack"],
            sale: 45000000,
        },
        {
            artist: "Pink Floyd",
            title: "The Dark Side of the Moon",
            year: 1973,
            genres: ["progressive rock"],
            sale: 45000000,
        },
        {
            artist: "Eagles",
            title: "Their Greatest Hits (1971 - 1975)",
            year: 1976,
            genres: ["country rock", "soft rock", "folk rock"],
            sale: 44000000,
        },
        {
            artist: "Eagles",
            title: "Hotel California",
            year: 1976,
            genres: ["soft rock"],
            sale: 42000000,
        },
        {
            artist: "Shania Twain",
            title: "Come On Over",
            year: 1997,
            genres: ["country", "pop"],
            sale: 40000000,
        },
        {
            artist: "Fleetwood Mac",
            title: "Rumours",
            year: 1977,
            genres: ["soft rock"],
            sale: 40000000,
        },
    ];

function averageAge(array,number){
   let sum =0;
   for(let i=0;i< array.length; i++){
    sum +=number - array[i].year;
   }
   return sum/array.length
}
averageAge(favoriteBooks,2023);
averageAge(favMovies,2023);
averageAge(bestSellingAlbums,2023);

function average(arr,str){
    let sum = 0;
   let aver = 0;
    for(let i=0;i<arr.length;i++){
    if(arr[i][str] !== undefined){
        sum += arr[i][str]
    }
    else{
    console.log( undefined)
 } 
 }
  aver = sum/arr.length  
console.log(aver)
}




function latestOrOldest(arr,bool){
   let oldest=arr[0].year;
   let newest=arr[0].year;
   let newestTitle;
   let oldestTitle;
    for(let i=0;i<arr.length;i++){
    if(arr[i].year<=oldest){
        oldest =arr[i].year;
        oldestTitle = arr[i].title;
    }
    }
    for(let i=0; i<arr.length;i++){
        if(arr[i].year>=newest){
            newest = arr[i].year;
            newestTitle = arr[i].title;
        }
    }
    if(bool === true){
        return newestTitle;
    }
    else{
        return oldestTitle;
    }
}

console.log(latestOrOldest(bestSellingAlbums,true))
console.log(latestOrOldest(bestSellingAlbums,false))


// DON'T MODIFY THE CODE BELOW THIS LINE

let toExport;

try {
	toExport = [
		{name: "favoriteBooks", content: favoriteBooks, type: "array"},
        {name: "favMovies", content: favMovies, type: "array"},
        {name: "bestSellingAlbums", content: bestSellingAlbums, type: "array"},
        {name: "averageAge", content: averageAge, type: "function"},
        {name: "average", content: average, type: "function"},
        {name: "latestOrOldest", content: latestOrOldest, type: "function"},

	]
} catch (error) {
	toExport = {error: error.message}
}

export {toExport};
