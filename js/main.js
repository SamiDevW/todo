//FUNCTIONS IMPORT :
import { orientationMode } from "./modules/orientationMode.js";
import { collapseList, btnCollapse } from "./modules/collapseList.js";
import { localImport } from "./modules/localImport.js";
import { displayTodo } from "./modules/displayTodo.js";
import { clearLocalArrays } from "./modules/clearLocalArrays.js";
import { loadImg } from "./modules/loadImg.js"
// HTML SELECTORS:
let ourList = document.querySelector(".ourList");
let savedElements = document.querySelector(".savedElements");
let inputTodo = document.querySelector(".todo");
let inputSearch = document.querySelector(".search");
let addList = document.querySelector(".add");
let delList = document.querySelector(".del");
let btnVertical = document.querySelector('.vertical');
let data = localImport("array");
getSavedData();
// EVENTS :
delList.addEventListener("click", clearLocalArrays)
addList.addEventListener("click", () => {
    if (ourList.innerHTML === '') {
        todoInputArea();
        inputTodo.focus();
        inputTodo.value = '';
    }
})
inputTodo.addEventListener('keyup', keyUp)
btnCollapse.addEventListener('click', collapseList)
btnVertical.addEventListener('click', orientationMode)
inputSearch.addEventListener('keyup', (e) => {
    let q = e.target.value;
    let filteredSaved = data.filter(x => x.post.toLowerCase().includes(q));
    savedElements.innerHTML = '';
    filteredSaved.forEach(x => {
        displayTodo(savedElements, x.postImg, x.post)
    })
})
// FUNCTIONS :
function getSavedData() {
    let data = localImport("array");
    data.forEach(x => displayTodo(savedElements, x.postImg, x.post))
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
function saveTodo() {
    data = localImport('array')
    let img = document.querySelector('.ourList img')
    let txt = document.querySelector('.ourList .text')
    let postTxt = txt.textContent
    let postImg = img.getAttribute('src')
    console.log(img.src);
    data.unshift({
        post: postTxt, postImg
    })
    localStorage.setItem('array', JSON.stringify(data));
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
