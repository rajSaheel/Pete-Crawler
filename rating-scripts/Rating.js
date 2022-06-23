import HTMLRating from "./HTMLRating.js"
import CSSRating from "./CSSRating.js"
import ScriptRating from "./ScriptRating.js"
import log from console

export default class Rating {
    //properties
    #htmlObj
    #cssObj
    #url
    points

    //methods
    constructor(url) {
        this.#htmlobj = new HTMLRating(url)
        this.#cssObj = new CSSRating(url)
    }

    //returning points
    getPoints = () => {
        return new Promise(async (resolve, reject) => {
            if (this.#url.protocol === "https:") {
                this.points = 1 + this.#htmlObj.points 
                resolve(this.points)
            }
            this.points = this.#cssObj
            resolve(this.points)
        })
    }

    //logging
    #logProp = (prop) => {
        log(prop)
    }
}

/*
<---initial attemp--->

    //properties
    #url 
    #htmlObj
    #cssObj
    #jsObj
    #sourceContent
    #htmlTag
    #scriptTags
    #styleTags
    #points

    //fetching source code
    #getSourceContent = (url) => {
        fetch(url)
            .then(response => response.text())
            .then(data => {
                this.#sourceContent = data
                this.#htmlTag = this.#sourceContent
                this.#htmlTag = this.#htmlTag.replace(/(\r\n|\n|\r)/gm, "")
                this.#scriptTags = this.#getTagContent(this.#htmlTag, '<script', '</script>')
                this.#styleTags = this.#getTagContent(this.#htmlTag, `<style`, `</style>`)
            })
            .catch(()=>{
                this.#sourceContent=""
                this.#htmlTag = this.#sourceContent
                this.#htmlTag = this.#htmlTag.replace(/(\r\n|\n|\r)/gm, "")
                this.#scriptTags = this.#getTagContent(this.#htmlTag, '<script', '</script>')
                this.#styleTags = this.#getTagContent(this.#htmlTag, `<style`, `</style>`)
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
    }

*/
