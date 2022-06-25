import HTMLRating from "./HTMLRating.js"
import CSSRating from "./CSSRating.js"

export default class Rating {
    //properties
<<<<<<< HEAD
=======
    #url
>>>>>>> master
    #htmlObj
    #cssObj
    #url

    //methods
    constructor(url) {
        this.#url = url
<<<<<<< HEAD
        this.#htmlObj = new HTMLRating(url)
        this.#cssObj = new CSSRating(url)
=======
        this.#getSourceContent(this.#url)
        this.#htmlObj = new HTMLRating(this.#htmlTag)
        this.#cssObj = new CSSRating(this.#styleTags)
        this.#jsObj = new ScriptRating(this.#scriptTags)
    }

    //fetching source code
    #getSourceContent = (url) => {
        fetch(url)
            .then((response) => response.text())
            .then((data) => {
                this.#sourceContent = data
                this.#htmlTag = this.#sourceContent
                this.#htmlTag = this.#htmlTag.replace(/(\r\n|\n|\r)/gm, "")
                this.#scriptTags = this.#getTagContent(
                    this.#htmlTag,
                    "<script",
                    "</script>"
                )
                this.#styleTags = this.#getTagContent(
                    this.#htmlTag,
                    `<style`,
                    `</style>`
                )
            })
            .catch(() => {
                this.#sourceContent = ""
                this.#htmlTag = this.#sourceContent
                this.#htmlTag = this.#htmlTag.replace(/(\r\n|\n|\r)/gm, "")
                this.#scriptTags = this.#getTagContent(
                    this.#htmlTag,
                    "<script",
                    "</script>"
                )
                this.#styleTags = this.#getTagContent(
                    this.#htmlTag,
                    `<style`,
                    `</style>`
                )
            })
    }

    //differentiating html, style, script tags
    #getTagContent = (sourceContent, tagS, tagE) => {
        let tagArr = []
        while (sourceContent.includes(tagS)) {
            let startPos = sourceContent.indexOf(tagS)
            let endPos = sourceContent.indexOf(tagE) + tagE.length
            let currentContent = sourceContent.slice(startPos, endPos)
            tagArr.push(currentContent)
            this.#htmlTag = this.#htmlTag.replace(currentContent, "")
            sourceContent = sourceContent.slice(endPos)
        }
        return tagArr
>>>>>>> master
    }

    //returning points
    getPoints = () => {
<<<<<<< HEAD
        return new Promise(async (resolve) => {
            if (new URL(this.#url).protocol === "https:") {
                this.htmlPoints = await this.#htmlObj.calculate()
                this.cssPoints = await this.#cssObj.calculate()
                resolve(this.htmlPoints + this.cssPoints + 1)
            } else {
                this.htmlPoints = await this.#htmlObj.calculate()
                this.cssPoints = await this.#cssObj.calculate()
                resolve(this.htmlPoints + this.cssPoints)
            }
        })
    }
=======
        this.#points =
            this.#htmlObj.getPoints() +
            this.#cssObj.getPoints() +
            this.#jsObj.getPoints()

        return this.#points
    }

    //logging
    #logProp = (prop) => {
        console.log(prop)
        return new Promise(async (resolve, reject) => {
            if (this.#url.protocol === "https:") {
                this.points = await this.#htmlObj.calculate()
                this.CSSpoints = await this.#cssObj.calculate()
                console.log(this.CSSpoints)
                resolve(this.points + 1)
            }
            this.points = await this.#htmlObj.calculate()
            resolve(this.points)
        })
    }
>>>>>>> master
}
