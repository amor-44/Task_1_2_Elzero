//Dom

let addInput = document.querySelector(".classes-to-add");
let removeInput = document.querySelector(".classes-to-remove");
let current = document.querySelector(".current");
let displayContainer = document.querySelector(".classes-list div");

function refreshClasses() {
  displayContainer.innerHTML = "";

  let classes = Array.from(current.classList).sort();

  if (classes.length > 0) {
    classes.forEach((cls) => {
      if (cls !== "current" && cls !== "element") {
        let span = document.createElement("span");
        span.textContent = cls;
        displayContainer.appendChild(span);
      }
    });
  } else {
    displayContainer.textContent = "No Classes To Show";
  }
}

refreshClasses();

addInput.onblur = function () {
  let val = addInput.value.trim().toLowerCase();
  if (val !== "") {
    let parts = val.split(" ");
    parts.forEach((p) => {
      if (p !== "") current.classList.add(p);
    });
    addInput.value = "";
    refreshClasses();
  }
};

removeInput.onblur = function () {
  let val = removeInput.value.trim().toLowerCase();
  if (val !== "") {
    let parts = val.split(" ");
    parts.forEach((p) => {
      if (p !== "") current.classList.remove(p);
    });
    removeInput.value = "";
    refreshClasses();
  }
};

// Dom => 3

let ourElement = document.querySelector(".our-element");
let paragraph = document.querySelector("p");

paragraph.remove();

let startDiv = document.createElement("div");
startDiv.className = "start";
startDiv.title = "Start Element";
startDiv.setAttribute("data-value", "Start");
startDiv.textContent = "Start";

let endDiv = document.createElement("div");
endDiv.className = "end";
endDiv.title = "End Element";
endDiv.setAttribute("data-value", "End");
endDiv.textContent = "End";

ourElement.before(startDiv);
ourElement.after(endDiv);

document.querySelectorAll("body *").forEach((el) => {
  el.onclick = function () {
    console.log(`This Is ${el.tagName.toLowerCase()}`);
  };
});

// BOM

let userInput = prompt("Print Num From - TO", "Example: 5-20");
if (userInput !== null) {
  let spiltNum = userInput.split("-");

  let num1 = parseInt(spiltNum[0]);
  let num2 = parseInt(spiltNum[1]);

  if (!isNaN(num1) && !isNaN(num2)) {
    if (num1 > num2) [num1, num2] = [num2, num1];

    let output = "";

    for (let i = num1; i <= num2; i++) {
      output += i + "<br>";
    }
    document.getElementById("result").innerHTML = output;
  }
}

function createPopup() {
  let mainDiv = document.createElement("div");
  let heading = document.createElement("h2");
  let text = document.createElement("p");
  let closeBtn = document.createElement("span");

  heading.textContent = "Welcome";
  text.textContent = "Welcome To CIS Team";
  closeBtn.textContent = "x";
  closeBtn.className = "close";

  Object.assign(mainDiv.style, {
    width: "400px",
    padding: "40px 20px",
    backgroundColor: "#f5f5f5",
    border: "1px solid #ddd",
    textAlign: "center",
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  });

  Object.assign(closeBtn.style, {
    position: "absolute",
    top: "-15px",
    right: "-15px",
    backgroundColor: "red",
    color: "white",
    width: "30px",
    height: "30px",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    fontWeight: "bold",
  });

  mainDiv.append(closeBtn, heading, text);

  document.body.appendChild(mainDiv);

  closeBtn.onclick = () => mainDiv.remove();
}

setTimeout(createPopup, 3000);

let downCount = document.createElement("div");
downCount.innerHTML = "10";
document.body.appendChild(downCount);

function counterDown() {
  downCount.innerHTML -= 1;

  if (downCount.innerHTML === "5") {
    window.open(
      "https://elzero.org",
      "_blank",
      "width=400,height=600,left100,top1000",
    );
  }

  if (downCount.innerHTML === "0") {
    clearInterval(counter);
    window.location.href = "https://elzero.org";
  }
}
let counter = setInterval(counterDown, 1000);
