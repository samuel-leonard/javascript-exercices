/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
//Change le contenu de la balise indiquée par la date du jour, en français (ex : dimanche 28 octobre 2018, 23h32).

(() => {
    let option={weekday:'long',day:'numeric', month:'long', year:'numeric'}
    var date= new Date().toLocaleDateString('fr-FR',option);
document.getElementById("target").innerHTML= date;
})();
