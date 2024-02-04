const loadEvent = function() {

  // Write your JavaScript code after this line
  
// Create a new element
var newElement = document.createElement('div');

newElement.innerHTML = `
  <div class="container">
    <div class="circle">
      <div class="circle">
        <div class="circle">
          <div class="circle">
            <div class="circle">
              <div class="circle">
                <div class="circle">
                  <div class="circle">
                    <div class="smallest-circle">
                      <div class="plus-sign">
                        +
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
`;

document.body.appendChild(newElement);

var styleElement = document.createElement('style');

styleElement.innerHTML = `
  .circle {
    height: 80%;
    width: 80%;
    background-color: rgba(67, 67, 249, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    border-radius: 50%;
  }

  .smallest-circle {
    background-color: rgba(67, 67, 249, 1);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 70%;
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
    border-radius: 50%;
  }

  .smallest-circle:hover {
    transform: rotate(45deg);
  }
`;

document.head.appendChild(styleElement);

  // Write your JavaScript code before this line

}

window.addEventListener("load", loadEvent);
