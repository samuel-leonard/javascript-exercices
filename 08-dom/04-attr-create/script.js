/* becode/javascript
 *
 * /08-dom/04-attr-create/script.js - 8.4: manipulation d'attributs & création d'élément
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
// Récupère la valeur de l'attribut "data-image" de la balise dont l'id est "source". Crée ensuite une balise image dans la balise d'id "target" qui affichera cette valeur. Enfin, supprime la balise source.

(() => {
    // your code here
    let image = document.querySelector(".material figure img");
    let newImage = image.getAttribute("data-hover");
    image.addEventListener("mouseover", () => {
        console.log(newImage);
        image.setAttribute("src", newImage);
    });
})();