/* becode/javascript
 *
 * /08-dom/10-match-password-two/script.js - 8.10: vérification de mots de passe (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", () => {

        let one = document.getElementById("pass-one");
        let two = document.getElementById("pass-two");
        if (one.value == two.value) {
            one.style.border = "1px solid green";
            two.style.border = "1px solid green";

        } else {
            one.setAttribute("class", "error");
            two.setAttribute("class", "error");


        };
    });
})();