import HTMLRating from "./HTMLRating.js"
import CSSRating from "./CSSRating.js"

export default class Rating {
    //properties
    #htmlObj
    #cssObj
    #url

    //methods
    constructor(url) {
        this.#url = url
        this.#htmlObj = new HTMLRating(url)
        this.#cssObj = new CSSRating(url)
    }

    //returning points
    getPoints = () => {
        return new Promise(async (resolve, reject) => {
            if (this.#url.protocol === "https:") {
                this.points = await this.#htmlObj.calculate()
                this.CSSpoints = await this.#cssObj.calculate()
                resolve(this.points + 1)
            }
            this.points = await this.#htmlObj.calculate()
            resolve(this.points)
        })
    }
}
