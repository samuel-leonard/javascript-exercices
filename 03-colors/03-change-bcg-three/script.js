/* becode/javascript
 *
 * /03-colors/03-change-bcg-three/script.js - 3.3: couleur de fond (3)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
// Au clic sur le bouton, génére une couleur aléatoire et utilise-la comme couleur de fond de la page.</p>


(() => {
    document.getElementById("run").addEventListener("click", () => {
    document.body.style.backgroundColor='#'+(Math.random()*0xFFFFFF<<0).toString(16);
    })

})();
