export default class SciptRating {
    
    //properties
    #scriptCode
    #points = Math.random()*0.5 + 0.5
    
    //methods

    constructor(scriptCode) {
        this.#scriptCode = scriptCode
    }

    //calculating points

    

    //returning points
    getPoints = () => {
        return this.#points
    }
}