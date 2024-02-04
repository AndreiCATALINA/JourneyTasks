
const greetings = ["Hello", "Bye", "Ciao", "Cheers", "Bests"];

const divElement = function (content){
  return `<div> ${content} </div>`;
}

const loadEvent = function() {

  // Write your JavaScript code after this line

  document.getElementById("header").insertAdjacentHTML('beforeend',`<h3>Level 3 subtitle</h3>`);

for(let greeting of greetings ){
  document.getElementById('body').insertAdjacentHTML('beforeend',divElement(greeting))
}
  // Write your JavaScript code before this line

}

window.addEventListener("load", loadEvent);
