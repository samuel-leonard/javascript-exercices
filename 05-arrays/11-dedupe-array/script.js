/* becode/javascript
 *
 * /05-arrays/11-dedupe-array/script.js - 5.11: dédoublonnement d'un tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
// Au clic sur le bouton, affiche dans la console le tableau fruits, 
//après l'avoir dédoublonné : chaque valeur ne doit apparaître qu'une seule fois.


(() => {
        const fruits = [
            "cerise",
            "durian",
            "pomme",
            "poire",
            "fraise",
            "tomate",
            "orange",
            "mandarine",
            "fraise",
            "durian",
            "pêche",
            "cerise",
            "raisin",
            "cerise",
        ];

        let fruit;

        document.getElementById("run").addEventListener("click", () => {
            fruit = new Set(fruits);    
            fruit = [...fruit];         
            console.log(fruit);
        });
        
    })();