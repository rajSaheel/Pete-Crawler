export default class CSSRating {
    
    //properties
    startPos
    endPos
    #url
    #sourceCode
    #errors
    #warnings
    #URI = `https://jigsaw.w3.org/css-validator/validator?uri=`
    #param = `&output=soap12`
    
    
    //methods
    constructor(url) {
        this.#url = `${this.#URI}${url}${this.#param}`
        this.#fetchCode()
    }

    #fetchCode = () => {
        fetch(this.#url)
        .then(response=>xml2json(response))
        .then(data=>{
            console.log(data);
            // this.#sourceCode=data
            // this.#errors = this.#getErrors()
            // this.#warnings = this.#getWarnings()
            // this.#calculatePoints()
        })
    }

    #getErrors = () => {
        this.startPos = this.#sourceCode.indexOf('#errors')
        this.endPos = this.#sourceCode.indexOf(')</a')
        let points = this.#sourceCode.slice(this.startPos+17,this.endPos)
        return parseInt(points)
    }

    #getWarnings = () => {
        this.startPos = this.#sourceCode.indexOf('#warnings')
        this.endPos = this.#sourceCode.indexOf(')</a',this.startPos)
        let points = this.#sourceCode.slice(this.startPos+21,this.endPos)
        return parseInt(points)
    }

    //calculating points
    #calculatePoints = () => {
        this.points = 4 - ((this.#errors/50) + (this.#warnings/100))
        console.log("css in calculating points"+this.points)
    }

}