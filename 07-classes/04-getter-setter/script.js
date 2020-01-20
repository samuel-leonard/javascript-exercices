/* becode/javascript
 *
 * /07-classes/04-getter-setter/script.js - 7.4: getter & setter
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
// Crée une classe Person. Elle aura deux propriétés, firstnameet lastname, .
// ainsi qu'un getter name, qui retournera "[firstname] [lastname]", et un setter name ,
// qui divisera le nom complet sur base d'un espace : le premier élément sera le firstname, le second le lastname.
// Au clic sur le bouton, crée une instance de la classe Person et affiche dans la console la valeur de name,
// puis affecte-lui une nouvelle valeur et affiche dans la console l'état de l'instance en fin de process.
(() => {
    class Person {
        constructor(firstname, lastname) {
            this.firstname = firstname;
            this.lastname = lastname;
        }

        get name() {
            return this.firstname + " " + this.lastname; // permets de récupérer une propriété.
        }

        set name(valeur) {
            [this.firstname, this.lastname] = valeur.split(' ');
        } //permets de définir une propriété
    }

    document.getElementById("run").addEventListener("click", () => {
        let sam = new Person("samuel", "leonard");
        console.log(sam.name); // Etat de départ
        sam.name = "jean valjean"; // Assigne nouveau nom
        console.log(sam.name); // Affiche les nouvelles valeurs
        console.log(sam); // Affiche l'instance
    });
})();