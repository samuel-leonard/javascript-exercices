/* becode/javascript
 *
 * /06-objects/04-from-entries/script.js - 6.4: fromEntries
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
// Ajout récent de javascript, la méthode fromEntries permet de créer des objects à partir d'un tableau.
// Au clic sur le bouton, affiche dans la console un object créée à partir des tableaux keys et values.

(() => {
    document.getElementById("run").addEventListener("click", () => {
    
    const keys = ["name", "species", "age", "gender", "color"];
    const values = ["Skitty", "cat", 9, "female", "tabby"];

    let entries = [];
    for (let i = 0; i < keys.length; i++) {
        entries[i] = [keys[i], values[i]];
    }

    const object = Object.fromEntries(entries);
        console.log(object);
    });
})();