//Get all the products script.js
outputs = "";
document.querySelectorAll(`body > main > section > div`).forEach(el => {
    try {
        let src = el.querySelector('a > img').src;
        let name = String(el.querySelector('a > h1').innerHTML);
        
        let output = `
        <div>
        <a href="product.html?src=${src}&name=${name.trim()}&detail=${detail}&prijs=${prijs}">
            <img src="${src}" alt="${name.trim()}">
            <h1>${name.trim()}</h1>
        </div>`;
        console.log(output)
        outputs += "\n" + output
    } catch (error) {
        console.log(error);
        console.log(outputs);
    }
});

console.log(outputs);
