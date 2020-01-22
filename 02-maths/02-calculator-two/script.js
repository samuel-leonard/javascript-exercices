/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value
    let resultat;
    const performOperation = operation => {
        let n1 = parseInt(document.getElementById("op-one").value);
        let n2 = parseInt(document.getElementById("op-two").value);


        switch (operation) {
            case "addition":
                resultat = (n1 + n2);
                alert(resultat);
                break;
            case "substraction":
                resultat = (n1 - n2);
                alert(resultat);
                break;
            case "multiplication":
                resultat = (n1*n2);
                alert(resultat);
                break;

        }
    };

    Array.from(document.querySelectorAll("button.operator")).forEach($btn =>
        $btn.addEventListener(
            "click",
            () => (performOperation($btn.id), false),
        ),
    );
})();