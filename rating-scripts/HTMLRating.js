export default class HTMLRating {
    //properties
    #url
    #URI = `https://validator.nu/?doc=`
    #param = `&out=json`
    //methods

    constructor(url) {
        this.#url = `${this.#URI}${url}${this.#param}`
    }

    //calculating points
    calculate = () => {
        return new Promise(async (resolve) => {
            const result = await fetch(this.#url)
                .then((data) => data.json())
                .then((json) => json.messages)
            if (result) {
                let error = 0
                let info = 0
                for (let obj of result) {
                    if (obj.type === "error") error++
                    else if (obj.type === "info") info++
                }
                this.points = 2 - (error / 50 + info / 100)
                resolve(this.points)
            }
        })
    }
}
