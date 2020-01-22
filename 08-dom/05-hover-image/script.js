/* becode/javascript
 *
 * /08-dom/05-hover-image/script.js - 8.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

// Au survol de l'image, change sa source par celle qui se trouve dans son attribut "data-hover".

(() => {
    // your code here
    let image = document.querySelector("img").getAttribute('src');
    let newAttr = document.querySelector('img').getAttribute("data-hover");
    let identity = document.querySelector('img').setAttribute('id','source');
    

        document.getElementById("source").addEventListener("mouseover", () => {
        console.log(newAttr);
        document.querySelector('img').setAttribute("src", newAttr);
    });

    document.getElementById("source").addEventListener("mouseout", () => {
        console.log(image);
        document.querySelector('img').setAttribute("src", image);
    });


    /*image.addEventListener("mouseover", () => {
        console.log(newAttr);
        image.setAttribute("src", newAttr);
    });

    image.addEventListener("mouseleave", () => {
        console.log(image);
        image.setAttribute("src", image);
    });*/
})();