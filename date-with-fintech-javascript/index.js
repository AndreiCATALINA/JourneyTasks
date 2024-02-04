import * as fs from 'node:fs';

let DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];


fs.readFile('data.json','utf8',(err,data)=>{
   if(err){
     console.error(err)
     return
   }
   let result = JSON.parse(data)
   change(result)
  holidaysByYear(result)

 })

 let change = (object) =>{
  for (let contry in object){
    // console.log( contry )
    let eveniment=object[contry].events;
    for(let data of eveniment){
      // console.log(data)
      const arr = data.date.split('-');
      let x = new Date(data.date)
      data.date={
        year: Number(arr[0]),
        month: Number(arr[1]),
        day: Number(arr[2]),
        weakDay: DAYS[x.getDay()]
      }
      console.log(data.date)
    }
    }
  }

  let holidaysByYear =(object) =>{
    let holiday={};
    for(let countrey in object){
      let event = object[countrey].events
    for(let i=0; i<event.length; i++){
      let year=event[i].date.year;
      if(holiday[year]){
        holiday[year]+=1;
      }
      else{
        holiday[year]=1;
      }
    }
  }
    console.log(holiday);
  }

  
  


// DON'T MODIFY THE CODE BELOW THIS LINE

let toExport;

try {
  toExport = [
    { name: "holidaysByYear", content: holidaysByYear, type: "function" }
  ]

} catch (error) {
  toExport = { error: error.message }
}

export { toExport };