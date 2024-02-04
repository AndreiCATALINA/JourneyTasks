git let bestSellingAlbums = [
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

// DO NOT MODIFY THE CODE ABOVE THIS LINE
// WRITE YOUR CODE BELOW THIS LINE


let averageSale =((bestSellingAlbums[0].sale+bestSellingAlbums[1].sale+bestSellingAlbums[2].sale+bestSellingAlbums[3].sale+bestSellingAlbums[4].sale+bestSellingAlbums[5].sale+bestSellingAlbums[6].sale+bestSellingAlbums[7].sale)/bestSellingAlbums.length)

console.log(averageSale)

let currentYear = 2023;
let averageAge = 0;
for(let i=0;i<bestSellingAlbums.length;i++){
    averageAge += (currentYear - bestSellingAlbums[i].year)/bestSellingAlbums.length 
}
console.log(averageAge)


let newestAlbum = bestSellingAlbums[0];
let oldestAlbum = bestSellingAlbums[0];
 for(let i=0; i<bestSellingAlbums.length;i++){
    if(newestAlbum.year<bestSellingAlbums[i].year){
        newestAlbum = bestSellingAlbums[i]
    }
    if(oldestAlbum.year>bestSellingAlbums[i].year){
        oldestAlbum = bestSellingAlbums[i]
    }
 }
console.log(newestAlbum.year)
console.log(oldestAlbum.year)


var sales = bestSellingAlbums[4].sale+bestSellingAlbums[5].sale;
let albumsOfEagles={
    sales,
    isBothSoftRock: bestSellingAlbums[4]['genres'][1]===bestSellingAlbums[5].genres[0]
}

console.log(albumsOfEagles.isBothSoftRock)


let newAlbum = {
    artist: "Taylor Swift",
    title: "Reputation",
    year: 2018,
    genres: ["pop"],
    sale: 1200000
}
bestSellingAlbums.push = newAlbum

console.log(bestSellingAlbums)

let iLikeIt;

bestSellingAlbums[0].iLikeIt = true
bestSellingAlbums[1].iLikeIt = true
bestSellingAlbums[2].iLikeIt = false
bestSellingAlbums[3].iLikeIt = false
bestSellingAlbums[4].iLikeIt = false
bestSellingAlbums[5].iLikeIt = true
bestSellingAlbums[6].iLikeIt = true
bestSellingAlbums[7].iLikeIt = true

console.log(bestSellingAlbums)





// DO NOT MODIFY THE CODE BELOW THIS LINE
let toExport;

try {
	toExport = [
		{name: "averageSale", content: averageSale, type: "number"},
        {name: "averageAge", content: averageAge, type: "number"},
        {name: "newestAlbum", content: newestAlbum, type: "object"},
        {name: "oldestAlbum", content: oldestAlbum, type: "object"},
        {name: "albumsOfEagles", content: albumsOfEagles, type: "object"}
	]
} catch (error) {
	toExport = {error: error.message}
}

export {toExport};
