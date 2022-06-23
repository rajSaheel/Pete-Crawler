export default class CSSRating {
    //properties
    #url
    #URI = `https://jigsaw.w3.org/css-validator/validator?uri=`
    #param = `&output=html`

    //methods
    constructor(url) {
        this.#url = `${this.#URI}${url}${this.#param}`
    }

    //calculating points
    calculate = () => {
        return new Promise(async (resolve, reject) => {
            await fetch(this.#url)
                .then((data) => data.text())
                .then((text) => {
                    // console.log(text)
                    let parser = new DOMParser()
                    let htmlDoc = parser.parseFromString(text, "text/html")
                    let errorStr =
                        htmlDoc.querySelector('a[href="#errors"]').textContent
                    let error = parseInt(errorStr.match(/\d+/)[0])
                    let infoStr = htmlDoc.querySelector(
                        'a[href="#warnings"]'
                    ).textContent
                    let info = parseInt(infoStr.match(/\d+/)[0])
                    this.points = 2 - (error / 100 + info / 200)
                    resolve(this.points)
                })
                .catch((err) => console.log(err))
        })
    }
}
