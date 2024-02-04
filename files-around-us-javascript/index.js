
import * as fs from 'node:fs';

fs.readFile('first.txt','utf8',(err,data)=>{
  if(err){
    console.log(err)
    return;
  }
  console.log(data)
})

fs.readFile('data.json','utf8', (err,data)=>{
  let result = JSON.parse(data)
  if(err){
    console.log(err)
    return
  }
  console.log(result[0].name)
})


let dataRead = (err,data) =>{
  if(err){
    console.log(err)
    return
  }
  let result = JSON.parse(data)
  console.log(result[0].name)
  console.log(averageNutritions(data))
  console.log(orderById(data))
}

fs.readFile('data.json','utf8',dataRead)

let averageNutritions = (data) => {
  let result = JSON.parse(data)
   let toRet = {
    carbohydrates: 0,
    protein: 0,
    fat: 0,
    calories: 0,
    sugar: 0
}

 for(let item of result){
  toRet.carbohydrates += item.nutritions.carbohydrates
  toRet.protein += item.nutritions.protein
  toRet.fat += item.nutritions.fat
  toRet.calories += item.nutritions.calories
  toRet.sugar += item.nutritions.sugar
 }
 toRet.carbohydrates /= result.length
 toRet.protein /= result.length
 toRet.fat /= result.length
 toRet.calories /= result.length
 toRet.sugar /= result.length
 return toRet
}

let orderById = (data) => {
  let result = JSON.parse(data)
  result.sort((a,b)=> a.id-b.id)
  return result
}



// DON'T MODIFY THE CODE BELOW THIS LINE

let toExport;

try {
  toExport = [
    { name: "averageNutritions", content: averageNutritions, type: "function" },
    { name: "dataRead", content: dataRead, type: "function" }
  ]

} catch (error) {
  toExport = { error: error.message }
}

export { toExport };