//Get images from prject scprit.js
let outputs = ""
document.querySelectorAll(`#jw-element-90758952 > div > a`).forEach(el => {
    let output = `<img src="${el.href}" alt="Foto van het bouwen van een mooie lamp">`;
    console.log(output)
    outputs += "\n" + output
});

console.log(outputs);
