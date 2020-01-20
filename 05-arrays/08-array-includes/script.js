/* becode/javascript
 *
 * /05-arrays/08-array-includes/script.js - 5.8: présence dans un tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

/*Au clic sur le bouton, affiche dans la console si, oui ou non,
il y a une pomme dans le tableau fruits*/


(() => {
    const fruits = [
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "kiwi",
        "banane",
        "orange",
        "mandarine",
        "durian",
        "pêche",
        "raisin",
        "cerise",
    ];
    document.getElementById("run").addEventListener("click", () => {
        let objectApple = false;
        fruits.forEach(fruit => {
            if (fruit === "pomme")
                objectApple = true;
        });
        if (objectApple)
            console.log("Oui");
        else
            console.log("Non");

    });
})();