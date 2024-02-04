import * as fs from 'node:fs';

fs.readFile('data.json','utf8',(err,data)=>{
 let result = JSON.parse(data)
  if(err){
    console.log(err)
    return
  }
  console.log(convertBreeds(err,data))
})


 let convertBreeds = (err,data) => {
  if(err){
    console.log(err)
    return
  }
   let dogs = JSON.parse(data)
  // let arr = []
   let arr2 = []
  // let i = 0
   let j = 0
   for( let dog of Object.keys(dogs.breeds)){
    if(dogs.breeds[dog].length !== 0){
     // for(let breed of dogs.breeds[dog]){
       // arr[i] = dog +" "+ breed 
       // i++;
         arr2[j] = {
          'id':j+1,
          "name": dog ,
          'sub': dogs.breeds[dog]
        }
        j++
      }
    //}
    else{
      arr2[j] ={
        'id':j+1,
          "name": dog ,
          'sub': false
      }
     j++
    }
   }
   return arr2
 }



// DON'T MODIFY THE CODE BELOW THIS LINE

let toExport;

try {
  toExport = [
    { name: "dataRead", content: dataRead, type: "function" },
    { name: "convertBreeds", content: convertBreeds, type: "function" }
  ]

} catch (error) {
  toExport = { error: error.message }
}

export { toExport };