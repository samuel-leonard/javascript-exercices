/* becode/javascript
 *
 * /06-objects/03-keys-values/script.js - 6.3: clés & valeurs
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

// Au clic sur le bouton, affiche dans la console une liste des clés de l'object 
//person. Ensuite, affiche également la liste des valeurs de ce même object.</p>

(() => {
    const person = {
        lastname: "Delnatte",
        firstname: "Pierre-Antoine",
        nickname: "Leny",
        birthDate: "08-05-1985",
        city: "Liège",
        status: "married",
    };
    document.getElementById("run").addEventListener("click", ()=>{
        console.log(Object.keys(person));
        console.log(Object.values(person));

    })
})();
