import { products } from '/data.js';


const divElement = function (content) {
  return `<div>${content}</div>`;
}

const loadEvent = function () {

  // Write your JavaScript code after this line
  
  let element = document.createElement("div");
  element.id = "root";
  document.body.appendChild(element);
  let rootElement = document.getElementById("root");

  function divElement(product) {
    let obj = product.details;
    let albumHtml = `<div>
    <h1 class="album-title">${product.id} - ${product.name}</h1>
    <div class="album-details" style="display: none;">
      <h2>Price is ${product.price}</h2>
      ${obj
        .map(
          (song) => `<h2>${song.name}</h2>
          <h4>The composer is ${song.composer}</h4>
          <h4>This song has ${song.milliseconds} milliseconds</h4>`
        )
        .join("")}
    </div>
    <button class="album-button">+</button>
  </div>`;

    return albumHtml;
  }

  products.forEach((product) => {
    let productDiv = divElement(product);
    rootElement.insertAdjacentHTML("beforeend", productDiv);
  });

  // Add event listeners to buttons for collapsible functionality
  const albumButtons = document.querySelectorAll(".album-button");
  albumButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const albumDetails = button.previousElementSibling;
      const albumTitle = button.nextElementSibling;
      albumDetails.style.display = albumDetails.style.display === "none" ? "block" : "none";
      button.textContent = albumDetails.style.display === "none" ? "+" : "-";
      albumTitle.classList.toggle("collapsed");
    });
  });



  // Write your JavaScript code before this line

}

window.addEventListener("load", loadEvent);
