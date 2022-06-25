export default class CSSRating {
    //properties
<<<<<<< HEAD
    #url
    #URI = `https://jigsaw.w3.org/css-validator/validator?uri=`
    #param = `&output=html`
=======
    #cssCode
    #points = Math.random() * 1 + 1

    //methods
>>>>>>> master

    //methods
    constructor(url) {
        this.#url = `${this.#URI}${url}${this.#param}`
    }

    //calculating points
<<<<<<< HEAD
    calculate = () => {
        return new Promise(async (resolve, reject) => {
            await fetch(this.#url)
                .then((data) => data.text())
                .then((text) => {
                    let parser = new DOMParser()
                    let htmlDoc = parser.parseFromString(text, "text/html")
                    let errorStr =
                        htmlDoc.querySelector('a[href="#errors"]').textContent
                    let error = parseInt(errorStr.match(/\d+/)[0])
                    let infoStr = htmlDoc.querySelector(
                        'a[href="#warnings"]'
                    ).textContent
                    let info = parseInt(infoStr.match(/\d+/)[0])
                    this.points = 2 - (error / 1000 + info / 2000)
                    resolve(this.points)
                })
                .catch(() => reject("Something went wrong"))
            // console.log(response)
=======

    calculate = () => {
        return new Promise(async (resolve, reject) => {
            await fetch(this.#url)
                .then((response) => console.log(response.text()))
                .catch((err) => reject(err))
            resolve()
>>>>>>> master
        })
    }
}
