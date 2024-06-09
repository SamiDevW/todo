export function localImport(key) {
    let data = JSON.parse(localStorage.getItem(key)) || [];
    return data
}