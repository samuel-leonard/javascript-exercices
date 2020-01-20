/* becode/javascript
 *
 * /08-dom/02-select-two/script.js - 8.2: sélection par sélecteur css
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */
// Sélectionne la balise p dont la classe est "target": remplace son contenu par "owned".
// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let targ = document.querySelector("p.target");
    targ.textContent = "owned";
    console.log(targ);
})();
