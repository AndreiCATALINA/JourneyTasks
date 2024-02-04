const loadEvent = function () {

  // Write your JavaScript code after this line

  const rootDiv = document.getElementById('root');

  // Create and append the elements
  for (let i = 0; i < 10; i++) {
    const element = document.createElement('div');
    element.textContent = `Element ${i + 1}`;
  
    // Set the properties for each element
    element.style.width = `${Math.floor(Math.random() * 200 + 50)}px`;
    element.style.height = `${Math.floor(Math.random() * 200 + 50)}px`;
    element.style.padding = `${Math.floor(Math.random() * 20 + 5)}px`;
    element.style.border = `2px solid black`;
    element.style.margin = `${Math.floor(Math.random() * 20 + 5)}px`;
    element.style.position = 'relative';
    element.style.transform = `rotate(${Math.floor(Math.random() * 360)}deg)`;
    element.style.transition = 'transform 0.5s ease-in-out';
    
    if (i === 0) {
      element.style.background = `linear-gradient(rgb(${i + 100}, ${i + 47}, ${i + 69}), rgb(${i + 10}, ${i + 20}, ${i + 30}))`;
    } else if (i === 1) {
      element.style.background = `linear-gradient(rgb(${i + 10}, ${i + 78}, ${i + 99}), rgb(${i + 3}, ${i + 44}, ${i + 150}))`;

    } else if (i === 2) {
      element.style.background = `linear-gradient(to right, rgb(${i + 50}, ${i + 30}, ${i + 90}), rgb(${i + 20}, ${i + 60}, ${i + 80}))`;
    } else {
      element.style.background = `linear-gradient(rgb(${i + 8}, ${i + 240}, ${i + 60}), rgb(${i + 30}, ${i + 60}, ${i + 70}))`;
    }
  
    rootDiv.appendChild(element);
  }


  
    // Create and append the elements
    for (let i = 0; i < 3; i++) {
      const element = document.createElement('div');
      element.textContent = `Element ${i + 1}`;
  
      // Set the text properties for each element
      switch (i) {
        case 0:
          element.style.fontSize = '20px';
          element.style.fontStretch = 'ultra-expanded';
          element.style.fontWeight = 'bold';
          element.style.lineHeight = '1.5';
          element.style.color = 'red';
          element.style.textDecoration = 'underline';
          element.style.textShadow = '1px 1px 1px black';
          element.style.letterSpacing = '2px';
          element.style.background ='aliceblue';
          break;
        case 1:
          element.style.fontSize = '24px';
          element.style.fontStretch = 'condensed';
          element.style.fontWeight = 'normal';
          element.style.lineHeight = '1.2';
          element.style.color = 'blue';
          element.style.textDecoration = 'line-through';
          element.style.textShadow = '2px 2px 2px gray';
          element.style.letterSpacing = '-1px';
          element.style.background ='skyblue';
          break;
        case 2:
          element.style.fontSize = '18px';
          element.style.fontStretch = 'normal';
          element.style.fontWeight = '700';
          element.style.lineHeight = '1.8';
          element.style.color = 'green';
          element.style.textDecoration = 'none';
          element.style.textShadow = 'none';
          element.style.letterSpacing = '4px';
          element.style.background ='red';
          break;
      }
    
    }
 
  // Write your JavaScript code before this line

}

window.addEventListener("load", loadEvent);
