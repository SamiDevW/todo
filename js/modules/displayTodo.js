import { deleteCard } from "./deleteCard.js";
export function displayTodo(parent, source, text) {
    let card = document.createElement('div');
    card.setAttribute('class', 'card');
    parent.appendChild(card);
    card.innerHTML = `
        <p class="text">${text}</p>
        <input type="file" class="fileInput" name="image" id="fileInput">
        <label for="fileInput"  class="inputLabel">Upload Image</label>
        <div class="preview">
            <img src =${source}>
        </div>
            <div class="btnDiv">
                <button class="btn delete"><i class="fa-solid fa-trash"></i></button>
                <button class="btn save"><i class="fa-regular fa-floppy-disk "></i></button>
            </div>
        `
    let dels = card.querySelector(".delete")
    dels.addEventListener("click", () => {
        parent.removeChild(card);
        deleteCard(text)
    });
}