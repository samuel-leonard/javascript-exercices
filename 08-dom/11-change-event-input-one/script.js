/* becode/javascript
 *
 * /08-dom/11-change-event-input-one/script.js - 8.11: événement change (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById('pass-one').addEventListener("input",function (e){

        if(e.target.value.length>=10){
            document.getElementById('pass-one').addEventListener("keypress",e =>e.preventDefault());
        }
let indicator = document.querySelector(".indicator");
let length = e.target.value.length;
indicator.textContent = length;
    }
    );


})();
