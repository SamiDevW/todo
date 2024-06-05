let btnVertical = document.querySelector('.vertical');
let savedEl = document.querySelector('.savedElements')



btnVertical.addEventListener('click', () => {

    console.log(document.getElementsByClassName('savedElements'));
    let savedElements = document.querySelectorAll(".savedElements .card");
    console.log(getComputedStyle(savedEl));

    if (window.getComputedStyle(savedEl).flexDirection === 'row') {
        savedEl.style.flexDirection = 'column';
        savedElements.forEach(x => {
            x.style.flexDirection = 'row'
            x.style.gap = "20px"
            x.style.width = "fit-content"
        })
    }
    else if (window.getComputedStyle(savedEl).flexDirection === 'column') {
        savedEl.style.flexDirection = 'row';
        savedElements.forEach(x => {
            x.style.flexDirection = 'column'
        })
    }




})