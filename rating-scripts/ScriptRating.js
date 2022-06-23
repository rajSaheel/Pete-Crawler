export default class SciptRating {
    
    //properties
    #scriptCode
    
    #points
    //methods

    constructor(scriptCode) {
        this.#scriptCode = scriptCode
        this.#points = Math.random()*0.5 + 0.5
    }

    //calculating points
}