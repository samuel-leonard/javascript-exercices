/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
//Au clic sur le bouton, affiche dans les balises prévues les dix éléments d'un tableau 
//de 10 nombres (entre 1 et 100), ainsi que les statistiques suivantes : le plus petit nombre,
// le plus grand, la somme des nombres et la moyenne de ceux-ci.









(() => {
    document.getElementById('run').addEventListener("click", () => {
        const listOne = ['n-1', 'n-2', 'n-3', 'n-4', 'n-5', 'n-6', 'n-7', 'n-8', 'n-9', 'n-10'];
        const listTwo = ['min', 'max', 'sum', 'average'];
        number = [];
        for (let i = 0; i <= 9; i++) {
            number = number.concat(Math.floor(Math.random() * (100 - 0) + 1));
        }
        let maximum = Math.max(...number);
        let minimum = Math.min(...number);
        let sum = number.reduce((previous, current) => current += previous);
        let average = sum / (number.length);
        let stat = [minimum, maximum, sum, average]

        for (let i = 0; i <= listOne.length - 1; i++) {
            document.getElementById(listOne[i]).innerHTML = number[i];
        }
        for (let j = 0; j <= listTwo.length - 1; j++) {
            document.getElementById(listTwo[j]).innerHTML = stat[j];
        }

    });
})();