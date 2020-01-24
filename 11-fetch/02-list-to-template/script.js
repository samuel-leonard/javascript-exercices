/* becode/javascript
 *
 * /11-fetch/02-list-to-template/script.js - 11.2: liste vers template
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


document.getElementById("run").addEventListener("click", async () => {
    let ask = await fetch("http://localhost:3000/heroes");
    console.log(ask);
    let reponse = await ask.json();
    console.log(reponse);

    document.getElementById("target").innerHTML =

        reponse.map((heroes) => {
            return `
            <li class="hero">
                            <h4 class="title">
                                <strong class="name">${heroes.name}</strong>
                                <em class="alter-ego">${heroes.alterEgo}</em>
                            </h4>
                            <p class="powers">${heroes.abilities}</p>
                        </li>`
        });

});