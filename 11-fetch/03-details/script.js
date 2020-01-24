/* becode/javascript
 *
 * /11-fetch/03-details/script.js - 11.3: details
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", async () => {
        let heroes = document.getElementById('hero-id').value - 1;
        let http = await fetch("http://localhost:3000/heroes");
        let response = await http.json();
        console.log(response);

        document.getElementById("target").innerHTML =


            `<li class="hero">
        <h4 class="title">
            <strong class="name">${response[heroes].name}</strong>
            <em class="alter-ego">${response[heroes].alterEgo}</em>
        </h4>
        <p class="powers">${response[heroes].abilities}</p>
    </li>`



    })
})();