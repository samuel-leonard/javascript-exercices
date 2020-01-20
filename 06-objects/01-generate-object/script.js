/* becode/javascript
 *
 * /06-objects/01-generate-object/script.js - 6.1: générer un object
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
// Au clic sur le bouton, affiche dans la console un object qui 
//te présente et contient les propriétés suivantes 
//lastname</em>, firstname</em>, <em>age</em>, <em>city</em>, <em>country</em>.</p>
(() => { document.getElementById("run").addEventListener("click", () => {
    let personne = {
        lastname : "Léonard",
        firstname : "Samuel",
        age : 41,
        city: "Thuin",
        country : "Belgium"}

        console.log(personne);

});
        
})();