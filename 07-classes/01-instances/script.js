/* becode/javascript
 *
 * /07-classes/01-instances/script.js - 7.1: instances
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */
// <p>Dans le script, il y a la définition de la classe Cat
// Au clic sur le bouton, affiche dans la console deux instances de la classe Cat: Skitty, 9 ans, et Pixel, 6 ans
// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
document.getElementById("run").addEventListener("click",()=>{
        class Cat {
            constructor(name, age) {
                this.name = name;
                this.age = age;
            }
        }

            const Skitty = new Cat("Skitty", 9);
            const pixel = new Cat("Pixel", 6);
    
            console.log(Skitty);
            console.log(pixel);
        });
    })();