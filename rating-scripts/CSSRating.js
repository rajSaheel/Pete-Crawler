export default class CSSRating {
    //properties
    #url
    #URI = `https://jigsaw.w3.org/css-validator/validator?uri=`
    #param = `&output=soap12`

    //methods
    constructor(url) {
        this.#url = `${this.#URI}${url}${this.#param}`
    }

    calculate = () => {
        return new Promise(async (resolve, reject) => {
            fetch(this.#url)
                .then((response) => response)
                .then((data) => {
                    console.log(data)
                })
                .catch((err) => console.log(err))
            resolve(1)
            reject(0)
        })
    }
}
