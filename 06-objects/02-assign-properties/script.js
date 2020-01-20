/* becode/javascript
 *
 * /06-objects/02-assign-properties/script.js - 6.2: assigner des propriétés
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
//Dans le script, j'ai un tableau computers, qui fait l'inventaire des ordinateurs
// d'une classe.Malheureusement, cet inventaire est incomplet.J'ai donc créé l'object 
// defaultProps
// qui contient les propriétés nécéssaires et leurs valeurs par défaut.
// Au clic sur le bouton, afficher dans la console le contenu du tableau computers
// avec, pour chaque élément, toutes les propriétés nécéssaires. Attention :
//si un élément a déjà une valeur pour une propriété, 
//il ne faut surtout pas la remplacer par la valeur par défaut !

(() => {
    const computers = [
        {id: "0001", available: false, user: "leny", os: "macOS"},
        {id: "0002", available: false, user: "Nicolas"},
        {id: "0003"},
        {id: "0004", os: "Windows"},
        {id: "0005"},
        {id: "0006", os: "macOS"},
        {id: "0007"},
        {id: "0008"},
        {id: "0009", available: false, user: "Anthony"},
    ];
    const defaultProps = {
        available: true,
        os: "linux",
        user: null,
    };
    // your code here

    document.getElementById("run").addEventListener("click", () => {
        computers.forEach(computer => {

            if (!computer.hasOwnProperty("available"))
                computer.available = defaultProps.available;
            if (!computer.hasOwnProperty("user"))
                computer.user = defaultProps.user;
            if (!computer.hasOwnProperty("os"))
                computer.os = defaultProps.os;

        });
        console.log(computers);
    });
})();
