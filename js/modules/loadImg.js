export function loadImg(e) {
    let img = document.querySelector('.ourList img')
    // img.innerHTML = '';
    const file = e.target.files[0];
    console.log(file);
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            img.src = e.target.result
            img.style.display = 'block';
            console.log(img.src);
            // return img.src;
        };
        reader.readAsDataURL(file);
    }
}