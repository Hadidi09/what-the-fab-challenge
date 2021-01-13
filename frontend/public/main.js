/**
 * @todo Point d'entrée pour faire vos exercices...
 */
/*window.onload = init

function init() {
    console.log("Coucou ! C'est ici que l'aventure commence ! Bon courage :-)")
}
*/
//let requete = document.querySelector('.form-control')
const url = "https://jikan.docs.apiary.io/";

axios.get(url)
.then (function (response) {
    console.log(response.json)
})