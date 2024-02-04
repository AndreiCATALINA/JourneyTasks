const element = function (tag, inner) {
  return `<${tag}>${inner}</${tag}>`;
}

const loadEvent = function () {

  // Write your JavaScript code after this line

  const rootElement = document.getElementById("root");
  ///CREATE BUTTON
  const button1 = `<button id="0"> 0 </button>`;
  const button2 = `<button id="1"> 1 </button>`;
  const button3 = `<button id="2"> 2 </button>`;
  const button4 = `<button id="3"> 3 </button>`;
  const button5 = `<button id="4"> 4 </button>`;
  const button6 = `<button id="5"> 5 </button>`;
  const button7 = `<button id="6"> 6 </button>`;
  const button8 = `<button id="7"> 7 </button>`;
  const button9 = `<button id="8"> 8 </button>`;
  const button10 = `<button id="9"> 9 </button>`;

  ///DISPLAY BUTTON
  rootElement.insertAdjacentHTML("beforeend", button1);
  rootElement.insertAdjacentHTML("beforeend", button2);
  rootElement.insertAdjacentHTML("beforeend", button3);
  rootElement.insertAdjacentHTML("beforeend", button4);
  rootElement.insertAdjacentHTML("beforeend", button5);
  rootElement.insertAdjacentHTML("beforeend", button6);
  rootElement.insertAdjacentHTML("beforeend", button7);
  rootElement.insertAdjacentHTML("beforeend", button8);
  rootElement.insertAdjacentHTML("beforeend", button9);
  rootElement.insertAdjacentHTML("beforeend", button10);

  ///CREATE PARAGRAPH
  const paragraph1 = `<p id=10> 10 </p>`;
  const paragraph2 = `<p id=11> 11 </p>`;
  const paragraph3 = `<p id=12> 12 </p>`;
  const paragraph4 = `<p id=13> 13 </p>`;
  const paragraph5 = `<p id=14> 14 </p>`;
  const paragraph6 = `<p id=15> 15 </p>`;
  const paragraph7 = `<p id=16> 16 </p>`;
  const paragraph8 = `<p id=17> 17 </p>`;
  const paragraph9 = `<p id=18> 18 </p>`;
  const paragraph10 = `<p id=19> 19 </p>`;


  ///DISPLAY PARAGRAPH
  rootElement.insertAdjacentHTML("beforeend", paragraph1);
  rootElement.insertAdjacentHTML("beforeend", paragraph2);
  rootElement.insertAdjacentHTML("beforeend", paragraph3);
  rootElement.insertAdjacentHTML("beforeend", paragraph4);
  rootElement.insertAdjacentHTML("beforeend", paragraph5);
  rootElement.insertAdjacentHTML("beforeend", paragraph6);
  rootElement.insertAdjacentHTML("beforeend", paragraph7);
  rootElement.insertAdjacentHTML("beforeend", paragraph8);
  rootElement.insertAdjacentHTML("beforeend", paragraph9);
  rootElement.insertAdjacentHTML("beforeend", paragraph10);


  rootElement.addEventListener("click", (event) => {
    console.log(event.target.tagName);
  });



  rootElement.addEventListener("click", (event) => {
    const target = event.target;

    // Toggle active class on the clicked element
    
    const buttons = document.querySelectorAll("button.active");
    buttons.forEach((button) => {
      button.classList.remove("active");
    });

    const paragraphs = document.querySelectorAll("p.active");
    paragraphs.forEach((paragraph) => {
      paragraph.classList.remove("active");
    });

    // If clicked element is a button, find the corresponding paragraph and toggle active class
    if (target.tagName.toLowerCase() === "button") {
      const buttonId = parseInt(target.id);
      const paragraphId = buttonId + 10;
      const paragraph = document.getElementById(paragraphId.toString());
      paragraph.classList.toggle("active");
    }

    // If clicked element is a paragraph, find the corresponding button and toggle active class
    if (target.tagName.toLowerCase() === "p") {
      const paragraphId = parseInt(target.id);
      const buttonId = paragraphId - 10;
      const button = document.getElementById(buttonId.toString());
      button.classList.toggle("active");
    }
  });
  // Write your JavaScript code before this line

}

window.addEventListener("load", loadEvent);
