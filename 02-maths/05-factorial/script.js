/* becode/javascript
 *
 * /02-maths/05-factorial/script.js - 2.5: Factorielle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
// Au clic sur le bouton, récupère le nombre dans l'input, et affiche sa factorielle.

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", () => {

        let number = parseInt(document.getElementById("number").value);
        let factoriel = 1;
        for (let i = number; i >0; i--) {
            factoriel*=i;
        }
        alert(factoriel);

    });
})();