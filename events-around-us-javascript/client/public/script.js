const meButton = `<button id="me">Click me!</button>`;

const greetings = [`Hi`, `Hello`, `Ciao`, `Arrivederci`];

const loadEvent = function() {

  // Write your JavaScript code after this line
const rootElement = document.getElementById("root")
rootElement.insertAdjacentHTML('beforeend',meButton)

const meButtonElement = rootElement.querySelector("#me")

meButtonElement.addEventListener("click",function(){
  console.log('meButtonElement was clicked!')
})

const button2 = '<button id="greetings1">Hi</button>'
rootElement.insertAdjacentHTML('beforeend',button2)
const hiButton = rootElement.querySelector('#greetings1')

hiButton.addEventListener('click',function(){
  console.log('Hi')
})

const button3 = '<button id="greetings2">Hello</button>'
rootElement.insertAdjacentHTML('beforeend',button3)

const helloButton = rootElement.querySelector('#greetings2')

helloButton.addEventListener('click', function(){
  console.log("Hello")
} )

const button4 =' <button id="greetings3">Ciao</button>'
rootElement.insertAdjacentHTML('beforeend',button4)

const ciaoButton = rootElement.querySelector('#greetings3')

ciaoButton.addEventListener('click',function(){
  console.log('Ciao')
})

const button5 ='<button id="greetings4">Arrivederci</button> '
rootElement.insertAdjacentHTML('beforeend',button5)

const arrivederciButton = rootElement.querySelector('#greetings4')

arrivederciButton.addEventListener('click',function(){
  console.log('Arrivederci')
})


const button6 = '<button id= "where">Where am i?</button>'
rootElement.insertAdjacentHTML("beforeend",button6)

const whereAmI = rootElement.querySelector('#where')

whereAmI.addEventListener('click',function(event){
  console.log(event.composedPath())
})


const allButtons = document.querySelectorAll('button')

allButtons.forEach(function(item){
  item.addEventListener('click',function(event){
    console.log(event.target.textContent)
  })
})
  
rootElement.insertAdjacentHTML('beforeend',`<input id="input">`)

const inputElement = document.querySelector("#input")

inputElement.addEventListener("input",function(event){
  console.log(event.target.value)
})

  // Write your JavaScript code before this line

}

window.addEventListener("load", loadEvent);
