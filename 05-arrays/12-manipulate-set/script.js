/* becode/javascript
 *
 * /05-arrays/12-manipulate-set/script.js - 5.12: manipulation d'un Set
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


(() => {
    const fruits = new Set([
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "durian",
        "pêche",
        "raisin",
        "cerise",
    ]);
//Au clic sur le bouton, opère les transformations suivantes 
//sur le Set fruits: enlève la "pomme" et la "cerise", 
//ajoute une "banane" et un "kiwi".</p>
//Pour terminer, affiche le Set résultant dans la console.
document.getElementById("run").addEventListener("click", () => {
    // your code here
    fruits.delete("pomme");
    fruits.delete("cerise");
    fruits.add("banane");
    fruits.add("kiwi");
    console.log(fruits);
});
})();