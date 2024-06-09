import { verticalMode } from "./modules/verticalmode.js";
import { collapseList, btnCollapse } from "./modules/collapseList.js";
import { localImport } from "./modules/localImport.js";
// importing html elements
let ourList = document.querySelector(".ourList");
let savedElements = document.querySelector(".savedElements");
let inputTodo = document.querySelector(".todo");
let inputSearch = document.querySelector(".search");
let addList = document.querySelector(".add");
let delList = document.querySelector(".del");
let btnVertical = document.querySelector('.vertical');

getAllData();
//Events for  html created Elements
delList.addEventListener("click", deleteAll)
addList.addEventListener("click", createLi)
inputTodo.addEventListener('keyup', keyUp)
btnCollapse.addEventListener('click', collapseList)
btnVertical.addEventListener('click', verticalMode)
// get saved data (img + text)
function getAllData() {
    ourList.innerHTML = "";
    savedElements.innerHTML = "";
    let data = localImport("array");
    let dataImg = localImport("arrayImg");
    for (let i = 0; i < data.length; i++) {
        createNewLi(data[i], dataImg[i], savedElements);
    }

}
// data clear
function deleteAll() {
    ourList.innerHTML = "";
    localStorage.setItem('array', JSON.stringify([]));
    localStorage.setItem('arrayImg', JSON.stringify([]));
    getAllData();
}
//card creation by users
function createLi() {
    let data = localImport("array");
    console.log(data)
    if (data.find(el => el === inputTodo.value) || inputTodo.value === '') {
        alert('Existing todo or invalid input')
        return
    } else {
        createNewLi(inputTodo.value, null, ourList)
        inputTodo.value = "";
    }

}
// default card creating for saved data and users
function createNewLi(text, imgSrc = '', target) {
    // card / appending to ourList
    let card = document.createElement('div');
    card.setAttribute('class', 'card');
    target.appendChild(card);
    // Html in cards
    let list = document.createElement("p");
    list.classList.add("text");
    card.appendChild(list);
    /// appending img and btns for saving +delelting
    createContainer(card, imgSrc);
    // butns container to style
    let btnDiv = document.createElement('div')
    btnDiv.setAttribute('class', 'btnDiv');
    card.appendChild(btnDiv);
    //// delete
    let deleteBtn = document.createElement("button");
    deleteBtn.setAttribute('class', 'btn delete');
    deleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i>'
    deleteBtn.addEventListener("click", () => { deleteCard(text) });
    btnDiv.appendChild(deleteBtn);
    //// save
    let saveBtn = document.createElement("button");
    saveBtn.setAttribute('class', 'btn save');
    saveBtn.innerHTML = '<i class="fa-regular fa-floppy-disk "></i>'
    saveBtn.addEventListener("click", () => saveTodo(text, imgSrc));
    btnDiv.appendChild(saveBtn);
    // text used to create the paragraph
    list.textContent = text;
    // remove  events to make the user make only one inoput at a time
    addList.removeEventListener("click", createLi)
    inputTodo.removeEventListener('keyup', keyUp)
}
// Container of the image
function createContainer(parent, imgSrc) {
    // input type file
    let fileInput = document.createElement("input");
    fileInput.setAttribute('type', 'file');
    fileInput.setAttribute('class', 'fileInput');
    fileInput.setAttribute('name', 'image');
    // id for the label
    fileInput.setAttribute('id', 'fileInput');

    // depends on the parent we choose
    parent.appendChild(fileInput);
    //label for input to design
    let label = document.createElement('label')
    label.setAttribute('class', 'inputLabel')
    label.setAttribute('for', 'fileInput')
    label.innerHTML = 'Upload Image'
    parent.appendChild(label)
    // preview div
    let div = document.createElement("div");
    div.setAttribute('class', 'preview');
    parent.appendChild(div)
    let img = document.createElement('img');
    div.innerHTML = ''; // Clear the preview div
    div.appendChild(img);
    if (imgSrc) {
        img.src = imgSrc;
        div.style.display = 'block'
    }
    else {
        getImg(fileInput, div, img);
    }
}
// image source + file reader
function getImg(fileInput, div, img) {
    fileInput.addEventListener('change', (e) => {
        const file = e.target.files[0]; // in this case e.target = fileInput
        if (file) {
            div.style.display = 'block'
            const reader = new FileReader();
            reader.onload = (e) => {
                img.src = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    })

}
// item = textContent of the taxt para
function deleteCard(item) {
    let data = localImport("array");
    let dataImg = localImport("arrayImg");
    let index = data.indexOf(item);
    if (index > -1) {
        data.splice(index, 1);
        dataImg.splice(index, 1);
    }
    localStorage.setItem('array', JSON.stringify(data));
    localStorage.setItem('arrayImg', JSON.stringify(dataImg));
    getAllData();
    // when data are save get back event listeners
    addList.addEventListener("click", createLi)
    inputTodo.addEventListener('keyup', keyUp)


}
// save the double data in 2 arrays
function saveTodo(text) {
    let data = localImport("array");
    let dataImg = localImport("arrayImg");
    data.unshift(text)
    // let index = data.indexOf(text);
    let img = document.querySelector(".preview img");
    let imgSrc = img;
    // let imgSrc = img[index];
    dataImg.unshift(imgSrc.src)

    localStorage.setItem('array', JSON.stringify(data));
    localStorage.setItem('arrayImg', JSON.stringify(dataImg));
    getAllData();
    // when data are save get back event listeners
    addList.addEventListener("click", createLi)
    inputTodo.addEventListener('keyup', keyUp)

}
function keyUp(e) {

    if (e.key === 'Enter') {
        createLi();
        inputTodo.focus()
    }


}


inputSearch.addEventListener('keyup', (e) => {
    // let savedText = document.querySelectorAll(".savedElements .card .text");
    // let savedTextArray = [];
    // savedText.forEach(x => {
    //     savedTextArray.push(x.textContent);

    // });
    let data = localImport("array");
    let dataImg = localImport("arrayImg");
    let q = e.target.value;
    let filteredSaved = data.filter(x => x.toLowerCase().includes(q));
    console.log(filteredSaved);
    savedElements.innerHTML = '';
    for (let i = 0; i < filteredSaved.length; i++) {
        createNewLi(filteredSaved[i], dataImg[i], savedElements);
    }

})
