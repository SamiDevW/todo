
export let btnCollapse = document.querySelector('.collapse');
export function collapseList() {

    let saved = document.querySelectorAll(".savedElements .card");
    saved.forEach(element => {
        console.log(element.style);
        // element style seem to be empty when i create the element with js
        if (window.getComputedStyle(element).display === 'flex') {
            btnCollapse.textContent = 'SHOW'
            element.style.display = "none"
            savedElements.style.marginBottom = '600px'
            savedElements.style.width = '20px'
        }
        else if (window.getComputedStyle(element).display === "none") {
            btnCollapse.textContent = 'COLLAPSE'
            element.style.display = "flex"
            savedElements.style.marginBottom = '20px'
            savedElements.style.width = "fit-content"
        }

    });

}