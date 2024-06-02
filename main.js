
let ourList = document.querySelector(".ourList");
let input = document.querySelector(".input");
let addList = document.querySelector(".add");
let delList = document.querySelector(".del");
let saveGroupList = document.querySelector(".sav");
let getDataBtn = document.querySelector(".get");
//

getAllData();
function getAllData() {
    ourList.innerHTML = "";
    let data = getData("array");
    let dataImg = getData("arrayImg");

    for (let i = 0; i < data.length; i++) {
        createNewLi(data[i], dataImg[i]);

    }

}
delList.addEventListener("click", deleteAll)
addList.addEventListener("click", createLi)
input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        createLi();
        input.focus()
    }
})
getDataBtn.addEventListener("click", getAllData)


function createLi() {
    createNewLi(input.value)
    // saveLists(input.value);


    input.value = "";
}
function deleteAll() {
    ourList.innerHTML = "";
    localStorage.setItem('array', JSON.stringify([]));
    localStorage.setItem('arrayImg', JSON.stringify([]));
    getAllData();
}
// function saveLists(item) {
//     let data = getData("array");
//     data.push(item)
//     localStorage.setItem('array', JSON.stringify(data));
// }
// function saveImgLS(item) {
//     let data = getData("arrayImg");
//     data.push(item)
//     localStorage.setItem('arrayImg', JSON.stringify(data));

// }
//Getting and creating data for LS
function getData(key) {
    let data = JSON.parse(localStorage.getItem(key)) || [];
    return data
}
function createNewLi(text, imgSrc = '') {
    // saveImgLS('')
    let card = document.createElement('div');
    card.setAttribute('class', 'card');
    ourList.appendChild(card);
    let list = document.createElement("p");
    list.classList.add("text");
    card.appendChild(list);
    createContainer(card, imgSrc);
    let deleteBtn = document.createElement("button");
    deleteBtn.setAttribute('class', 'btn');
    deleteBtn.innerText = "Delete";
    card.appendChild(deleteBtn);
    deleteBtn.addEventListener("click", deleteOus);
    let saveBtn = document.createElement("button");
    saveBtn.setAttribute('class', 'btn');
    saveBtn.innerText = "save";
    card.appendChild(saveBtn);
    saveBtn.addEventListener("click", () => saveTodo(text, imgSrc));
    list.textContent = text;
}
function deleteOus(item) {
    let data = getData("array");
    let dataImg = getData("arrayImg");
    let index = data.indexOf(item);
    if (index > -1) {
        data.splice(index, 1);
        dataImg.splice(index, 1);
    }
    localStorage.setItem('array', JSON.stringify(data));
    localStorage.setItem('arrayImg', JSON.stringify(dataImg));
    getAllData();

}
function createContainer(parent, imgSrc) {
    let fileInput = document.createElement("input");

    fileInput.setAttribute('type', 'file');
    fileInput.setAttribute('class', 'fileInput');
    fileInput.setAttribute('name', 'image');

    parent.appendChild(fileInput);
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
function getImg(fileInput, div, img) {
    fileInput.addEventListener('change', (e) => {
        const file = e.target.files[0]; // in this case e.target = fileInput

        if (file) {
            div.style.display = 'block'
            const reader = new FileReader();
            reader.onload = (e) => {
                img.src = e.target.result;
                // saveImgLS(e.target.result);
            };
            reader.readAsDataURL(file);
        }
    })

}

function saveTodo(text) {
    let data = getData("array");
    let dataImg = getData("arrayImg");
    data.push(text)
    let index = data.indexOf(text);
    let img = document.querySelectorAll(".preview img");
    let imgSrc = img[index];
    dataImg.push(imgSrc.src)
    // if (array.find(el => el === text) || task.value === '') {
    //     console.log(task.value, 'existe déja');
    // } else {

    //     console.log(task.value, 'no existe déja');
    // }
    localStorage.setItem('array', JSON.stringify(data));
    localStorage.setItem('arrayImg', JSON.stringify(dataImg));
    getAllData();

}
function getStockedImg(dataImg) {
    for (let index = 0; index < dataImg.length; index++) {
        const img = document.createElement('img');
        img.src = dataImg[index];
        previewDiv.innerHTML = ''; // Clear the preview div
        previewDiv.appendChild(img);
    }

}



// todo
//store images
//  hide input display















// in automatic saving
// save task array.push(task.value)
//setItem
// if (array.find(el => el === task.value) || task.value ===''){
//     console.log(task.value , 'existe déja');
// }else {
// do the saving
//     console.log(task.value , 'no existe déja');
// }

// must my input.value

// The target property returns the element where the event occured.

// .


















// postImgBtn.addEventListener('click', postImg)

// localStorage.removeItem('key');
// localStorage.clear;
// array.sort() pour trier
// array.reverse() pour trier à l'inverse
// indexOf()
//array.find(element => element === "theElement")
// import createLi from './createElement.js';
// import deleteLi from './deleteElement.js';
// import saveLists from './SaveToLS.js';
// import getData from './getFromLS.js';
// import postImg from './postImg.js';