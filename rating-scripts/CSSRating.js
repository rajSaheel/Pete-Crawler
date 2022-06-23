export default class CSSRating {
    //properties
    #cssCode
    #points = Math.random() * 1 + 1

    //methods

    constructor(cssCode) {
        this.#cssCode = cssCode
    }

    //calculating points

    calculate = () => {
        return new Promise(async (resolve, reject) => {
            await fetch(this.#url)
                .then((response) => console.log(response.text()))
                .catch((err) => reject(err))
            resolve()
        })
    }
}
