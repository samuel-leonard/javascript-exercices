/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("addition").addEventListener("click", () => {
        let addition = parseInt(document.getElementById("op-one").value) + parseInt(document.getElementById("op-two").value);
        alert(addition);
    });

    document.getElementById("substraction").addEventListener("click", () => {
        let substraction = parseInt(document.getElementById("op-one").value) - parseInt(document.getElementById("op-two").value);
        alert(substraction);
    });
    document.getElementById("multiplication").addEventListener("click", () => {
    let multiplication = parseInt(document.getElementById("op-one").value) * parseInt(document.getElementById("op-two").value);
    alert(multiplication);
});

document.getElementById("division").addEventListener("click", () => {
let division = parseInt(document.getElementById("op-one").value) / parseInt(document.getElementById("op-two").value);
alert(division);
});
})();