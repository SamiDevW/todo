let btnCollapse = document.querySelector('.collapse');
// btnCollapse.style.display = "none"
console.log(btnCollapse);
btnCollapse.addEventListener('click', () => {
    let saved = document.querySelectorAll(".savedElements .card");
    // console.log(saved);
    saved.forEach(element => {
        console.log(element.style);
        // element style seem to be empty when i create the element with js
        if (element.style.display === "") {
            element.style.margin = "200px"
            element.style.display = "none"
        } else if (element.style.display === "none") {

            element.style.display = "flex"
        }
        else if (element.style.display === 'flex') {
            element.style.display = "none"
            element.style.margin = "200px"
        }


    });

})