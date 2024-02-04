// Write the Backend tasks here
let word = "Server"
let time = 1000;
for(let i =0; i<5;i++){
   setTimeout(()=>{
    if(i==0)
console.log(word)
if(i==1)
console.log(word.split("").reverse().join(""))
if(i==2)
console.log(word.length)
if(i==3)
console.log(word.length*3)
if(i==4)
console.log(word.length/5)
},time)
time+=1000
}