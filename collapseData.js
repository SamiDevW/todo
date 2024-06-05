let btnCollapse = document.querySelector('.collapse');
let savedElements = document.querySelector('.savedElements')
// btnCollapse.style.display = "none"
console.log(btnCollapse);
btnCollapse.addEventListener('click', () => {
    let saved = document.querySelectorAll(".savedElements .card");
    // console.log(saved);
    saved.forEach(element => {
        console.log(element.style);
        // element style seem to be empty when i create the element with js
        if (element.style.display === "") {
            btnCollapse.textContent = 'SHOW'
            element.style.display = "none"
            savedElements.style.marginBottom = '600px'
            savedElements.style.width = '20px'

        }
        else if (element.style.display === "none") {
            btnCollapse.textContent = 'COLLAPSE'
            element.style.display = "flex"
            savedElements.style.marginBottom = '20px'
            savedElements.style.width = "fit-content"
            // savedElements.style.maxWidth = "500px"

        }
        else if (element.style.display === 'flex') {
            btnCollapse.textContent = 'SHOW'

            element.style.display = "none"
            savedElements.style.marginBottom = '600px'
            savedElements.style.width = '20px'
        }
    });

})