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


    let age =prompt("quel age avez vous?");
    let sexe= prompt("êtes vous un homme ou une femme?");
    let ville=prompt("dans quelle ville habitez vous?");

    while (confirm("vous avez "+age+" ans\nVous êtes un(e) "+sexe+"\nVous habitez "+ville)===false){
        age =prompt("quel age avez vous?");
        sexe= prompt("êtes vous un homme ou une femme?");
        ville=prompt("dans quelle ville habitez vous?");

    }
