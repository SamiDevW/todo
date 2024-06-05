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
            element.style.display = "none"
            savedElements.style.marginBottom = '600px'
            savedElements.style.width = '20px'
        }
        else if (element.style.display === "none") {
            element.style.display = "flex"
            savedElements.style.marginBottom = '20px'
            savedElements.style.width = "fit-content"

        } else if (element.style.display === 'flex') {
            element.style.display = "none"
            savedElements.style.marginBottom = '600px'
            savedElements.style.width += '20px'
        }




    });

})