/* becode/javascript
 *
 * /08-dom/06-mini-carousel/script.js - 8.6: mini carousel
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// Au clic sur le bouton, 
//change la source de l'image par celle de l'image suivante dans le tableau gallery. Fais-en une boucle.


(() => {
        const gallery = [
            "../../_shared/img/bell.svg",
            "../../_shared/img/clock.svg",
            "../../_shared/img/compass.svg",
            "../../_shared/img/lemon.svg",
            "../../_shared/img/map.svg",
        ];

// on définit l'itération qui prend 1 
        let i = [1];
//on récupère l'id next pour réaliser le click 
        document.getElementById("next").addEventListener("click", () => {
//on définit une nouvelle valeur, imgslide, pour exécuter le carousel 
            let imgslide = gallery[i];
//on récupère l'img de la valeur définie = imgslide (qui reprend les imgs provenant la gallery) 
            document.querySelector("img").src = imgslide;
            i++;
            if (i === 5) {
                i = 1;
            }
        });
    })();