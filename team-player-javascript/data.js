
let ourTeam ={
	name: "Vand Golf 4",
	members: [{
		name: "Andrei",
		birthday:{
			year:1999,
			month:4,
			day:21
		} ,
		location:{
			country:"Romania",
			city:"Arad"
		},
		codingLevel:{
			level:21,
            seniority:"junior"
		} ,
		favorites: {
			favMovies:[{
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
				}],
				favBooks:[
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
				],
				favMusigGenres:[
					"Rock",
					"Folk",
					"Trap"
				]
		},
	
	},
        {name: "Larisa",
		birthday:{
			year:2002,
			month:7,
			day:14
		},
		location:{
			country:"Romania",
			city:"Falticeni"
		},
		codingLevel: {
			level: 25,
			seniority:"junior"
		},
        favorites: {
			favMovies:[{title: "God's Crooked Lines",
			year: 2022,
			rating:7,
			description:"Follows a woman checking into a psychiatric ward to investigate a homicide.",
			director:"Oriol Paulo", 
			writers:"Oriol Paulo, Gullem Clus, Lara Sendim", 
			stars:"Barbara Lennie, Eduard Fernandez, Loreto Mauleon", 
			genre:"mystery",
			review:"It is a film with an unexpected ending"
			},
			{title:"3096 Tage",
			year: 2013,
			rating: 6.5,
			description:"A young Austrian girl is kidnapped and held in captivity for eight years. Based on the factual case of Natascha Kampusch.",
			director:"Sherry Hormann", 
			writers:"Natascha Kampusch, Ruth Toma, Bernd Eichinge", 
			stars:"Antonia Campbell-Hughes, Thure Lindhardt, Amelia Pidgeon", 
			genre:"drama",
			review:"It is a film with non-stop suspense"
			},
			{title:"Avatar",
			year: 2009,
			rating: 7.9,
			description: "A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
			director:"James Cameron", 
			writers:"James Cameron", 
			stars:"Sam Worthington, Zoe Saldana, Sigourney Weaver", 
			genre:"action",
			review:"The graphics and the story of this movie are very good"
			},
			{title:"The Hunger Games",
			year: 2012,
			rating: 7.2,
			description:"Katniss Everdeen voluntarily takes her younger sister's place in the Hunger Games: a televised competition in which two teenagers from each of the twelve Districts of Panem are chosen at random to fight to the death.",
			director:"Gary Ross", 
			writers:"Gary Ross, Suzanne Collins, Billy Ray", 
			stars:"Jennifer Lawrence, Josh Hutcherson, Liam Hemsworth", 
			genre:"thriller",
			review:"This movie has everything, suspense, drama and action"
			}],
			favBooks : [{
				title:"Vampirul Lestat",
				author:"Anne Rice",
				year:1985,
				isNewerThan2000:false,
				age:38,
				characters:["Lesat de Lincourt", "Armand" , "Marius de Romanus" , "Khayman"],
				review:"You live with the character throughout the story"
				},
				{
				title:"Stapanul inelelor",
				author:"John Ronald Reuel Tolkien",
				year:1954,
				isNewerThan2000:false,
				age:69,
				characters:["Gandalf","Goblin", "Sauron", "Bibo Baggins"],
				review:"The author's imagination was at a high level"
			}],
			favMusigGenres:[
				"Trap",
				"Drill",
				"Pop"
			]
		}
	} ,
		{
			name: "Gabi",
		birthday:{
			year:2001,
			month:2,
			day:27
		},
		location:{
			country:"Romania",
			city:"Brasov"
		},
		codingLevel: {
			level: 27,
			seniority:"junior"
		},
	    favorites: {
			favMovies: [ {
				title: "Top Gun: Maverick",
				year: 2022,
				rating: 8.3,
				description: "After thirty years, Maverick is still pushing the envelope as a top naval aviator, but must confront ghosts of his past when he leads TOP GUN's elite graduates on a mission that demands the ultimate sacrifice from those chosen to fly it.",
				directors: ["Joseph Kosinski"],
				writers: ["Jim Cash", "Jack Epps Jr.", "Peter Craig"],
				stars: ["Tom Cruise", "Miles Teller", "Val Kilmer"],
				genres: ["Action", "Drama"],
				review:"Harry potter and the philosopher’s stone Harry Potter and a sorcerer stone is a good book to spark joy and imagination for anyone, regardless of age."
			  },
			  
			   {
				title: "Rocky IV",
				year: 1985,
				rating: 6.8,
				description: "Rocky Balboa proudly holds the world heavyweight boxing championship, but a new challenger has stepped forward: Drago, a six-foot-four, 261-pound fighter who has the backing of the Soviet Union.",
				directors: ["Sylvester Stallone"],
				writers: ["Sylvester Stallone"],
				stars: ["Sylvester Stallone", "Talia Shire", "Burt Young"],
				genres: ["Drama", "Sport"],
				review:"The Hobbit, or There and Back Again. This book would be suitable to read from age 12- 20."
			  },
			  
			 {
				title: "Everything everywhere all at once",
				year: 2022,
				rating: 7.9,
				description: "A middle-aged Chinese immigrant is swept up into an insane adventure in which she alone can save existence by exploring other universes and connecting with the lives she could have led.",
				directors: ["Daniel Kwan", "Daniel Scheinert"],
				writers: ["Daniel Kwan", "Daniel Scheinert"],
				stars: ["Michelle Yeoh", "Stephanie Hsu", "Jamie Lee Curtis"],
				genres: ["Action", "Adventure", "Comedy"],
				review:"Top Gun Maverick is an awesome action film that lives up to the original film and way superior as well. It is one awesome thrill ride that will have the audiences gasping for air with its exhilarating aerial combat scenes."
			  },
			  
			 {
				title: "The whale",
				year: 2022,
				rating: 7.8,
				description: "A reclusive, morbidly obese English teacher attempts to reconnect with his estranged teenage daughter.",
				directors: ["Darren Aronofsky"],
				writers: ["Samuel D. Hunter"],
				stars: ["Brendan Frasier", "Sadie Sink", "Ty Simpkins"],
				genres: ["Drama"],
				review:"'Rocky IV' has a tantalising and incredible story line."
			  }],
			  favBooks:[{
				title: "Harry Potter and the Philosopher's Stone",
				author: "J. K. Rowling",
				year: 1997,
				isNewerThan2000: false,
				age: 26,
				characters: ["Harry Potter", "Hermione Granger", "Ron Weasley", "Lord Voldemort"],
				review:"Mind-bending and mind-blowing, Everything Everywhere All at Once masters its building block storytelling that feels like an acid trip worth experiencing and that experience... can only be felt once in a lifetime."
			  },
			  {
				title: "The Hobbit, or There and Back Again",
				author: "J. R. R. Tolkien",
				year: 1937,
				isNewerThan2000: false,
				age: 86,
				characters: ["Bilbo Baggins", "Gandalf", "Smaug", "Thorin Oakenshield"],
				review:"The Whale is an abhorrent film, but it also features excellent performances. It gawks at the grotesquerie of its central figure beneath the guise of sentimentality, but it also offers sharp exchanges between its characters that ring with bracing honesty."
			  }],
			  favMusigGenres:[
				"Manele",
				"Populara",
				"Trap"
			  ]
		}
	}
]
}

for(let people of ourTeam.members){
	for(let movie of people.favorites.favMovies){
		delete movie.description;
		delete movie.isNewerThan2000;
		delete movie.age;
	}
}
let currentYear=2023;
let currentMonth=5;
let sum =0;
let averageAge ;

 for(let people of ourTeam.members){
	sum += (currentYear - people.birthday.year)
	if(currentMonth<people.birthday.month){
		sum -=1;
	}
 }
 averageAge = sum/ourTeam.members.length


  sum = 0;
  let averageCodingLevel ;
   for(let cod of ourTeam.members){
	sum+= cod.codingLevel.level
   }
 averageCodingLevel = Math.round(sum/ourTeam.members.length)

let yearmin = 0;

 let youngestMember ="";
 for(let i=0; i<ourTeam.members.length;i++){
	if(ourTeam.members[i].birthday.year>=yearmin){
		yearmin = ourTeam.members[i].birthday.year;
       youngestMember = ourTeam.members[i].name;
	}
 }

let yearmax= 2023;

 let oldestMember ="";
 for(let i=0; i<ourTeam.members.length;i++){
	if(ourTeam.members[i].birthday.year<=yearmax){
		yearmax = ourTeam.members[i].birthday.year;
       oldestMember = ourTeam.members[i].name;
	} 
 }

 let location = {};

 for(let i=0; i<ourTeam.members.length; i++) {
   let city = ourTeam.members[i].location.city;
   let memberName = ourTeam.members[i].name;
   
   if(location[city]) {
	 location[city] += ", " + memberName;
   } else {
	 location[city] = memberName;
   }
 }
 
let commonGenres = {};

for(let i=0; i<ourTeam.members.length;i++){
	let gen = ourTeam.members[i].favorites.favMusigGenres
	for(let j=0; j<gen.length;j++){
		if(commonGenres[gen[j]]){
			commonGenres[gen[j]] += 1
		}
		else{
			commonGenres[gen[j]] = 1
		}
	}
}


 ourTeam.members[0].colors = {
	primary:{
		red: 64,
		green: 130,
		blue: 109
	},
	secondary:{
		red: 45,
		green: 36,
		blue: 30
	}
}
ourTeam.members[1].colors = {
	primary:{
		red: 180,
		green: 13,
		blue: 213
	},
	secondary:{
		red: 255,
		green: 253,
		blue: 208
	}
}
ourTeam.members[2].colors = {
	primary:{
		red: 255,
		green: 229,
		blue: 204
	},
	secondary:{
		red: 51,
		green: 25,
		blue: 0
	}
}

ourTeam.members[0].numberOfPushups = 25;
ourTeam.members[1].numberOfPushups = 0; 
ourTeam.members[2].numberOfPushups = 20;

ourTeam.members[0].breakHead = 6,
ourTeam.members[1].breakHead = 5,
ourTeam.members[2].breakHead = 1,


ourTeam.moreStats = {
	averagePushups :"Average pushups: " + (ourTeam.members[0].numberOfPushups+ourTeam.members[1].numberOfPushups+ourTeam.members[2].numberOfPushups)/ourTeam.members.length ,
    averageBreak: "Average break: " + (ourTeam.members[0].breakHead+ourTeam.members[1].breakHead+ourTeam.members[2].breakHead)/ourTeam.members.length 
}


// DON'T MODIFY THE CODE BELOW THIS LINE

let toExport;

try {
	//{ourTeam, averageAge, youngestMember, location, }
	toExport = [
		{ name: "ourTeam", content: ourTeam, type: "object" },
		{ name: "averageAge", content: averageAge, type: "number" },
		{ name: "averageCodingLevel", content: averageCodingLevel, type: "number" },
		{ name: "youngestMember", content: youngestMember, type: "string" },
		{ name: "oldestMember", content: oldestMember, type: "string" },
		{ name: "location", content: location, type: "object" },
		{ name: "commonGenres", content: commonGenres, type: "object" },
	]

} catch (error) {
	toExport = { error: error.message }
}

export { toExport };
