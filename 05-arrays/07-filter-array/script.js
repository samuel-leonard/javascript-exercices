/* becode/javascript
 *
 * /05-arrays/07-filter-array/script.js - 5.7: filtrer un tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

//Au clic sur le bouton, crée un nouveau tableau à partir du tableau people
// qui ne contiendra que les personnes dont l'âge est supérieur à 18 ans. Affiche le tableau .
//résultant dans la console

(() => { let major = [];
    document.getElementById('run').addEventListener("click", () => {
        const people = [{
                firstname: "Dreddy",
                lastname: "Nussgen",
                age: 70,
            },
            {
                firstname: "Yves",
                lastname: "Sear",
                age: 49,
            },
            {
                firstname: "Marcel",
                lastname: "Cowderay",
                age: 59,
            },
            {
                firstname: "Dag",
                lastname: "Binnall",
                age: 31,
            },
            {
                firstname: "Horten",
                lastname: "Claesens",
                age: 75,
            },
            {
                firstname: "Charmian",
                lastname: "Harnes",
                age: 10,
            },
            {
                firstname: "Sean",
                lastname: "Littlejohns",
                age: 37,
            },
            {
                firstname: "Hazlett",
                lastname: "Sprouls",
                age: 87,
            },
            {
                firstname: "Marcel",
                lastname: "Hasted",
                age: 66,
            },
            {
                firstname: "Cary",
                lastname: "Summerson",
                age: 15,
            },
            {
                firstname: "Feodor",
                lastname: "Ollett",
                age: 56,
            },
            {
                firstname: "Kelly",
                lastname: "Ranahan",
                age: 62,
            },
            {
                firstname: "Madelene",
                lastname: "Davie",
                age: 14,
            },
            {
                firstname: "Bent",
                lastname: "Karpe",
                age: 82,
            },
            {
                firstname: "Reinaldo",
                lastname: "Grimbleby",
                age: 81,
            },
        ];
        people.forEach(gens => {
            if (gens.age >= 18 ) {
                major.push(gens);
            }            
        });
        console.log(major);
    });
})();