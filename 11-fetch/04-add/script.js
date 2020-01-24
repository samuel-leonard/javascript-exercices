/* becode/javascript
 *
 * /11-fetch/04-add/script.js - 11.4: ajouter un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", async () => {
        let adress = await fetch("http://localhost:3000/heroes");
        let heroName = document.getElementById("hero-name");
        let heroAlterEgo= document.getElementById("hero-alter-ego");
        let heroPower = document.getElementById("hero-powers");
        let response = await adress.json();
        console.log (response);

    });
})();