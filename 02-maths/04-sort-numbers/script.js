/* becode/javascript
 *
 * /02-maths/04-sort-numbers/script.js - 2.4: classer des nombres
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
//Au clic sur le bouton, récupère les nombres affichés dans l'input,
// et affiche-les, classés du plus petit au plus grand

(() => {
    // to get the value of an input: document.getElementById("element-id").value
    var chaine = document.getElementById("numbers").value;
    chaine = chaine.split(",")
    document.getElementById("run").addEventListener("click", () => {
        // your code here
        for (let i = 0; i < chaine.lenght; i++) {
            chaine[i] = parseInt(chaine[i]);
        }
        chaine.sort((a, b) => (a - b));
        alert(chaine);

    });
})();