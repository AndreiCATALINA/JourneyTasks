// YOUR CODE COMES HERE

function evenOrOdd(string){
  let number = Number(string);
  if(number%2==0){
    return "Even"
  }else{
    return "Odd"
  }
}

function basicOperations(operations,value1,value2){
 if(operations=== "+"){
   return value1+value2
    
 }
 if(operations=== "-"){
  return  value1-value2
    
 }
 if(operations=== "*"){
    return  value1*value2
      
   }
   if(operations=== "/"){
    return  value1/value2
      
   }
   if(operations=== "%"){
    return  value1%value2
      
   }
}

function totalPoints(object){
let x = 0;//our tem
let result;
    for(let match in object){
    result = object[match].split(":")
    if(Number(result[0])>Number(result[1])){
        x +=3
    }
    if(Number(result[0])==Number(result[1])){
        x +=1
    }
    
}
return x
}



function largestNumber(a, b, c) {
  let val1 = a+b+c;
  let val2 = a*b*c;
  let val3 = a*(b+c);
  let val4 = (a+b)*c;
  let maxVal= val1;

  if(val2>maxVal){
    maxVal = val2;
  }
  else if(val3>maxVal){
    maxVal = val3;
  }
  else if(val4 > maxVal){
    maxVal = val4
  }
  return maxVal;
}

function index(array,number){
 if(!array.includes(number)){
  return -1
 }
 let result =1;
 for(let i=0; i<number;i++){
  result *=array[number]
 }
 return result
}

console.log(index([1,2,3,4,7,9,10],5))

function quarterOfTheYear(month){
  if(month<=3){
    return 1
  }
  if(month<= 6 && month>3){
    return 2
  }
  if(month<= 9 && month>6){
    return 3
  }
  if(month<= 12 && month>6){
    return 4
  }
  return "Please select a number from 1 to 12"
}


function century(year){
  let century = 1;
  while(year > century *100){
    century++
  }
  return century
}


// function formTheMinimum(numbers){
//   let arr=[0];
//   let nr=0;
//   for(let i=0; i<=9; i++){
//       arr[i]=0;
//   }
//   for(let i=0; i<numbers.length; i++){
//       arr[numbers[i]]=1;
//   }
//   for(let i=1; i<=9; i++){
//       if(arr[i]!=0){
//           nr=nr*10+i;
//           if(arr[0]!=0){
//               nr=nr*10;
//               arr[0]--;
//           }
//       }
//   }
//   return nr;
// }


function formTheMinimum(numbers){
 let num = [...new Set(numbers)];//scoate duplicatele 
 num.sort((a,b)=>a-b);
 let final = Number(num.join(""))
return final 

}

//console.log(formTheMinimum([1,3,3,3,3,3,3,3,3,3,3,0]))



//1. Sa despartim numerele
//2. Sa ordonam crescator numerele despartite
//2.1. sa scapam de dubluri
//3. sa lipim numerele impreuna fara virgula 


// DO NOT MODIFY THE CODE BELOW THIS LINE
let toExport;

try {
    toExport = [
        {name: "evenOrOdd", content: evenOrOdd, type: "function"},
        {name: "basicOperations", content: basicOperations, type: "function"},
        {name: "totalPoints", content: totalPoints, type: "function"},
        {name: "largestNumber", content: largestNumber, type: "function"},
        {name: "index", content: index, type: "function"},
        {name: "quarterOfTheYear", content: quarterOfTheYear, type: "function"},
        {name: "century", content: century, type: "function"},
        {name: "formTheMinimum", content: formTheMinimum, type: "function"}
    ]
} catch (error) {
    toExport = {error: error.message}
}

export {toExport};

