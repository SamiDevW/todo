
import { localImport } from "./localImport.js";
export function deleteCard(item) {
    let data = localImport('array')
    let dataImg = localImport('arrayImg')
    let index = data.indexOf(item);
    console.log(index);
    if (index > -1) {
        data.splice(index, 1);
        dataImg.splice(index, 1); }
    localStorage.setItem('array', JSON.stringify(data));
    localStorage.setItem('arrayImg', JSON.stringify(dataImg));
}