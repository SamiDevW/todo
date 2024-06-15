import { localImport } from "./localImport.js";
export function deleteCard(item) {
    let data = localImport('array')
    console.log(data);
    data = data.filter(x => x.post !== item);
    console.log(data);
    localStorage.setItem('array', JSON.stringify(data));
}