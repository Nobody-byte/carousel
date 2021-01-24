/**
 * @param {HTMLelement} element
 * @param {object} options.slideToScroll nombre d'élement à faire défiler
 * @param {object} options.slideVisibles nombre d'élement à afficher dans le slide
 *
 */

class carousel{

        constructor (element, options = {}) {
            console.log('hello')

}

document.addEventListener('DOMcontentLoaded', function () {

    //en 1er parametre j'ai mon element HTML et en 2eme j'ai un objet d'obtion
    //voir les commentaires dans le constructeur
new carousel(document.querySelector('#carousel1'), {

        slidesToScroll :3,
        slidesVisibles : 3
    })
});