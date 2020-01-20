/* becode/javascript
 *
 * /05-arrays/14-bird-names-generator/script.js - 5.14: générateur de noms d'oiseau
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const birds = [
        {name: "mouette", fem: true},
        {name: "corbeau"},
        {name: "mésange", fem: true},
        {name: "hibou"},
        {name: "buse", fem: true},
        {name: "pigeon"},
        {name: "pie", fem: true},
        {name: "vautour"},
        {name: "faucon"},
        {name: "rouge-gorge"},
        {name: "tourterelle", fem: true},
        {name: "corneille", fem: true},
    ];
    const adjectives = new Set([
        "cendré",
        "huppé",
        "chantant",
        "hurlant",
        "perché",
        "grand",
        "petit",
        "bleu",
        "pantelant",
        "tangent",
        "arboré",
    ]);

    /*  Au clic sur le bouton, affiche dans la balise prévue un nom d'oiseau généré aléatoirement à partir des données du script.<br />
    Chaque nom est associé à une propriété qui vous permet de savoir si vous devez accorder l'adjectif (ajoutez un "e" en fin de mot).<br />
    Examples de résultat :La mouette chantante ou Le corbeau huppé.
    // your code here */
    let adjectivesArr = Array.from(adjectives);
    document.getElementById("run").addEventListener("click", () =>{
        
        let birdIndex = Math.floor(Math.random() * 12);
        let adjIndex = Math.floor(Math.random() * 10);
        let adjective;

        if (birds[birdIndex].fem)
            adjective = `${adjectivesArr[adjIndex]}e`;
        else
            adjective = `${adjectivesArr[adjIndex]}`;

        console.log(`${birds[birdIndex].name} ${adjective}`);

    });

})();
