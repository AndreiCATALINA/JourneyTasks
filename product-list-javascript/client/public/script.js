import { products } from '/data.js';


const divElement = function (content){
  return `<div>${content}</div>`;
}

const loadEvent = function() {

  // Write your JavaScript code after this line

  let element = document.createElement('div')
  element.id = 'root'
  document.body.appendChild(element)
  let rootElement =document.getElementById('root')

  function divElement(product){
    let obj = product.details
    return` 
    <div>
      <h1>${product.id}</h1>
      <h1>${product.name}</h1>
      <h2>Price is ${product.price}</h2>
      ${obj.map(song=> `<h2>${song.name}</h2>
      <h4>The composer is ${song.composer}</h4>
      <h4>This song have ${song.milliseconds} milliseconds</h4>
      `).join('')}
    </div>
          
    `
  }
  products.forEach(element => {
    let productDiv = divElement(element)
    rootElement.insertAdjacentHTML('beforeend',productDiv)
  });

  
  // Write your JavaScript code before this line

}

window.addEventListener("load", loadEvent);
