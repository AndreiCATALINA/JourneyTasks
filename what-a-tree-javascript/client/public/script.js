import { plants } from '/data.js';


const divElement = function (content){
  return `<div>${content}</div>`;
}

const loadEvent = function() {

  // Write your JavaScript code after this line
  const element = document.createElement('div')

  element.id = 'root';
   
  document.body.appendChild(element)
  const rootElement = document.getElementById('root');

  
  function divElement(plantName,species) {
  let arr = species.split(",")
    return `<div>
              <h2>${plantName}<h2/>
              ${arr.map(species => `<h3>${species}</h3>`).join("")}
            </div>`;
  }
  plants.forEach(value => {
    let plantDiv = divElement(value.name,value.species);
    rootElement.insertAdjacentHTML('beforeend', plantDiv);
  })


  // Write your JavaScript code before this line

}

window.addEventListener("load", loadEvent);
