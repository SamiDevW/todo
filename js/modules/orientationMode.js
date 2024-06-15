export function orientationMode() {
    let direction = document.querySelector('.vertical')
    let savedEl = document.querySelector('.savedElements')
    console.log(window.getComputedStyle(savedEl).flexDirection);
    let savedElements = document.querySelectorAll(".savedElements .card");
    if (window.getComputedStyle(savedEl).flexDirection === 'column') {
        direction.innerHTML = '<i class="fa-solid fa-arrow-down"></i>'
        savedEl.style.flexDirection = 'row';
        savedElements.forEach(x => {
            x.style.flexDirection = 'column'
            x.style.maxWidth = "600px"
        })
        return
    }
    if (window.getComputedStyle(savedEl).flexDirection === 'row') {
        direction.innerHTML = '<i class="fa-solid fa-arrow-right"></i>'
        savedEl.style.flexDirection = 'column';
        savedElements.forEach(x => {
            x.style.flexDirection = 'row'
            x.style.gap = "20px"
            x.style.width = "fit-content"
            x.style.maxWidth = "none"
        })
    }


}