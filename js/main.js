import { verticalMode } from "./modules/verticalmode.js";
import { collapseList, btnCollapse } from "./modules/collapseList.js";
import { localImport } from "./modules/localImport.js";
import { displayTodo } from "./modules/displayTodo.js";
import { clearLocalArrays } from "./modules/clearLocalArrays.js";
import { loadImg } from "./modules/loadImg.js"
// importing html elements
let ourList = document.querySelector(".ourList");
let savedElements = document.querySelector(".savedElements");
let inputTodo = document.querySelector(".todo");
let inputSearch = document.querySelector(".search");
let addList = document.querySelector(".add");
let delList = document.querySelector(".del");
let btnVertical = document.querySelector('.vertical');
let data = localImport("array");
let dataImg = localImport("arrayImg");
//Events for  html created Elements
delList.addEventListener("click", clearLocalArrays)
addList.addEventListener("click", () => {
    if (ourList.innerHTML === '') {
        todoInputArea();
        inputTodo.focus()
    }
})
inputTodo.addEventListener('keyup', keyUp)
btnCollapse.addEventListener('click', collapseList)
btnVertical.addEventListener('click', verticalMode)
inputSearch.addEventListener('keyup', (e) => {
    let q = e.target.value;
    let filteredSaved = data.filter(x => x.toLowerCase().includes(q));
    console.log(filteredSaved);
    savedElements.innerHTML = '';
    for (let i = 0; i < filteredSaved.length; i++) {
        displayTodo(savedElements, dataImg[i], filteredSaved[i])
    }
})
getSavedData();
function getSavedData() {
    for (let i = 0; i < data.length; i++) {
        displayTodo(savedElements, dataImg[i], data[i])
    }
}
function todoInputArea() {
    if (data.find(x => x === inputTodo.value) || inputTodo.value === '') {
        alert('Existing todo or invalid input')
    }
    else {
        let texts = inputTodo.value;
        displayTodo(ourList, '', texts)
        document.querySelector(".fileInput").addEventListener('change', loadImg);
        document.querySelector(".save").addEventListener("click", saveTodo);
    }
}
// save the double data in 2 arrays
function saveTodo() {
    let img = document.querySelector('.ourList img')
    let txt = document.querySelector('.ourList .text')
    console.log(img.src);
    data.unshift(txt.textContent)
    dataImg.unshift(img.getAttribute('src'))
    localStorage.setItem('array', JSON.stringify(data));
    localStorage.setItem('arrayImg', JSON.stringify(dataImg));
    savedElements.innerHTML = '';
    ourList.innerHTML = '';
    getSavedData();
}

function keyUp(e) {
    if (e.key === 'Enter') {
        console.log(ourList.innerHTML);
        if (ourList.innerHTML === '') {
            todoInputArea();
            inputTodo.focus()
        }
    }
}