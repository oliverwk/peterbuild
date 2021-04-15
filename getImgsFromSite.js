//Get images from prject scprit.js
outputs = "";
document.querySelectorAll(`#jw-element-90762526 > ul > li`).forEach(el => {
    try {
        let src = el.querySelector('div > div.product-gallery__image-container > a > img').src;
        let name = String(el.querySelector('div > div.product-gallery__info-container > div.product-gallery__details > a').innerHTML);
        let output = `
        <div>
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