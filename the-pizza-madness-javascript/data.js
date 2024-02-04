// YOUR CODE COMES HERE

function stringRepeat(number, str) {
    let result = '';
    for (let i = 0; i < number; i++) {
      result += str;
    }
    return result;
  }
 
  function noSpace(str){
    let result ="";
    for(let i =0;i<str.length;i++){
        if(str[i] !== " "){
            result += str[i]
        }
    }
    return result
  }

  function numberToString(integer){
   let result= integer.toString()
    return result
  }

function booleanToString(boolean){
    let string = boolean.toString()
    return string
}

function abrevName(string){
  let words = string.split(" ");
  let initials = "";
  for(let i=0; i<words.length;i++){
    initials += words[i][0].toUpperCase()+ ".";
  }
  return initials
}

function nameLength(string){
    let words = string.split(" ");
    let lengths=[];
    for(let i=0;i<words.length;i++){
        lengths.push(words[i]+ " " + words[i].length)
    }
    return lengths
}

function removeOrders(string) {
    let arr = string.split(",");
    let result = "";
    for (let i = 1; i < arr.length - 1; i++) {
      result += arr[i] + ",";
    }
    return result.slice(0,-1)
  }

function foodMenu(list){
    for(let i=0; i< list.length;i++){
        list[i] = (i+1)+ ". " + list[i]
    }
    return list;
}














// DO NOT MODIFY THE CODE BELOW THIS LINE
let toExport;

try {
    toExport = [
        {name: "stringRepeat", content: stringRepeat, type: "function"},
        {name: "noSpace", content: noSpace, type: "function"},
        {name: "numberToString", content: numberToString, type: "function"},
        {name: "booleanToString", content: booleanToString, type: "function"},
        {name: "abbrevName", content: abbrevName, type: "function"},
        {name: "nameLength", content: nameLength, type: "function"},
        {name: "removeOrders", content: removeOrders, type: "function"},
        {name: "foodMenu", content: foodMenu, type: "function"}
    ]
} catch (error) {
    toExport = {error: error.message}
}

export {toExport};