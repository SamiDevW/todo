export let btnCollapse = document.querySelector('.collapse');
let savedElements = document.querySelector(".savedElements");
export function collapseList() {
    let saved = document.querySelectorAll(".savedElements .card");
    console.log(saved);
    saved.forEach(element => {
        if (window.getComputedStyle(element).display === 'flex') {
            btnCollapse.innerHTML = '<i class="fa-regular fa-square-minus"></i>'
            element.style.display = "none"
            savedElements.style.marginBottom = '600px'
            savedElements.style.width = '20px'
        }
        else if (window.getComputedStyle(element).display === "none") {
            btnCollapse.innerHTML = '<i class="fa-regular fa-square-plus"></i>'
            element.style.display = "flex"
            savedElements.style.marginBottom = '20px'
            savedElements.style.width = "fit-content"
        }
    });

}