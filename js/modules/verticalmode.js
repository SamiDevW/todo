export function verticalMode() {
    let savedEl = document.querySelector('.savedElements')
    let savedElements = document.querySelectorAll(".savedElements .card");
    if (window.getComputedStyle(savedEl).flexDirection === 'row') {
        savedEl.style.flexDirection = 'column';
        savedElements.forEach(x => {
            x.style.flexDirection = 'row'
            x.style.gap = "20px"
            x.style.width = "fit-content"
            x.style.maxWidth = "none"
        })
    }
    else if (window.getComputedStyle(savedEl).flexDirection === 'column') {
        savedEl.style.flexDirection = 'row';
        savedElements.forEach(x => {
            x.style.flexDirection = 'column'
            x.style.maxWidth = "600px"


        })
    }

}