// YOUR CODE COMES HERE

function positiveSum(cats){
    let count = 0
    for(let i= 0;i<cats.length;i++){
        if(cats[i]>=0){
            count++
        }
    }
    return count
}
//console.log(positiveSum([-2,-5,-1,3,2,5,0]))

let arr =["JMangot","IIojis","iNicoleg"]
function removeChar(arr){
    let newArr = []
    for(let i=0; i<arr.length;i++){
        let thing = arr[i].slice(1,-1)
        newArr.push(thing)
    }
    return newArr
}

//console.log(removeChar(arr))

let young = [1,4,2,2,5,3,6]
function youngestCat(catAges){
 let compare = 0;
 for(let i=0 ;i<catAges.length;i++){
    if(catAges[i]<catAges[i+1]){
        compare = catAges[i]
    }
    return "Our youngest cat is " + compare + " years old"
 }
}

//console.log(youngestCat(young))

function createId(catId){

    let thing = catId.toString().split("").map(Number).reverse()
    return thing
}

//console.log(createId(234567))

function foodTime(foodList) {
    let minNumber = Math.min(...foodList);
    let maxNumber = Math.max(...foodList);
    let result = [];
  
    for (let i = minNumber; i <= maxNumber; i++) {
      result.push(i);
    }
  
    return result;
  }

//console.log(foodTime([2,4,5,8,9]))

function searchCat(arr,name){
   if(arr.includes(name)){
    return name
   }
   return 0
}

//console.log(searchCat(["Paul","Radu"],"Paukl"))

function removeCats(toRemove){
    return toRemove.slice(1,-1)
}

//console.log(removeCats(["Pacoon","Pavel","Ianos","Picu"]))

function similarCatNames(olderCats, youngerCats) {
    const commonNames = [];
  
    for (let i = 0; i < olderCats.length; i++) {
      if (youngerCats.includes(olderCats[i]) && !commonNames.includes(olderCats[i])) {
        commonNames.push(olderCats[i]);
      }
    }
  
    return commonNames.sort();
  }

let catNames = similarCatNames(["Whiskers", "Luna", "Tiger", "Oliver"],["Luna", "Max", "Whiskers", "Leo", "Oliver"])











// DO NOT MODIFY THE CODE BELOW THIS LINE
let toExport;

try {
    toExport = [
        {name: "positiveSum", content: positiveSum, type: "function"},
        {name: "removeChar", content: removeChar, type: "function"},
        {name: "youngestCat", content: youngestCat, type: "function"},
        {name: "createId", content: createId, type: "function"},
        {name: "foodTime", content: foodTime, type: "function"},
        {name: "searchCat", content: searchCat, type: "function"},
        {name: "removeCats", content: removeCats, type: "function"},
        {name: "similarCatNames", content: similarCatNames, type: "function"},
        {name: "catNames", content: catNames, type: "array"}
    ]
} catch (error) {
    toExport = {error: error.message}
}

export {toExport};
