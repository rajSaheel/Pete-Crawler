export default class SciptRating {
    
    //properties
    #scriptCode
    #points = Math.random()*1
    
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