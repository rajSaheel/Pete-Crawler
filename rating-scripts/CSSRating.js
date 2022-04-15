export default class CSSRating {
    
    //properties
    #cssCode
    #points = Math.random()*1 + 1
    
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