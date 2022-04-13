export default class CSSRating {
    
    //properties
    #cssCode
    #points = Math.random()*2
    
    //methods

    constructor(cssCode) {
        this.#cssCode = cssCode
    }

    //calculating points

    

    //returning points
    getPoints = () => {
        return this.#points
    }

}