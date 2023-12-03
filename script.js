const counter = document.querySelector(".counter");
const odd = document.querySelector(".odd h1");
const even = document.querySelector(".even h1");
const div3 = document.querySelector(".div3 h1");
const div5 = document.querySelector(".div5 h1");
const div15 = document.querySelector(".div15 h1");
let counterNumber = 0;

function createBox(operation) {
    const list = document.querySelector(`.${operation} ul`);
    const newListItem = document.createElement('li');
    newListItem.innerText = counterNumber;
    list.appendChild(newListItem);
    const operationHeader = document.querySelector(`.${operation} h1`);
    if (operationHeader) {
        operationHeader.style.color = "white";
    }
    newListItem.addEventListener('click' , (e) => {
        newListItem.remove();
    });
}
function sortNumbers() {
    if (counterNumber % 15 === 0) {
        createBox('div15');
    } else if (counterNumber % 5 === 0) {
        createBox('div5');
    } else if (counterNumber % 3 === 0) {
        createBox('div3');
    } else if (counterNumber % 2 === 0) {
        createBox('even');
    } else {
        createBox('odd');
    }
}

function highlightName() {

}

counter.addEventListener("click", (e) => {
    counterNumber++;
    counter.innerText = counterNumber;
    sortNumbers();
});

