/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
// <p>Pose trois questions à l'utilisateur : son âge, sexe et ville. Affiche-les dans une <em>boîte de dialogue</em> qui lui demandera de confirmer. S'il ne confirme pas ses informations, <strong>recommence le processus</strong>.</p>


    var age =   prompt("quel est votre age?");
    var sexe =  prompt("quel est votre sexe?");
    var ville = prompt('Dans quelle ville habitez vous?');


    
    while(confirm("Vous avez "+age+ " ans, vous êtes un(e) "+ sexe+ " Et vous habitez "+ ville)==false){
        
    age =   prompt("quel est votre age?");
    sexe =  prompt("quel est votre sexe?");
    ville = prompt('Dans quelle ville habitez vous?');
    }
