// importing html elements
let ourList = document.querySelector(".ourList");
let savedElements = document.querySelector(".savedElements");
let input = document.querySelector(".input");
let addList = document.querySelector(".add");
let delList = document.querySelector(".del");

//
getAllData();
//Events for  html created Elements
delList.addEventListener("click", deleteAll)
addList.addEventListener("click", createLi)
input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        createLi();
        input.focus()
    }
})

// get data using its key
function getData(key) {
    let data = JSON.parse(localStorage.getItem(key)) || [];
    return data
}
// get saved data (img + text)
function getAllData() {
    ourList.innerHTML = "";
    savedElements.innerHTML = "";
    let data = getData("array");
    let dataImg = getData("arrayImg");

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
    let data = getData("array");
    console.log(data)
    if (data.find(el => el === input.value) || input.value === '') {
        alert('Existing todo or invalid input')
        return
    } else {
        createNewLi(input.value, null, ourList)
        input.value = "";
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
    input.removeEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            createLi();
            input.focus()
        }
    })
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
    // when data are save get back event listeners
    addList.addEventListener("click", createLi)
    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            createLi();
            input.focus()
        }
    })


}
// save the double data in 2 arrays
function saveTodo(text) {
    let data = getData("array");
    let dataImg = getData("arrayImg");
    data.push(text)
    // let index = data.indexOf(text);
    let img = document.querySelector(".preview img");
    let imgSrc = img;
    // let imgSrc = img[index];
    dataImg.push(imgSrc.src)

    localStorage.setItem('array', JSON.stringify(data));
    localStorage.setItem('arrayImg', JSON.stringify(dataImg));
    getAllData();
    // when data are save get back event listeners
    addList.addEventListener("click", createLi)
    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            createLi();
            input.focus()
        }
    })

}


