export default class HTMLRating {

    //properties

    #htmlCode
    #points = Math.random() * 2

    //methods

    constructor(htmlCode) {
        this.#htmlCode = htmlCode
    }

    //calculating points



    //returning points
    getPoints = () => {
        return this.#points
        console.log(this.#points);
    }

}