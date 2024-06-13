export function clearLocalArrays() {
    document.querySelector(".ourList").innerHTML = "";
    document.querySelector(".savedElements").innerHTML = "";
    localStorage.setItem('array', JSON.stringify([]));
    localStorage.setItem('arrayImg', JSON.stringify([]));
}